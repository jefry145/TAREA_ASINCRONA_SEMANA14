import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { Exercise1Component } from './exercise1/exercise1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '../pipeJsonPipe';
import { Exercise1resultComponent } from './exercise1result/exercise1result.component';



@NgModule({
  declarations: [
    Exercise1Component,
    JsonPipe,
    Exercise1resultComponent,
  
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    Exercise1Component,
    Exercise1resultComponent

  ]
})
export class PagesModule { }
