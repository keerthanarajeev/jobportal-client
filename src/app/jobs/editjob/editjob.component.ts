import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from '../jobsService/job.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-editjob',
  templateUrl: './editjob.component.html',
  styleUrls: ['./editjob.component.css']
})
export class EditjobComponent {
  id:any=""
  jobData:any={}

  constructor(private ar:ActivatedRoute,private js:JobService,private rou:Router,private fb:FormBuilder){}

  // editForm = this.fb.group({

  //   jobtitle:['',[Validators.required]],
  //   companyname:['',[Validators.required]],
  //   companylogourl:['',[Validators.required]],
  //   jobdescription:['',[Validators.required]],
  //   joblocation:['',[Validators.required]],
  //   aboutcompany:['',[Validators.required]],
  //   employmenttype:['',[Validators.required]],
  //   monthlysalary:['',[Validators.required]],
  //   qualification:['',[Validators.required]],
  //   totalapplicants:['',[Validators.required]],
  //   experience:['',[Validators.required]],
  //   category:['',[Validators.required]],
  //   applicationlink:['',[Validators.required]],
  
  // })
  
  ngOnInit(): void {
    this.ar.params.subscribe((data:any)=>{
      this.id=data.id
      console.log(this.id);

      // api
      this.js.getJobData(this.id).subscribe((response:any)=>{

        this.jobData=response
        // console.log(this.userData);
        
      })
      
    })
  }


 updateData(){
  this.js.updateJob(this.id,this.jobData).subscribe((response:any)=>{
this.rou.navigateByUrl("/jobs")
  })
 }

}
