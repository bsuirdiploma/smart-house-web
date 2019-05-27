import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../../../service/authorization-service/auth-service';
import {UserManagementService} from '../../../modules/swagger/generated/user/api/userManagement.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './create-user.component.html'
})
export class CreateUserComponent {

  readonly name = new FormControl('', []);
  readonly surname = new FormControl('', []);
  readonly role = new FormControl('', []);
  readonly login = new FormControl('', []);
  readonly password = new FormControl('', []);

  readonly form = new FormGroup({
    name: this.name,
    surname: this.surname,
    role: this.role,
    login: this.login,
    password: this.password
  });

  constructor(private userManagementService: UserManagementService) {
  }

  submit() {
    this.userManagementService.createUser(AuthService.getToken(), this.form.value)
      .subscribe(
        value => console.log(value),
        value => console.log(value),
      );
  }

}
