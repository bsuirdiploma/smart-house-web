import {Component} from '@angular/core';
import {WateringManagementService} from '../../../modules/swagger/generated/watering/api/wateringManagement.service';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../../../service/authorization-service/auth-service';

@Component({
  selector: 'app-watering',
  templateUrl: './create-watering.component.html'
})
export class CreateWateringComponent {

  readonly name = new FormControl('', []);
  readonly location = new FormControl('', []);
  readonly wateringPortName = new FormControl('', []);
  readonly wateringCron = new FormControl('', []);
  readonly wateringDuration = new FormControl('', []);

  readonly form = new FormGroup({
    name: this.name,
    location: this.location,
    wateringPortName: this.wateringPortName,
    wateringCron: this.wateringCron,
    wateringDuration: this.wateringDuration,
  });

  constructor(private wateringManagementService: WateringManagementService) {
  }

  submit() {
    this.wateringManagementService.createWatering(AuthService.getToken(), this.form.value)
      .subscribe(
        value => console.log(value),
        value => console.log(value),
      );
  }

}
