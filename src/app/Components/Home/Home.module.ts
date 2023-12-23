import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './Home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ListRestaurantModule } from './ListRestaurant/ListRestaurant.module';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    ListRestaurantModule,
    MatCardModule,MatIconModule,MatButtonModule,MatMenuModule,
    MatSelectModule,MatInputModule,MatFormFieldModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
