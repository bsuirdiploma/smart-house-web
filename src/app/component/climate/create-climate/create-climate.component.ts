import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../../../service/authorization-service/auth-service';
import {ClimateZoneManagementService} from '../../../modules/swagger/generated/climate/api/climateZoneManagement.service';

@Component({
  selector: 'app-climate-create',
  templateUrl: './create-climate.component.html'
})
export class CreateClimateComponent {

  readonly name = new FormControl('', []);
  readonly thermometerPortName = new FormControl('', []);
  readonly collectorPortName = new FormControl('', []);
  readonly collectorPinNumber = new FormControl('', []);
  readonly currentTemperature = new FormControl('', []);
  readonly requiredTemperature = new FormControl('', []);
  readonly heaterOn = new FormControl('', []);

  readonly form = new FormGroup({
    name: this.name,
    thermometerPortName: this.thermometerPortName,
    collectorPortName: this.collectorPortName,
    collectorPinNumber: this.collectorPinNumber,
    currentTemperature: this.currentTemperature,
    requiredTemperature: this.requiredTemperature,
    heaterOn: this.heaterOn
  });

  constructor(private climateManagementService: ClimateZoneManagementService) {
  }

  submit() {
    this.climateManagementService.createClimateZone(AuthService.getToken(), this.form.value)
      .subscribe(
        value => console.log(value),
        value => console.log(value),
      );
  }

}
