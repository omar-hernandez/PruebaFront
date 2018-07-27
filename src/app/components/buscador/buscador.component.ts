import { Component } from '@angular/core';
import { LeiaService } from '../../services/leia.service.ts.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent {

  encuentra: any [] = [];

  constructor(private leia: LeiaService) { }

  // buscar( ){
  //   console.log( );
  //   this.leia.getSearch( )
  //       .subscribe( data => {
  //         console.log(data);
  //         this.encuentra = data;
          
  //       });
    
  // }


}
