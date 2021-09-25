import {Observable} from 'rxjs';

export interface Release {
  version: string;
  date: string;
  news: string[];
}

export abstract class ReleaseData {
  abstract getReleases(): Observable<Release[]>;
}
