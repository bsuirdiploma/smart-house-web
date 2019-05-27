import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../../../service/authorization-service/auth-service';
import {CtvManagementService} from '../../../modules/swagger/generated/ctv/api/ctvManagement.service';

@Component({
  selector: 'app-ctv-create',
  templateUrl: './create-ctv.component.html'
})
export class CreateCtvComponent {

  readonly name = new FormControl('', []);
  readonly location = new FormControl('', []);
  readonly videoUrl = new FormControl('', []);

  readonly form = new FormGroup({
    name: this.name,
    location: this.location,
    videoUrl: this.videoUrl
  });

  constructor(private ctvManagementService: CtvManagementService) {
  }

  submit() {
    this.ctvManagementService.createCtv(AuthService.getToken(), this.form.value)
      .subscribe(
        value => console.log(value),
        value => console.log(value),
      );
  }

}
