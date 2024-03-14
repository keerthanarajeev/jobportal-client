import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../JobServices/admin.service';
import { ToastrService } from 'ngx-toastr';
import { ToastService } from '../JobServices/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginFormModel = this.fb.group({

    email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._-]+@[a-zA-Z-9.-]+\.[a-zA-Z]{2,4}$')]],
    psw: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z ]+')]]

  })

  constructor(private fb: FormBuilder, private as:AdminService, private rout:Router, private tos:ToastService) { }
  email:any=""

  ngOnInit(): void {

  }

  login(){
    var path = this.loginFormModel.value
    var email = path.email;
    var psw = path.psw;    
    this.email=email

    if (this.loginFormModel.valid) {

      this.as.loginApi().subscribe((data: any) => {
        var adminPsw = data[0].password
        var adminEmail = data[0].email

        if (email == adminEmail) {
          if (psw == adminPsw) {
            // alert("login success")
            
            // admin@gmail.com  retreive amdin

            var indexE=this.email.indexOf('@')
            localStorage.setItem("UserName",this.email.slice(0,indexE));
            
            this.tos.showSuccess("Login Successfull")

            this.rout.navigateByUrl("dashboard")
          } else {
            alert("Incorrect Password for Admin")
          }
        }
        else {

alert("Incorrect Email for Admin")
        }
      })


      // console.log(email);
      // console.log(psw);
      // alert('valid Form')


    } else {
      alert('Invalid Form')
    }

  }
}
