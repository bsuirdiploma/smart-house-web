import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../service/authorization-service/auth-service';
import {UserManagementService} from '../../../modules/swagger/generated/user/api/userManagement.service';
import {User} from '../../../modules/swagger/generated/user/model/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userList: Array<User>;

  constructor(private userManagementService: UserManagementService) {
  }

  ngOnInit(): void {
    this.userManagementService.findAllUsers(AuthService.getToken(), null, null).subscribe(
      value => this.userList = value.content
    );

  }

  remove(listNumber: any) {
    this.userManagementService.deleteUserById(this.userList[listNumber].id, AuthService.getToken()).subscribe(
      () => {
        this.userList.reduce(listNumber);
      }
    );
  }

}

