import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { AuthenticationService } from 'app/services/authentication.service';

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.css"]
})
export class SigninComponent implements OnInit {
  signInForm: FormGroup;
  submitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private toast: ToastrService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private authService:AuthenticationService,
  ) {}

  ngOnInit() {
    this.initializeForm();
  }
  initializeForm() {
    this.signInForm = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }
  get f_data() {
    return this.signInForm.controls;
  }

  onLogin() {
    console.log("started loggin")
    // this.spinner.show();
    // this.submitted = true;
    // if (this.signInForm.invalid) {
    //   this.spinner.hide();
    //   return;
    // }
    console.log(this.signInForm.value);
    let email = this.f_data.email.value;
    let password = this.f_data.password.value;
    // this.authService.getAuth(email, password).subscribe(
    //   res => {
    //     this.spinner.hide();
    //     console.log(res.body);
    //     if (res.status == 200) {
    //       console.log("login successfully");
    //       localStorage.setItem("token", res.body.token);          
    //       this.toast.success("Login Successfully", "Success");
    //       // this.router.navigate(["/employee"]);
    //     } else {
    //       console.log("unable to login");
    //       this.toast.success("Unable To Login", "Success");
    //     }
    //   },
    //   error => {
    //     this.spinner.hide();
    //     console.log(error);
    //   }
    // );
  }
signUp(){
  console.log(`sign up`);
}
}
