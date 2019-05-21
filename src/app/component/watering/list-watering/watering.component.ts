import {Component, OnInit} from '@angular/core';
import {Watering} from '../../../modules/swagger/generated/watering/model/watering';
import {WateringManagementService} from '../../../modules/swagger/generated/watering/api/wateringManagement.service';
import {AuthService} from '../../../service/authorization-service/auth-service';

@Component({
  selector: 'app-watering',
  templateUrl: './watering.component.html',
  styleUrls: ['./watering.component.scss']
})
export class WateringComponent implements OnInit {
  wateringList: Array<Watering>;

  constructor(private wateringManagementService: WateringManagementService) {
  }

  ngOnInit(): void {

    this.wateringManagementService.findAllWaterings(AuthService.getToken(), null, null).subscribe(
      value => this.wateringList = value.content
    );

  }

  remove(listNumber: any) {
    this.wateringManagementService.deleteWateringById(this.wateringList[listNumber].id, AuthService.getToken()).subscribe(
      () => {
        this.wateringList.reduce(listNumber);
      }
    );
  }

  updateList(listNumber: number, property: string, event: any) {
    this.wateringList[listNumber][property] = event.target.textContent;

    const watering = this.wateringList[listNumber];

    this.wateringManagementService.setWateringSchedule(watering.id,
      watering.wateringCron, watering.wateringDuration, AuthService.getToken()).subscribe(
      value => console.log(value),
      value => console.log(value)
    );
  }

}
