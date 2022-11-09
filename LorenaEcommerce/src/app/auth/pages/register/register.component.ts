import { Router } from '@angular/router';
import { authService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators  } from '@angular/forms';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  

  constructor( private authService: authService , private fb:FormBuilder ,private router:Router) { }
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  registerForm:FormGroup = this.fb.group({
    name:['',[Validators.required, Validators.minLength(3)]],
    email:['',[Validators.required,Validators.pattern(this.emailPattern)]],
    password:['',[Validators.required,Validators.minLength(6)]],
    admin:[false]
  })
  ngOnInit(): void {
  }

  get nameMsgErr():string {
    const errors = this.registerForm.get('name')?.errors;
 
    if(errors?.['required']){
      return 'Porfavor introdusca un nombre'
    } else if (errors?.['minlength']) {
      return 'El minimo de letra es 3';
    } 

    return ''; 
  }
  get emailMsgErr():string {
    const errors = this.registerForm.get('email')?.errors;

    if(errors?.['required']){
      return 'Porfavor introdusca un email'
    } else if (errors?.['pattern']) {
      return 'verifique que el correo se correcto';
    } 
    return '';
  }
    
  get passwordMsgErr():string {
    const errors = this.registerForm.get('password')?.errors;

    if(errors?.['required']){
      return 'Porfavor introdusca una contraseña'
    } else if (errors?.['minlength']) {
      return 'Contraseña corta . debe ser superior a 6 digitos';
    } 
    return '';
    
    }

  siElCampoNoesValido(obj:string){
    
    return this.registerForm.controls[obj].invalid && this.registerForm.controls[obj].touched
  }
  
  submitUser(){
    const {name, email,password,admin} = this.registerForm.value;

    if(this.registerForm.invalid){
      return this.registerForm.markAllAsTouched()
    }else if(this.registerForm.valid) {
      this.authService.register(name,email,password,admin)
      .subscribe(ok =>{
        console.log(ok);
        if(ok === true){
            this.router.navigate([''])
        }else {
          Swal.fire('Error',ok,'error');
        }
      })
      this.registerForm.reset({ password: '', email: '', name: '' })
    }

  }

}
