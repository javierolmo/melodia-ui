import {Injectable} from '@angular/core';
import {Sheet, SheetData, SheetPage} from '../data/sheet';
import {of} from 'rxjs';

@Injectable()
export class SheetMockService extends SheetData {

  private sheets: Sheet[] = [
    {id: 1, name: 'Mock Sheet 1', date: '25/09/2021', finished: true, style: 'Boogie Woogie', sheet: '????', specs: true, xml: true, pdf: true},
    {id: 2, name: 'Mock Sheet 2', date: '25/09/2021', finished: false, style: 'Boogie Woogie', sheet: '????', specs: true, xml: true, pdf: true},
    {id: 3, name: 'Mock Sheet 3', date: '25/09/2021', finished: true, style: 'Boogie Woogie', sheet: '????', specs: false, xml: false, pdf: false},
    {id: 4, name: 'Mock Sheet 4', date: '25/09/2021', finished: true, style: 'Boogie Woogie', sheet: '????', specs: true, xml: true, pdf: true},
    {id: 5, name: 'Mock Sheet 5', date: '25/09/2021', finished: true, style: 'Boogie Woogie', sheet: '????', specs: true, xml: true, pdf: true},
    {id: 6, name: 'Mock Sheet 6', date: '25/09/2021', finished: true, style: 'Boogie Woogie', sheet: '????', specs: true, xml: true, pdf: true},
  ];

  private sheetPage: SheetPage = {
    content: this.sheets,
    empty: false,
    first: true,
    last: true,
    size: true,
    number: 0,
    numberOfElements: 6,
    pageable: undefined,
    sort: undefined,
    totalElements: 6,
    totalPages: 1,
  };

  getSheets(id?: number, nameSubstring?: string, ownerId?: number, finished?: boolean) {
    return of(this.sheets);
  }

  getSheetPage(page: number, size: number, text: string) {
    return of(this.sheetPage);
  }

  downloadSheetXML(id: number) {
    console.log('Working');
  }

  getSheetXML(id: number) {
    console.log('Working');
  }

  getSheet(id: number) {
    return of(this.sheets.filter(sheet => sheet.id === id)[0]);
  }

  deleteSheet(id: number) {
    this.sheets = this.sheets.filter(sheet => sheet.id !== id);
  }

  retry(id: number) {
    const selected = this.sheets.filter(sheet => sheet.id === id)[0];
    selected.finished = false;

    setTimeout(value => {
      selected.pdf = true;
      selected.specs = true;
      selected.pdf = true;
      selected.finished = true;
    }, 5000);

  }


}
