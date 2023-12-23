import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListRestaurantComponent } from './ListRestaurant.component';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSortModule} from '@angular/material/sort';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatTableModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSortModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [ListRestaurantComponent],
  exports: [ListRestaurantComponent]
})
export class ListRestaurantModule { }
