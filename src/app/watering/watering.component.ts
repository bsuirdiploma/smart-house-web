import {Component} from '@angular/core';
import {WateringManagementService} from '../modules/swagger/generated/watering/api/wateringManagement.service';
import {FormControl, FormGroup} from '@angular/forms';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Component({
  selector: 'app-watering',
  templateUrl: './watering.component.html'
})
export class WateringComponent {

  readonly email = new FormControl('', []);
  readonly name = new FormControl('', []);
  readonly location = new FormControl('', []);
  readonly wateringPortName = new FormControl('', []);
  readonly wateringCron = new FormControl('', []);
  readonly wateringDuration = new FormControl('', []);

  readonly form = new FormGroup({
    email: this.email,
    name: this.name,
    location: this.location,
    wateringPortName: this.wateringPortName,
    wateringCron: this.wateringCron,
    wateringDuration: this.wateringDuration,
  });

  constructor(private wateringManagementService: WateringManagementService) {
  }

  submit() {
    this.wateringManagementService.createWatering('sdf'/*localStorage.getItem('token')*/, this.form.value)
      .pipe(
        catchError(err => {
          console.log(err);
          return throwError(err);
        })
      )
      .subscribe(
        value => console.log(value),
        value => console.log(value),
      );
  }

}
