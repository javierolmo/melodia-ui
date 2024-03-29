import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NbDialogService, NbToastrService} from '@nebular/theme';
import {DownloadDialogComponent} from './download-dialog/download-dialog.component';
import {NbAuthJWTToken, NbAuthService} from '@nebular/auth';
import {Sheet, SheetData} from '../../@core/data/sheet';
import {SheetService} from '../../@core/utils/sheet.service';
import {RestError} from '../../@core/data/error';
import {environment} from '../../../environments/environment';

@Component({
    selector: 'ngx-repositorio',
    templateUrl: './repositorio.component.html',
    styleUrls: ['./repositorio.component.scss'],
})
export class RepositorioComponent implements OnInit {

    userId: number = null;
    sheets: Sheet[] = [];
    filteredSheets: Sheet[] = [];
    busquedaForm: FormGroup;
    loading: boolean = false;

    constructor(
        private sheetService: SheetData,
        private formBuilder: FormBuilder,
        private nbDialogService: NbDialogService,
        private toastrService: NbToastrService,
        private dialogService: NbDialogService,
        private authService: NbAuthService,
    ) {
        this.authService.onTokenChange().subscribe((token: NbAuthJWTToken) => {
            if (token.isValid()) {
                this.userId = token.getPayload()['id'];
            }
        });

        this.busquedaForm = formBuilder.group({
            name: '',
        });
    }

    ngOnInit(): void {
        this.sheetService.getSheets(undefined, undefined, this.userId).subscribe(
            sheets => {
                this.sheets = sheets;
                this.loading = false;
                this.filteredSheets.push(...this.sheets);
            },
            (response: RestError) => {
                this.toastrService.danger(response.error.message, 'ERROR');
            });
    }

    filterSheets(name: string) {
        if (this.busquedaForm.valid) {
            this.loading = true;
            this.filteredSheets = this.sheets.filter(sheet => sheet.name.toLowerCase().includes(name.toLowerCase()));
            this.loading = false;
        }
    }

    openDownloadDialog(sheet: Sheet) {
        this.dialogService.open(DownloadDialogComponent, {
            context: {
                sheet: sheet,
            },
        });
    }

    deleteSheet(id: number) {
        this.sheetService.deleteSheet(id).subscribe(
            value => {
                this.showToast('Partitura eliminada con éxito!', 'Éxito', 'top-right', 'success');
                this.sheetService.getSheets().subscribe(
                    sheets => {
                        this.sheets = sheets;
                        this.filterSheets('');
                    },
                    (response: RestError) => {
                        this.toastrService.danger(response.error.message, 'ERROR');
                    });
                this.filterSheets('');
            },
            (response: RestError) => {
                this.toastrService.danger(response.error.message, 'ERROR');
            },
        );
    }

    showToast(message, title, position, status) {
        this.toastrService.show(message, title, {position, status});
    }

    openNewTab(id: number) {
        const url = `${environment.apiUrl}/api/sheets/${id}.pdf`;
        window.open(url, '_blank');
    }

}
