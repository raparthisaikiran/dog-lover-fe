import { Component, OnInit } from '@angular/core';
import { RestService } from '../service/rest.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  constructor(private authService: RestService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForms();
  }
  createForms() {
    this.loginForm = this.fb.group({
      name: [''],
      email: ['Sumanthreddy2303@gmail.com']
    })
  }
  onLetsGo() {
    this.authService.authUser(this.loginForm.getRawValue()).subscribe({
      next: (res) => {
        console.log(res)
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

}
