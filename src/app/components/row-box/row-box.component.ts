import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-row-box',
  templateUrl: './row-box.component.html',
  styleUrls: ['./row-box.component.css'],
})
export class RowBoxComponent implements OnInit {
  @Input() boxNumber!: string;
  @Input() bgColor!: string;
  @Input() locationBgColor!: string;

  constructor() {}

  ngOnInit(): void {}
}
