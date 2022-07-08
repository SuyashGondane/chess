import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.css'],
})
export class TableRowComponent implements OnInit {
  @Input() rowNumber!: string;
  @Input() rowType!: string;
  color1: string = '#616161';
  color2: string = '#e0e0e0';

  constructor() {}

  ngOnInit(): void {
    // console.log(this.rowType);
    if (this.rowType == 'whiteFirst') {
      const temp: string = this.color1;
      this.color1 = this.color2;
      this.color2 = temp;
    }
  }
}
