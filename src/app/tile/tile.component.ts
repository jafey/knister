import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ChooseNumberComponent} from '../choose-number/choose-number.component';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {

  @Input()
  public value: number;
  @Input()
  public posX: number;
  @Input()
  public posY: number;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  isDiagonal(): boolean {

    if (this.posX === 1 && this.posY === 5) {
      return true;
    } else if (this.posX === 2 && this.posY === 4) {
      return true;
    } else if (this.posX === 4 && this.posY === 2) {
      return true;
    } else if (this.posX === 5 && this.posY === 1) {
      return true;
    } else {
      return this.posX === this.posY;
    }
  }

  onTileClick() {
    console.log('klick');

    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ChooseNumberComponent, {
      panelClass: 'num-pad',
      width: '280px',
      height: '280px',
      autoFocus: false,
      data: null
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result.data);
      if (result.data === 0) {
        this.value = null;
      } else {
        this.value = result.data;
      }
    });
  }

}
