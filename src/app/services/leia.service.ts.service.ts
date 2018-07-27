import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LeiaService {

  constructor( private http: HttpClient ) {
    console.log('leia service listo');
   }

  getTopic(){
   return this.http.get('https://entradasfinal.herokuapp.com/api/entradas');     
  }

  getSearch( ){

  return this.http.get(`https://entradasfinal.herokuapp.com/api/entradas`);     

}
}