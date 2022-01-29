import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from '../shared/services/user';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.scss']
})
export class EncabezadoComponent implements OnInit {
 usuario:User;

  constructor(private auth: AngularFireAuth) { 
    this.auth.user.subscribe(user => {
        this.usuario = this.SetUserData(user);
    });
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

  ngOnInit(): void {
  }

  logout() {
    this.auth.signOut();
  }

}

