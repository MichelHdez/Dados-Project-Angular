import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  dadoIzquierda = '../assets/img/dice1.png';
  dadoDerecha = '../assets/img/dice4.png';
  numero1 = 1;
  numero2 = 2;

  tirarDados(): void {
    this.numero1 = Math.round(Math.random() * 5) + 1;
    this.numero2 = Math.round(Math.random() * 5) + 1;
    this.dadoIzquierda = '../assets/img/dice' + this.numero1 + '.png';
    this.dadoDerecha = '../assets/img/dice' + this.numero2 + '.png';
    console.log(this.numero1);
    console.log(this.numero2);

  }
}
