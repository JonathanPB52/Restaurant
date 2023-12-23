import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { RestaurantSelect } from './RestaurantSelect';

@Component({
  selector: 'app-DialogModal',
  templateUrl: './DialogModal.component.html',
  styleUrls: ['./DialogModal.component.css']
})
export class DialogModalComponent implements OnInit {

  RestaurantSelect:any = '';

  constructor(
    public dialogRef: MatDialogRef<DialogModalComponent>, private Restaurant:RestaurantSelect) {
      this.RestaurantSelect = Restaurant.miVariable;
      console.log(this.RestaurantSelect);
    }

  ngOnInit() {
  }

  cancelar() {
    this.dialogRef.close();
  }
  redirigirAGmail(correo: string) {
    const url = `mailto:${correo}`;
    window.open(url, '_blank');
  }
  redirigirATelefono(numero: string) {
    const url = `tel:${numero}`;
    window.open(url, '_blank');
  }
  redirigirAMapa(lat: number, lng: number) {
    const url = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
    window.open(url, '_blank');
  }
  obtenerEstrellas(): any[] {
    return Array.from({ length: this.RestaurantSelect.rating });
  }

}
