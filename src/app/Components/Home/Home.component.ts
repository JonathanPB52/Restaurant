import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {

  section:string='';
  constructor() {
    this.navegar('#QuienesSomos');
    // this.navegar('#Restaurantes');
   }

  ngOnInit() {
  }
  navegar(url: string) {
    this.section = url;
    window.location.href = url;
  }
  navegarWt(numero: string) {
    const url = `https://api.whatsapp.com/send/?phone=57${numero}`;
    window.open(url, '_blank');
  }
  navegarlink() {
    const url = `https://www.linkedin.com/in/jonathan-pati%C3%B1o-1ab20a277?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app`;
    window.open(url, '_blank');
  }
  navegarEmail() {
    const url = `mailto:Jonathanpatinobeltran@gmail.com`;
    window.open(url, '_blank');
  }
}
