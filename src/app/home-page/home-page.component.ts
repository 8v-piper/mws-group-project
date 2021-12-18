import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';
import { environment } from 'src/environments/environment';
import { Course } from '../interface/course';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  category = environment.category;
  courses: Course[] = [];

  constructor(private coursesService:CoursesService) {}

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

}
