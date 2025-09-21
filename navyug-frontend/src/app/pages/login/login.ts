import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
    loginToggle: "email" | "mobile" = "email";
    emailForm: FormGroup;
    mobileForm: FormGroup;

    constructor(private fb: FormBuilder) {
      this.emailForm = this.fb.group({
        email: ['', [Validators.required, Validators.email, Validators.maxLength(50)]],
        password: ['', [Validators.required]],
      })

      this.mobileForm = this.fb.group({
        phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
        otp: ['', [Validators.required, Validators.pattern(/^[0-9]{6}$/)]],
      })
    }
    
    handleToggle(val: "email" | "mobile") {
      this.mobileForm.reset();
      this.emailForm.reset();
      this.loginToggle = val;
    }

    onSubmit(val: "email" | "mobile") {
      if(val == "email")
      {
        this.emailForm.markAllAsTouched();
        if(this.emailForm.valid)
        {
          console.log(this.emailForm.value);
          this.emailForm.reset();
        }
      }
      if(val == "mobile")
      {
        this.mobileForm.markAllAsTouched();
        if(this.mobileForm.valid)
        {
          console.log(this.mobileForm.value);
          this.mobileForm.reset();
        }
      }
    } 

    sendOtp() {
      if(this.mobileForm.get('phone')?.valid)
      {
        console.log(this.mobileForm.get('phone')?.value)
      }
    }
}
