import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  baseUrl="https://jobportal-server-zxjg.onrender.com"

  constructor(private http: HttpClient) { }


  loginApi(){
    return this.http.get(`${this.baseUrl}/admin`)

  }

  // Method to fetch a single job by its ID
  getJobById(jobId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/jobs/${jobId}`);
  }

    // get alljobs api

    getJobs(){
      return this.http.get(`${this.baseUrl}/jobs`)
     }

       // update admin
  updateAdmin(bodyData:any){
    return this.http.put(`${this.baseUrl}/admin/1`,bodyData)
  }
  
}
