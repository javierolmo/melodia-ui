import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../@core/utils/user.service';
import {User, UserData} from '../../../@core/data/user';
import {NbDialogService, NbToastrService} from '@nebular/theme';
import {RestError} from "../../../@core/data/error";

@Component({
  selector: 'ngx-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {

  users: User[];

  constructor(userService: UserData, toastrService: NbToastrService, dialogService: NbDialogService) {
    userService.getUsers().subscribe(
        users => this.users = users,
        (response: RestError) => {
          toastrService.danger(response.error.message, 'ERROR');
        },
    );
  }

  ngOnInit(): void {

  }

}
