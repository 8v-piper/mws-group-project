import { Component, OnInit, VERSION} from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoursesService } from '../courses.service';
import { Course } from '../interface/course';
import { environment } from 'src/environments/environment';

export interface option {
  name: string;
};


@Component({
  selector: 'app-front-end',
  templateUrl: './front-end.component.html',
  styleUrls: ['./front-end.component.css']
})

export class FrontEndComponent implements OnInit {

  options: option[] = [
    {name: 'Angular'},
    {name: 'React'},
    {name: 'Vue'},
    {name: 'HTML'},
    {name: 'JavaScript'},
    {name: 'CSS'},
    {name: 'Sass'},
    {name: 'Beginner'},
    {name: 'Intermediate'},
    {name: 'Advanced'}
  ];

  category = environment.category;
  courses: Course[] = [ ];

  constructor(private coursesService: CoursesService) {

  }

  ngOnInit(): void {
    this.coursesService.getCourses(this.category[0]).subscribe(response => {
      this.courses = response;
      console.log(this.courses)
    })
    this.coursesService.getCourses(this.category[1]).subscribe(response => {
      this.courses = response;
      console.log(this.courses)
    })
    this.coursesService.getCourses(this.category[2]).subscribe(response => {
      this.courses = response;
      console.log(this.courses)
    })
  }




  chipsControl = new FormControl('');
  chipsValue$ = this.chipsControl.valueChanges;

}
