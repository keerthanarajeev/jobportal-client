import { Component, OnInit } from '@angular/core';
import { JobService } from '../jobsService/job.service';

@Component({
  selector: 'app-alljobs',
  templateUrl: './alljobs.component.html',
  styleUrls: ['./alljobs.component.css']
})
export class AlljobsComponent implements OnInit {

  alljobs:any=[]
  jobName:string=""
  p: number = 1;

constructor(private js:JobService){}


  ngOnInit(): void {
    this.getJobs()
  }

  search(){
    alert(this.jobName)
  }

  getJobs(){
    this.js.getJobs().subscribe((data:any)=>{
      this.alljobs=data
    //  console.log(this.alljobs);

    })
  }

  removeUser(id:any){
    this.js.deleteJob(id).subscribe((result:any)=>{
    alert(`Job removed`)
    this.getJobs()
    })
      }
}
