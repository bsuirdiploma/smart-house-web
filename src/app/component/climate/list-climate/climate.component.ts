import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../service/authorization-service/auth-service';
import {ClimateZone} from '../../../modules/swagger/generated/climate/model/climateZone';
import {ClimateZoneManagementService} from '../../../modules/swagger/generated/climate/api/climateZoneManagement.service';

@Component({
  selector: 'app-climate',
  templateUrl: './climate.component.html',
  styleUrls: ['./climate.component.scss']
})
export class ClimateComponent implements OnInit {
  climateList: Array<ClimateZone>;

  constructor(private climateManagementService: ClimateZoneManagementService) {
  }

  ngOnInit(): void {
    this.climateManagementService.findAllClimateZones(AuthService.getToken(), null, null).subscribe(
      value => this.climateList = value.content
    );

  }

  remove(listNumber: any) {
    this.climateManagementService.deleteClimateZoneById(this.climateList[listNumber].id, AuthService.getToken()).subscribe(
      () => {
        this.climateList.reduce(listNumber);
      }
    );
  }

  updateList(listNumber: number, property: string, event: any) {
    this.climateList[listNumber][property] = event.target.textContent;

    const climate = this.climateList[listNumber];

    this.climateManagementService.setTemperatureByClimateZoneId(climate.id, climate.requiredTemperature, AuthService.getToken()).subscribe(
      value => console.log(value),
      value => console.log(value)
    );
  }

}

