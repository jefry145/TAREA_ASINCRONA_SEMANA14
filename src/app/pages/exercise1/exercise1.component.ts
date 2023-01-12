import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { DataService } from 'src/app/servicios/data.service';

@Component({
  selector: 'app-exercise1',
  templateUrl: './exercise1.component.html',
  styleUrls: ['./exercise1.component.css']
})
export class Exercise1Component {
//MOSTRANDO DATOS
resultado=false

//ENVIO DE DATOS
 datos=[]
 pasardatoshijo:any
 valid:any
 data:any
//Error msg
show=false

validacion!:any
mostrarMsg(){
  this.validacion = this.formLogin.valid
  switch (this.validacion) {
    case true:
       this.show=true
      // pasando datos al hijo
       this.data=Object.values(this.datos);
       this.valid = this.formLogin.valid
       this.data.push({name:this.formLogin.value.name, surname:this.formLogin.value.surname , DNI:this.formLogin.value.DNI , situaciòn: this.formLogin.value.situaciòn , valido: this.valid})
       this.pasardatoshijo =this.data;
       this.resultado= this.formLogin.valid
      //  console.log(this.data)
      break;
    case false:
      
      break;
  }
}

//VALIDACIONES
  public formLogin!: FormGroup;
  constructor(private formBuilder:FormBuilder){
  
  }
   ngOnInit():void{
    this.formLogin = this.formBuilder.group({
     name:['', 
      [
        Validators.required,
        Validators.minLength(3)
      ]
    ],
     surname:['', 
    [
      Validators.required,
      Validators.minLength(3)
    ]
    ],
     DNI:['', 
      [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(8),
        Validators.pattern(/^[0-9]\d*$/)
        
      ]
    ],
    situaciòn:['', 
    [
      Validators.required,
    ]
    ],
    })
  }
}
