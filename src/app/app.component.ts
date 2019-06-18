import {Component, OnInit} from '@angular/core';
import {Tile} from './tile/tile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;
  tiles: Tile[];

  constructor() {
  }

  ngOnInit(): void {
    this.title = 'Knister';
    this.tiles = [
      {value: null, posX: 1, posY: 1},
      {value: null, posX: 2, posY: 1},
      {value: null, posX: 3, posY: 1},
      {value: null, posX: 4, posY: 1},
      {value: null, posX: 5, posY: 1},
      {value: null, posX: 1, posY: 2},
      {value: null, posX: 2, posY: 2},
      {value: null, posX: 3, posY: 2},
      {value: null, posX: 4, posY: 2},
      {value: null, posX: 5, posY: 2},
      {value: null, posX: 1, posY: 3},
      {value: null, posX: 2, posY: 3},
      {value: null, posX: 3, posY: 3},
      {value: null, posX: 4, posY: 3},
      {value: null, posX: 5, posY: 3},
      {value: null, posX: 1, posY: 4},
      {value: null, posX: 2, posY: 4},
      {value: null, posX: 3, posY: 4},
      {value: null, posX: 4, posY: 4},
      {value: null, posX: 5, posY: 4},
      {value: null, posX: 1, posY: 5},
      {value: null, posX: 2, posY: 5},
      {value: null, posX: 3, posY: 5},
      {value: null, posX: 4, posY: 5},
      {value: null, posX: 5, posY: 5},
    ];
  }

}
