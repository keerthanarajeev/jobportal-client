import { Component, OnInit } from '@angular/core';
import { JobService } from '../jobsService/job.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  jobCount:any=0;
  AdminUserName:any=""
  date: any = new Date()

  constructor(private js:JobService,private rout: Router){}

  ngOnInit(): void {
    this.js.getJobs().subscribe((result:any)=>{
      console.log(result);
      
      this.jobCount=result.length
    })
    this.AdminUserName = localStorage.getItem("UserName")
  }


  
  logout() {
    localStorage.removeItem("UserName")
    this.rout.navigateByUrl('/login')

  }

  updateAdmin(event:any){
    console.log(event);
    
    this.AdminUserName = event

  }
}
