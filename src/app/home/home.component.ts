import { Component, OnInit } from '@angular/core';
import { AdminService } from '../JobServices/admin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  alljobs: any = []
  jobName: string = "";
  p: number = 1;
constructor(private js: AdminService){}
  ngOnInit(): void {
    this.getjobs()

  }

  getjobs() {
    this.js.getJobs().subscribe((data: any) => {
      this.alljobs = data;
      console.log(this.alljobs);

    })
  }
}
