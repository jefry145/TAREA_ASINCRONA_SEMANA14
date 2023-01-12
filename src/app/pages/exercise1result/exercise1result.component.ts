import { Component, Input } from '@angular/core';
import { DataService } from 'src/app/servicios/data.service';

@Component({
  selector: 'app-exercise1result',
  templateUrl: './exercise1result.component.html',
  styleUrls: ['./exercise1result.component.css']
})
export class Exercise1resultComponent {
  // obteniendo datos del padre en el hijo
    @Input()
  pasardatoshijo2!:any;

  




  // constructor(public DataServices:DataService){}
}
