import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { User } from '../shared/services/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 formularioLogin: FormGroup;
 usuario: any;
 datosCorrectos:boolean = true;
 textoError: string = '';
  constructor(private creadorFormulario: FormBuilder, public auth: AngularFireAuth,private spinner: NgxSpinnerService) { 
    this.auth.user.subscribe(user => {
      setTimeout(() => {
       
        this.usuario = this.SetUserData(user);
      }, 2000);
    })   
  }

  ngOnInit(): void {
    this.formularioLogin = this.creadorFormulario.group({
      email:['',Validators.compose([
        Validators.required,Validators.email
      ])],
      password:['',Validators.required]
    })
  }
  SetUserData(user: any) {
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    }
    return userData;
  }


 login() {
if(this.formularioLogin.valid){
  this.datosCorrectos=true;
  this.auth.signInWithEmailAndPassword(this.formularioLogin.value.email,this.formularioLogin.value.password).then((usuario) => {
  console.log(usuario)
  this.spinner.show();
}).catch((error)=>{
  this.datosCorrectos=false;
  this.textoError=error.message;
  this.spinner.hide();
})
} else{
  this.datosCorrectos=false;
  this.textoError='Por favor revisa que los datos esten correctos.';
}
} 

  logout() {
    this.auth.signOut();
    
  }
}
