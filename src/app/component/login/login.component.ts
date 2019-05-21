import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthorizationManagementService} from '../../modules/swagger/generated/user/api/authorizationManagement.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  readonly login = new FormControl('', []);
  readonly password = new FormControl('', []);

  readonly form = new FormGroup({
    login: this.login,
    password: this.password
  });

  constructor(private authorizationManagementService: AuthorizationManagementService) {
  }

  submit() {
    this.authorizationManagementService.authenticate(this.form.get('login').value, this.form.get('password').value)
      .subscribe(
        value => {
          localStorage.setItem('token', value.token);
        },
        value => console.log(value),
      );
  }
}
