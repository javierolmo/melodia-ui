import {Component, Input, OnInit} from '@angular/core';
import {Sheet, SheetData} from '../../../@core/data/sheet';
import {SheetService} from '../../../@core/utils/sheet.service';
import {NbToastrService} from '@nebular/theme';
import {interval, Subscription} from 'rxjs';
import {RestError} from '../../../@core/data/error';

@Component({
    selector: 'ngx-status',
    templateUrl: './status.component.html',
    styleUrls: ['./status.component.scss'],
})
export class StatusComponent implements OnInit {

    @Input()
    sheet: Sheet;

    refresher: Subscription;

    constructor(private sheetService: SheetData, private toastrService: NbToastrService) {
    }

    ngOnInit() {
        this.refresher = interval(2000).subscribe((x => this.refresh()));
    }

    isXMLAvailable(): boolean {
      return this.sheet.xmlPath != null && this.sheet.xmlPath.length > 0;
    }

    isPDFAvailable(): boolean {
      return this.sheet.pdfPath != null && this.sheet.pdfPath.length > 0;
    }

    isSpecsAvailable(): boolean {
      return this.sheet.specsPath != null && this.sheet.specsPath.length > 0;
    }

    retry(id: number) {
        this.sheetService.retry(this.sheet.id).subscribe(
            result => {
                this.sheet.finished = false;
                this.toastrService.success(result, 'Tarea planificada');
            },
            (response: RestError) => {
                this.toastrService.danger(response.error.message, 'ERROR');
            },
        );
    }

    private refresh() {
        this.sheetService.getSheet(this.sheet.id).subscribe(
            sheet => {
                if (sheet.finished) {
                    this.sheet = sheet;
                    this.refresher.unsubscribe();
                }
            });
    }

}
