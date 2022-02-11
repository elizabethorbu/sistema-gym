import { Component, OnInit } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.scss']
})
export class ListadoClientesComponent implements OnInit {
  clientes: any[] = new Array<any>();
  constructor ( private firestore: Firestore) {
  }

  ngOnInit(){
    const c= collection(this.firestore, 'clientes');
    collectionData(c, { idField: 'id' }).subscribe((resultado)=>{
      this.clientes= resultado;
      console.log(resultado);
    });
  
    //this.clientes.length=0

    
    
  }

}
