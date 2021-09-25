import {Observable} from 'rxjs';

export class Sheet {
    id: number;
    name: string;
    style: string;
    date: string;
    sheet: string;
    finished: boolean;
    specs: boolean;
    xml: boolean;
    pdf: boolean;
}

export interface SheetPage {
    content: Sheet[];
    pageable: {
      sort: {
        sorted: boolean,
        unsorted: boolean,
        empty: boolean,
      },
      offset: number,
      pageSize: number,
      pageNumber: number,
      paged: boolean,
      unpaged: boolean,
    };
    totalPages: number;
    totalElements: number;
    last: boolean;
    size: boolean;
    number: number;
    numberOfElements: number;
    sort: {
      sorted: boolean,
      unsorted: boolean,
      empty: boolean,
    };
    first: boolean;
    empty: boolean;
}

export abstract class SheetData {

  public abstract getSheets(id?: number, nameSubstring?: string, ownerId?: number, finished?: boolean): Observable<Sheet[]>;
  public abstract getSheetPage(page: number, size: number, text: string): Observable<SheetPage>;
  public abstract downloadSheetXML(id: number);
  public abstract getSheetXML(id: number);
  public abstract getSheet(id: number): Observable<Sheet>;
  public abstract deleteSheet(id: number);
  public abstract retry(id: number);

}
