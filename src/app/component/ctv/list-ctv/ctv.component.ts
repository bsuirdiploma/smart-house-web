import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../service/authorization-service/auth-service';
import {Ctv} from '../../../modules/swagger/generated/ctv/model/ctv';
import {CtvManagementService} from '../../../modules/swagger/generated/ctv/api/ctvManagement.service';

@Component({
  selector: 'app-ctv',
  templateUrl: './ctv.component.html',
  styleUrls: ['./ctv.component.scss']
})
export class CtvComponent implements OnInit {
  ctvList: Array<Ctv>;

  constructor(private ctvManagementService: CtvManagementService) {
  }

  ngOnInit(): void {
    this.ctvManagementService.findAllCtvs(AuthService.getToken(), null, null).subscribe(
      value => this.ctvList = value.content
    );

  }

  remove(listNumber: any) {
    this.ctvManagementService.deleteCtvById(this.ctvList[listNumber].id, AuthService.getToken()).subscribe(
      () => {
        this.ctvList.reduce(listNumber);
      }
    );
  }

}

