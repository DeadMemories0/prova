import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  qtdDistancia: number = null;
  consumoGas: number = null;
  precoGas: number = null;
  totalGas: number = 0
  qtdFumaca: number = 0;
  qtdLitro: number = 0;
  constructor() {}

  CalcularGasto() {
    this.qtdLitro = this.qtdDistancia / this.consumoGas;
    this.totalGas = this.precoGas * this.qtdLitro;
    if (this.totalGas < 50) {
      
      this.qtdFumaca = 2;
    } else if (this.totalGas < 75) {
     
      this.qtdFumaca = 4;
    }else if (this.totalGas < 150) {
    
        this.qtdFumaca = 5;
    }else if (this.totalGas < 300) {
      
        this.qtdFumaca = 7; 
    } else if (this.totalGas < 500) {
   
      this.qtdFumaca = 9;
    } else {
  
      this.qtdFumaca = 10;
    }
  }
}
