import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Instrumento} from '../data/instrumento';
import {environment} from '../../../environments/environment';

@Injectable()
export class InstrumentService {

    constructor(private httpClient: HttpClient)  {}

    getInstruments()  {
        const urlRequest = `${environment.apiUrl}/api/instruments`;
        return this.httpClient.get<Instrumento[]>(urlRequest);
    }

}
