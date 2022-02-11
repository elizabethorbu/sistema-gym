import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.scss']
})
export class AgregarClienteComponent implements OnInit {
 formularioCliente: FormGroup;
  constructor(private fb: FormBuilder,private storage: AngularFireStorage) {

   }

  ngOnInit(): void {
   this.formularioCliente = this.fb.group({
     nombre: ['', Validators.required],
     apellido: ['', Validators.required],
     correo: ['', Validators.compose([Validators.required, Validators.email])],
     fechaNacimiento: ['',Validators.required],
     telefono: ['',Validators.required],
     img:['',Validators.required]
   }) 
  }

  agregar(){
    console.log(this.formularioCliente.value);
  }

  subirImagen(eve){
  let archivo = eve.target.files[0]
  let ruta ='clientes/imagen1.png';
  const referencia= this.storage.ref(ruta);
  const tarea = referencia.put(archivo);
  }
}
