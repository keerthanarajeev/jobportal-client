import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from '../jobs/jobsService/job.service';
import { AdminService } from '../JobServices/admin.service';

@Component({
  selector: 'app-singleview',
  templateUrl: './singleview.component.html',
  styleUrls: ['./singleview.component.css']
})
export class SingleviewComponent implements OnInit {
  jobId: string | null = null;
  singleView: any;
  constructor(private route: ActivatedRoute, private service: AdminService){}

  ngOnInit(): void {
    // Retrieve the job ID from route parameters
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.jobId = id;
      // Call the service to get the job details based on the job ID
      this.service.getJobById(id).subscribe(
        (response: any) => {
          this.singleView = response; // Assign the response to singleView
          console.log(this.singleView);
        },
        (error: any) => {
          console.error(error);
        }
      );
    } else {
      console.error('Job ID not found in route parameters');
    }
  
      
    
  }
}
