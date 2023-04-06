import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AmortizacaoComponent } from './components/amortizacao/amortizacao.component';
import { PriceComponent } from './components/price/price.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports: [ CommonModule, BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, AmortizacaoComponent, PriceComponent ],
  bootstrap: [ AppComponent ],
})
export class AppModule {}
