import { Component } from '@angular/core';
import { LeiaService} from '../../services/leia.service.ts.service';

@Component({
  selector: 'app-tema-card',
  templateUrl: './tema-card.component.html',
  styleUrls: ['./tema-card.component.css']
})
export class TemaCardComponent {

  nuevoTema: any [] = [];
  

  constructor(private leia: LeiaService) {

    this.leia.getTopic()
        .subscribe((data:any) =>{
         this.nuevoTema = data
         console.log(data);
        });

   }
}
