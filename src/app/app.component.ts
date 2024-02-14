import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mini Calculadora';

  //Declaramos dos variables de tipo number e inicializadas por defecto a 0 que representen nuestras cifras a operar
  cifra1:number=0;
  cifra2:number=0;

  //Otra variable igual que las anteriores en las que almacenaremos el resultado de las operaciones
  resultado:number=0;

  //Implementamos la función de suma
  sumar():void{
    this.resultado = this.cifra1 + this.cifra2;
  }

  //Implementamos la función de resta
  restar():void{
    this.resultado = this.cifra1 - this.cifra2;
  }

  //Implementamos la función de multiplicacion
  multiplicar():void{
    this.resultado = this.cifra1 * this.cifra2;
  }

  //Implementamos la función de division
  dividir():void{
    this.cifra2 == 0 ? alert("No es posible dividir entre 0") : this.resultado = this.cifra1 / this.cifra2;
  }
}
