import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { authService } from '../../services/auth.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  loginForm:FormGroup = this.fb.group({
    email :['',[Validators.required,Validators.pattern(this.emailPattern)]],
    password : ['',[Validators.required,Validators.minLength(6)]]
  })

  constructor(private authService:authService,private fb:FormBuilder ,private router:Router) { }
  get emailMsgErr():string {
    const errors = this.loginForm.get('email')?.errors;

    if(errors?.['required']){
      return 'Porfavor introdusca un email'
    } else if (errors?.['pattern']) {
      return 'verifique que el correo se correcto';
    } 
    return '';
  }
    
  get passwordMsgErr():string {
    const errors = this.loginForm.get('password')?.errors;

    if(errors?.['required']){
      return 'Porfavor introdusca una contraseña'
    } else if (errors?.['minlength']) {
      return 'Contraseña corta . debe ser superior a 6 digitos';
    } 
    return '';
    
    }

  siElCampoNoesValido(obj:string){
    
    return this.loginForm.controls[obj].invalid && this.loginForm.controls[obj].touched
  }


  submit(){
    const { email,password} = this.loginForm.value;

    if(this.loginForm.invalid){
      return this.loginForm.markAllAsTouched()
    }else if(this.loginForm.valid) {
      this.authService.login(email,password)
      .subscribe(ok =>{
        // console.log(ok);
        if(ok === true){
          this.router.navigate(['./home'])
        }else {
          Swal.fire('Error',ok,'error');
        }
        
      })
    }

      this.loginForm.reset({ password: '', email: ''})
}
  ngOnInit(): void {
  }

}
