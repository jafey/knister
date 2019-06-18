import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';


@Component({
  selector: 'app-choose-number',
  templateUrl: './choose-number.component.html',
  styleUrls: ['./choose-number.component.css']
})
export class ChooseNumberComponent implements OnInit {

  ngOnInit() {
  }

  constructor(
    public dialogRef: MatDialogRef<ChooseNumberComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number) {
  }

  onNumberClick(pickedValue: number): void {
    this.dialogRef.close({data: pickedValue});
  }

}
