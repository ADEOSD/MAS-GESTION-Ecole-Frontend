import { Component } from '@angular/core';
import { CoursService } from 'src/app/Services/cours.service';

@Component({
  selector: 'app-listcours',
  templateUrl: './listcours.component.html',
  styleUrls: ['./listcours.component.css']
})
export class ListcoursComponent {
  courses: any[];

  constructor(private courseservice: CoursService) { }
  ngOnInit() {
    this.courseservice.getAll().subscribe(data => {
      this.courses = data;
      console.log("cours data", data)
    });
  }
}
