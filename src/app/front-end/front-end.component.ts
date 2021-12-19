import { Component, OnInit, VERSION} from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

export interface option {
  name: string;
};

export interface course {
  name: string;
}

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

  courses: course[] = [
    { name: 'Course Name' },
    { name: 'Course Name 2'}

  ];

  constructor() { }


  ngOnInit(): void {
  }

  chipsControl = new FormControl('');
  chipsValue$ = this.chipsControl.valueChanges;

}
