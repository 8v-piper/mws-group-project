import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Data } from './interface/data';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  api_key = environment.UDEMY_API_KEY;
  host = environment.host;
  category = environment.category[0];
  result_size = environment.result_size;

  constructor(private http:HttpClient) { }

  getCourses(category: String): Observable<Data> {
    return this.http.get<Data>(`${this.host}/api-2.0/courses/?page=1&page_size=${this.result_size}&search=${this.category}&language=en`,{
      headers: new HttpHeaders({
        "Accept": "application/json, text/plain, */*",
        "Authorization": this.api_key,
        "Content-Type": "application/json;charset=utf-8"
      })
    })
  }


  // getCourse(id: String): Observable<Data> {
    
  //   let url = `${this.host}/api-2.0/courses/${id}`;

  //   return this.http.get<Data>(url, {
  //     headers: new HttpHeaders({
  //       "Accept": "application/json, text/plain, */*",
  //       "Authorization": `${this.api_key}`,
  //       "Content-Type": "application/json;charset=utf-8"
  //     }),

  //   });
  // }
}
