import { Component, OnInit } from '@angular/core';
import {NbAuthJWTToken, NbAuthService} from '@nebular/auth';
import {User} from '../../@core/data/user';
import {UserService} from '../../@core/utils/user.service';
import {NbToastrService} from '@nebular/theme';
import {RestError} from "../../@core/data/error";

@Component({
  selector: 'ngx-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  user: User = new User();

  loadingToken: boolean = false;
  token: string = '';

  constructor(
      private authService: NbAuthService,
      private userService: UserService,
      private toastrService: NbToastrService) {

  }

  ngOnInit(): void {
    this.authService.onTokenChange().subscribe((token: NbAuthJWTToken) => {
      if (token.isValid()) {
        const id = token.getPayload()['id'];
        this.userService.getUser(id).subscribe(value => this.user = value);
      }
    });
  }

  generateToken(duration: number) {
    this.loadingToken = true;
    this.userService.generateToken(duration, this.user.id).subscribe(
        tokenResponse => {
          this.loadingToken = false;
          this.token = tokenResponse.token;
          this.toastrService.success('Token generado con éxito!', 'Éxito');
        },
        (response: RestError) => {
          this.loadingToken = false;
          this.toastrService.danger(response.error.message, 'ERROR');
        },
    );
  }

}
