import { Component } from '@angular/core';
import { ClassService } from 'src/app/Services/class.service';

@Component({
  selector: 'app-list-classes',
  templateUrl: './list-classes.component.html',
  styleUrls: ['./list-classes.component.css']
})
export class ListClassesComponent  {
  classes: any[];

  constructor(private classService: ClassService) { }

  ngOnInit() {
    this.classService.getAllClasses().subscribe(data => {
      this.classes = data;
      console.log("class data", data)
    });
  }
}
