import { Component } from '@angular/core';
import { EnseignantService } from 'src/app/Services/enseignant.service';

@Component({
  selector: 'app-list-enseignants',
  templateUrl: './list-enseignants.component.html',
  styleUrls: ['./list-enseignants.component.css']
})
export class ListEnseignantsComponent {
 enseignants:any[];

  constructor(
    private serviceenseignant:EnseignantService
  ) { }

  ngOnInit(){
    this.serviceenseignant.getAllEnseignants().subscribe(
      (data)=>{
        this.enseignants=data;
        console.log(data);
      }
    )
  }
}
