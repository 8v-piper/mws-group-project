import { Component, OnInit, VERSION} from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoursesService } from '../courses.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Result } from '../interface/result';

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
  data: any;

  constructor(private coursesService: CoursesService) {

  }

  ngOnInit(): void {
    this.data = this.coursesService.getCourses(this.category[0]).subscribe(data => {
      this.data = data.results;
      console.log(this.data)
    })
  }




  chipsControl = new FormControl('');
  chipsValue$ = this.chipsControl.valueChanges;

}
