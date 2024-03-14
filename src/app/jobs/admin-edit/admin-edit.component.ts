import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/JobServices/admin.service';
import { ToastService } from 'src/app/JobServices/toast.service';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css']
})
export class AdminEditComponent implements OnInit {

  admin: any = {}
  fileData: any = ""
  AdminUserName:any=""

  @Output() onAdminChange = new EventEmitter()

  @Input() data: any

  constructor(private as: AdminService, private tos:ToastService, private route: Router) { }


  profilePic: any = "https://i.postimg.cc/L6QrZKj8/3873853-middle-removebg-preview.png";

  ngOnInit(): void {
    this.as.loginApi().subscribe((result: any) => {
      // console.log(result);
      this.admin = result[0]

      if (this.admin.profile) {
        this.profilePic = this.admin.profile
      }
    })
    this.AdminUserName = localStorage.getItem("UserName")

  }

  getFile(event: any) {
    let file = event.target.files[0];

    // URL conversion
    let fr = new FileReader();
    // Convert
    fr.readAsDataURL(file);

    // Store the converted URL (onload)
    fr.onload = (event: any) => {
      console.log(event.target.result);

      // preview
      this.profilePic = event.target.result

      // add profile in admin data
      this.admin.profile = this.profilePic

      console.log(this.admin);

    };
  }

  editData(){
    this.as.updateAdmin(this.admin).subscribe((result: any) => {
      console.log(result);

      // update local storage with new username
      var indexE=result.email.indexOf('@')
      localStorage.setItem("UserName",result.email.slice(0,indexE));

      this.onAdminChange.emit(result.email.slice(0, indexE))

      this.tos.showSuccess("Profile Updated")
      this.route.navigateByUrl("dashboard")
    });
  }
}
