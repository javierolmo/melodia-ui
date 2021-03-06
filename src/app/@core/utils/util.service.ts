import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Instrumento } from '../data/instrumento';
import {Measure} from '../data/measure';
import {Tonality} from '../data/tonality';
import {environment} from '../../../environments/environment';

@Injectable()
export class UtilService {

  constructor(private httpClient: HttpClient)  {}

  getAvailableInstruments()  {
      const urlRequest = `${environment.apiUrl}/api/util/available-instruments`;
      return this.httpClient.get<Instrumento[]>(urlRequest);
  }

  getAvailableMeasures()  {
    const urlRequest = `${environment.apiUrl}/api/util/available-measures`;
    return this.httpClient.get<Measure[]>(urlRequest);
  }

  getAvailableTonalities()  {
    const urlRequest = `${environment.apiUrl}/api/util/available-tonalities`;
    return this.httpClient.get<Tonality[]>(urlRequest);
  }




}
