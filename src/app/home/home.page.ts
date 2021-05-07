import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( private routerSvc: Router
    , public sharedDataService: DataServiceService) { }
played() {
  this.routerSvc.navigateByUrl("/play");
}
stat() {
  this.routerSvc.navigateByUrl("/stats");
}
get totalWin() {
  const win = this.sharedDataService.gameResults.filter(x => x.result == "W").length
  return win;
}
get totalLose() {
  const lose = this.sharedDataService.gameResults.filter(x => x.result == "L").length
  return lose;
}
get totalWinPercent() {
  const winPercent = this.sharedDataService.gameResults.filter(
    x => x.result == "W"
  ).length / this.sharedDataService.gameResults.length;
  return winPercent;
}
get totalLosePercent() {
  const losePercent = this.sharedDataService.gameResults.filter(
    x => x.result == "L"
  ).length / this.sharedDataService.gameResults.length;
  return losePercent;
}
get averageCollectWin() {
  const total_collect_rent_winning = this.sharedDataService.gameResults.filter(x => x.result == "W");
  const collect_rents_winning = total_collect_rent_winning.map(collect => collect.collectRent);
  const total_collect_rents = collect_rents_winning.reduce((acc,x) => acc+x,0);
  const averageCollectWinning = total_collect_rents/this.sharedDataService.gameResults.filter(x => x.result == "W").length;
  return averageCollectWinning;
}
get averagePayWin() {
  const total_pay_rent_winning = this.sharedDataService.gameResults.filter(x => x.result == "W");
  const pay_rents_winning = total_pay_rent_winning.map(pay => pay.payRent);
  const total_pay_rents = pay_rents_winning.reduce((acc,x) => acc+x,0);
  const averagePayWinning = total_pay_rents/this.sharedDataService.gameResults.filter(x => x.result == "W").length;
  return averagePayWinning;
}
get averageCollectLose() {
  const total_collect_rent_losing = this.sharedDataService.gameResults.filter(x => x.result == "L");
  const collect_rents_losing = total_collect_rent_losing.map(collect => collect.collectRent);
  const total_collect_rents = collect_rents_losing.reduce((acc,x) => acc+x,0);
  const averageCollectlosing = total_collect_rents/this.sharedDataService.gameResults.filter(x => x.result == "L").length;
  return averageCollectlosing;
}
get averagePayLose() {
  const total_pay_rent_losing = this.sharedDataService.gameResults.filter(x => x.result == "L");
  const pay_rents_losing = total_pay_rent_losing.map(pay => pay.payRent);
  const total_pay_rents = pay_rents_losing.reduce((acc,x) => acc+x,0);
  const averagePaylosing = total_pay_rents/this.sharedDataService.gameResults.filter(x => x.result == "L").length;
  return averagePaylosing;
}

}
