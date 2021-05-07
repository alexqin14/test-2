import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';


@Component({
  selector: 'app-play',
  templateUrl: './play.page.html',
  styleUrls: ['./play.page.scss'],
})
export class PlayPage implements OnInit {
  constructor( private routerSvc: Router
    , public sharedDataService: DataServiceService) { }

  count:number = 0;
  count2:number = 0;

  collectButton() {
    this.count2 ++;
    console.log("collect "+this.count2);
  }

  payButton() {
    this.count ++;
    console.log("paid "+ this.count);
  }
  quit() {
    this.routerSvc.navigateByUrl("/");
  }
  lose() {
    this.sharedDataService.gameResults = [
      ...this.sharedDataService.gameResults
      ,{
        result: "L"
        , collectRent: this.count2
        , payRent: this.count
      }
    ];
    this.routerSvc.navigateByUrl("/stats");
    this.count2 = 0;
    this.count = 0;
  }
  win() {
    this.sharedDataService.gameResults = [
      ...this.sharedDataService.gameResults
      ,{
        result: "W"
        , collectRent: this.count2
        , payRent: this.count
      }
    ];
    this.routerSvc.navigateByUrl("/stats");
    this.count2 = 0;
    this.count = 0;
  }
  ngOnInit() {
  }

}
