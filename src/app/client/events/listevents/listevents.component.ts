import { Component } from '@angular/core';
import { EventService } from 'src/app/Services/event.service';

@Component({
  selector: 'app-listevents',
  templateUrl: './listevents.component.html',
  styleUrls: ['./listevents.component.css']
})
export class ListeventsComponent {
 events:any[]
  constructor(private eventserv:EventService) { }

  ngOnInit() {
    this.eventserv.getAllEvents().subscribe((data)=>{
      this.events=data;
      console.log(data);
    })
  }
}
