import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

private url:string = "https://recruiting-datasets.s3.us-east-2.amazonaws.com/";

constructor(private http:HttpClient) { }

  ConsultRestaurant(){
    return this.http.get<any>(this.url + 'data_melp.json');
  }

}

