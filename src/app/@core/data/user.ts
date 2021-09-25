import {Observable} from 'rxjs';
import {GeneticSpecs} from './specs';
import {Sheet} from './sheet';
import {TokenResponse} from './token';

export class User {
    id: number;
    name: string;
    surname: string;
    email: string;
    enabled: boolean;
    roles: Role[];
}

export class Role {
    id: number;
    name: string;
}

export class NewPasswordRequest {

    newPassword: string;

    constructor(newPassword) {
        this.newPassword = newPassword;
    }

}

export abstract class UserData {

  public abstract getUsers(): Observable<User[]>;
  public abstract put(id: number, user: User): Observable<User>;
  public abstract getUser(id:  number ): Observable<User>;
  public abstract postSheetRequest(specs: GeneticSpecs): Observable<Sheet>;
  public abstract generateToken(duration: number, userId: number): Observable<TokenResponse>;
  public abstract resetPassword(userId, newPassword): Observable<User>;

}
