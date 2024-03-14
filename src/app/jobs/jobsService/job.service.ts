import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  baseUrl="https://jobportal-server-zxjg.onrender.com"

  constructor(private http:HttpClient) { }

  // addjobs api

  addJobs(bodyData:any){
   return this.http.post(`${this.baseUrl}/jobs`, bodyData)
  }

  
  // get alljobs api

  getJobs(){
    return this.http.get(`${this.baseUrl}/jobs`)
   }


    // delete usser

  deleteJob(id:any){
    return this.http.delete(`${this.baseUrl}/jobs/${id}`)
 
   }

   
  // access single user

  getJobData(uid:any){
    return this.http.get(`${this.baseUrl}/jobs/${uid}`)

  }

  // update data

  updateJob(id:any,bodyData:any){
    return this.http.put(`${this.baseUrl}/jobs/${id}`,bodyData)

  }
}


