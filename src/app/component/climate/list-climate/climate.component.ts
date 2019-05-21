import {Component, OnInit} from '@angular/core';
import {Watering} from '../../../modules/swagger/generated/watering/model/watering';
import {WateringManagementService} from '../../../modules/swagger/generated/watering/api/wateringManagement.service';
import {AuthService} from '../../../service/authorization-service/auth-service';

@Component({
  selector: 'app-climate',
  templateUrl: './climate.component.html',
  styleUrls: ['./climate.component.scss']
})
export class ClimateComponent implements OnInit {
  editField: string;
  wateringList: Array<Watering>;
  awaitingPersonList: Array<any> = [
    {id: 6, name: 'George Vega', age: 28, companyName: 'Classical', country: 'Russia', city: 'Moscow'},
    {id: 7, name: 'Mike Low', age: 22, companyName: 'Lou', country: 'USA', city: 'Los Angeles'},
    {id: 8, name: 'John Derp', age: 36, companyName: 'Derping', country: 'USA', city: 'Chicago'},
    {id: 9, name: 'Anastasia John', age: 21, companyName: 'Ajo', country: 'Brazil', city: 'Rio'},
    {id: 10, name: 'John Maklowicz', age: 36, companyName: 'Mako', country: 'Poland', city: 'Bialystok'},
  ];


  constructor(private wateringManagementService: WateringManagementService) {
  }

  ngOnInit(): void {

    this.wateringManagementService.findAllWaterings(AuthService.getToken(), null, null).subscribe(
      value => this.wateringList = value.content
    );

  }

  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.wateringList[id][property] = editField;
  }

  remove(id: any) {
    this.awaitingPersonList.push(this.wateringList[id]);
    this.wateringList.splice(id, 1);
  }

  add() {
    if (this.awaitingPersonList.length > 0) {
      const person = this.awaitingPersonList[0];
      this.wateringList.push(person);
      this.awaitingPersonList.splice(0, 1);
    }
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }
}
