import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from 'environments/environment';
import {Sheet, SheetData, SheetPage} from '../data/sheet';

@Injectable()
export class SheetService extends SheetData {

    constructor(
        private httpClient: HttpClient,
    ) {
      super();
    }

    getSheets(id?: number, nameSubstring?: string, ownerId?: number, finished?: boolean) {
        let urlRequest = `${environment.apiUrl}/api/sheets?`;

        // Add parameters
        if (id !== undefined) urlRequest += 'id=' + id;
        if (nameSubstring !== undefined) urlRequest += 'nameContains=' + nameSubstring;
        if (ownerId !== undefined) urlRequest += 'ownerId=' + ownerId;
        if (finished !== undefined) urlRequest += 'finished=' + finished;

        return this.httpClient.get<Sheet[]>(urlRequest);
    }

    getSheetPage(page: number, size: number, text: string) {
        const urlRequest = `${environment.apiUrl}/api/sheets/pages?page=${page}&number=${size}&text=${text}`;
        return this.httpClient.get<SheetPage>(urlRequest);
    }

    downloadSheetXML(id: number) {
        const urlRequest = `${environment.apiUrl}/api/sheets/${id}/download/xml`;
        return this.httpClient.get(urlRequest);
    }

    getSheetXML(id: number) {
        const urlRequest = `${environment.apiUrl}/api/sheets/${id}`;
        return this.httpClient.get(urlRequest, {responseType: 'text'});
    }

    getSheet(id: number) {
        const urlRequest = `${environment.apiUrl}/api/sheets/${id}`;
        return this.httpClient.get<Sheet>(urlRequest);
    }

    deleteSheet(id: number) {
        const urlRequest = `${environment.apiUrl}/api/sheets/${id}`;
        return this.httpClient.delete(urlRequest, {responseType: 'text'});
    }

    retry(id: number) {
        const urlRequest = `${environment.apiUrl}/api/sheets/${id}/retry`;
        return this.httpClient.get(urlRequest, {responseType: 'text'});
    }


}
