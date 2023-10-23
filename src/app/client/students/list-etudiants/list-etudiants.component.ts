import { Component } from '@angular/core';
import { EtudiantService } from 'src/app/Services/etudiant.service';

@Component({
  selector: 'app-list-etudiants',
  templateUrl: './list-etudiants.component.html',
  styleUrls: ['./list-etudiants.component.css']
})
export class ListEtudiantsComponent {

  etudiants:any[]; 

  constructor(private etudiantserv:EtudiantService){

  }
  ngOnInit(){
    this.etudiantserv.getAllEtudiants().subscribe((data)=>{

      this.etudiants=data;
      console.log(data);

    })
  }

}
