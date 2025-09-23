import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class Register {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.maxLength(50)]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20), Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/)]],
      cpassword: ['',[Validators.required]],
    }, { validators: this.passwordMatchValidator });
  }
 
  passwordMatchValidator: ValidatorFn = (group: AbstractControl) => {
    const password = group.get('password')?.value;
    const cpassword = group.get('cpassword')?.value;

    return password === cpassword ? null : { passwordMismatch: true };
  };

  onSubmit() {
    if(this.registerForm.valid)
    {
      this.registerForm.markAllAsTouched();
      console.log(this.registerForm.value);
      this.registerForm.reset();
    }
  }
}
