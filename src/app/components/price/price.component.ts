import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-price',
  standalone: true,
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {
  @Input() PV: string;
  @Input() i: string;
  @Input() n: string;

  constructor() { }

  ngOnInit() {
  }

  getPrice() {
    return Number(this.PV) * (((Math.pow(1 + Number(this.i), Number(this.n))) * Number(this.i) / ((Math.pow(1 + Number(this.i), Number(this.n)) -1))));
  }
}