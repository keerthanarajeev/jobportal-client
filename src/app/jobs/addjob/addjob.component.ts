import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { JobService } from '../jobsService/job.service';
import { ToastService } from 'src/app/JobServices/toast.service';

@Component({
  selector: 'app-addjob',
  templateUrl: './addjob.component.html',
  styleUrls: ['./addjob.component.css']
})
export class AddjobComponent implements OnInit {

  
   constructor(private fb:FormBuilder, private js:JobService,private tos:ToastService){}

// model creation for add form

addForm = this.fb.group({

  jobtitle:['',[Validators.required]],
  companyname:['',[Validators.required]],
  companylogourl:['',[Validators.required]],
  jobdescription:['',[Validators.required]],
  joblocation:['',[Validators.required]],
  aboutcompany:['',[Validators.required]],
  employmenttype:['',[Validators.required]],
  monthlysalary:['',[Validators.required]],
  qualification:['',[Validators.required]],
  totalapplicants:['',[Validators.required]],
  experience:['',[Validators.required]],
  category:['',[Validators.required]],
  applicationlink:['',[Validators.required]],
})



  ngOnInit(): void {
    
  }

  addJobs(){
    if(this.addForm.valid){

      var path = this.addForm.value
      console.log(path.jobtitle);
      console.log(path.companyname);
      this.js.addJobs({id:"",
      jobtitle:path.jobtitle,
      companyname:path.companyname,
      companylogourl:path.companylogourl,
      jobdescription:path.jobdescription,
      joblocation:path.joblocation,
      aboutcompany:path.aboutcompany,
      employmenttype:path.employmenttype,
      monthlysalary:path.monthlysalary,
      qualification:path.qualification,
      totalapplicants:path.totalapplicants,
      experience:path.experience,
      category:path.category,
      applicationlink:path.applicationlink,
     
    }).subscribe((data:any)=>{

      // console.log(data);
      this.tos.showSuccess("Job added successfully")

      this.addForm.reset()
    })
    }else{
      alert('Invalid Form')
    }
  }

}
