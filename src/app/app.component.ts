import { Component } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/compat/auth';
import { User } from './shared/services/user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'gym';
  usuario: any;
  cargando: boolean = true;

  constructor(public auth: AngularFireAuth){
    this.auth.user.subscribe(user => {
      setTimeout(() => {
        this.cargando=false;
        this.usuario = this.SetUserData(user);
      }, 200);
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
    this.auth.signInWithEmailAndPassword('test@gmail.com','123456');
  }

  logout() {
    this.auth.signOut();
  }
}
