import { Injectable } from '@angular/core';

interface GameResult {
  result: string;
  collectRent: number;
  payRent: number;
}

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {


  constructor() { }
  gameResults: GameResult[] = [];
}
