import {Component, Input, OnInit} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {NbDialogRef} from '@nebular/theme';
import {Sheet} from '../../../@core/data/sheet';

@Component({
  selector: 'ngx-download-dialog',
  templateUrl: './download-dialog.component.html',
  styleUrls: ['./download-dialog.component.scss'],
})
export class DownloadDialogComponent implements OnInit {

  @Input()
  sheet: Sheet;

  constructor(private dialogRef: NbDialogRef<DownloadDialogComponent>) { }

  ngOnInit(): void {
    // Vacío
  }

  downloadMusicXML() {
    window.location.href = `${environment.apiUrl}/api/sheets/${(this.sheet.id)}/file/musicxml`;
    this.dialogRef.close();
  }

  downloadPDF() {
    window.location.href = `${environment.apiUrl}/api/sheets/${(this.sheet.id)}/file/pdf`;
    this.dialogRef.close();
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

  close() {
    this.dialogRef.close();
  }

}
