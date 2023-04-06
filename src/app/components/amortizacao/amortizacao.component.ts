import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-amortizacao',
  templateUrl: './amortizacao.component.html',
  styleUrls: ['./amortizacao.component.css']
})
export class AmortizacaoComponent implements OnInit {
  @Input() capital: string;
  @Input() residual: string;
  @Input() tempo: string;

  constructor() { }

  ngOnInit() {
  }

  getAmortizacao(){
    return (Number(this.capital) - Number(this.residual)) / Number(this.tempo);
  }

}