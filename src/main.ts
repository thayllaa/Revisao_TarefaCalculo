import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceComponent } from './app/components/price/price.component';
import { AmortizacaoComponent } from './app/components/amortizacao/amortizacao.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [ AppModule, CommonModule, PriceComponent, AmortizacaoComponent],
})

export class AppModule {}
