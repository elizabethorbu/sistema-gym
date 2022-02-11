import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';


import { AccordionModule } from 'ngx-bootstrap/accordion';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ListadoClientesComponent } from './listado-clientes/listado-clientes.component';
import { AgregarClienteComponent } from './agregar-cliente/agregar-cliente.component';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { AngularFireStorageModule} from '@angular/fire/compat/storage';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EncabezadoComponent,
    ListadoClientesComponent,
    AgregarClienteComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    BrowserAnimationsModule,
    AccordionModule.forRoot(),
    ReactiveFormsModule,
    NgxSpinnerModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    ProgressbarModule.forRoot(),
    AngularFireStorageModule
  ],
  providers: [AccordionModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
