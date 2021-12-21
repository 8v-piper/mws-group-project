import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from './interface/course';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  api_key = environment.UDEMY_API_KEY;
  host = environment.host;
  category = environment.category;
  result_size = environment.result_size;

  constructor(private http:HttpClient) { }

  getCourses(category: String): Observable<Course[]> {


    const courses = this.http.get<Course[]>(`${this.host}/api-2.0/courses/?page=10&page_size=${this.result_size}&search=${category}&language=en`,{
      headers: new HttpHeaders({
        "Accept": "application/json, text/plain, */*",
        "Authorization": this.api_key,
        "Content-Type": "application/json;charset=utf-8"
      })
    })
    return courses;
  }

  getCourse(id: String): Observable<Course> {

    let url = `${this.host}/api-2.0/courses/${id}`;

    return this.http.get<Course>(url, {
      headers: new HttpHeaders({
        "Accept": "application/json, text/plain, */*",
        "Authorization": "Basic aHlLOVZpYWZ4M2pKRzJ5bnlBMXZTbDlQQ2VobXVKemNBcHlEQTd4aTpUbWJBSzRlam1RV09ZOUlGVjFMSEtwSmVCZVBYclByRGk3a2x0SGZld1ZGZEhicWJ3YlhDNXJCUWRqcDBCeXFQNzBuMUpqWEwwQko4STI1M0hFeXc1SmRhTFFVS1BoaldSWUhFeTdEUUFCWVJBb01hOWo5a3dBNUlGaUw4WjJLdw==",
        "Content-Type": "application/json;charset=utf-8"
      }),

    });
  }
}
