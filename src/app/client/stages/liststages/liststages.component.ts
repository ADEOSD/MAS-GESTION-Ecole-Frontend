import { Component } from '@angular/core';
import { StageService } from 'src/app/Services/stage.service';

@Component({
  selector: 'app-liststages',
  templateUrl: './liststages.component.html',
  styleUrls: ['./liststages.component.css']
})
export class ListstagesComponent {
  stages: any[];

  constructor(private stagesserv: StageService) { }

  ngOnInit() {
    this.stagesserv.getAllStages().subscribe(data => {
      this.stages = data;
      console.log("stage data", data)
    });
  }
}
