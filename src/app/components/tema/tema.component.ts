import { Component } from '@angular/core';
import { LeiaService} from '../../services/leia.service.ts.service';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent  {

  nuevoTema: any [] = [];
  

  constructor(private leia: LeiaService) {

    this.leia.getTopic()
        .subscribe((data:any) =>{
         this.nuevoTema = data
         console.log(data);
        });

   }
  
}
