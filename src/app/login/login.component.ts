import {Component, OnInit} from '@angular/core';
import {NgIf} from "@angular/common";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "../auth.service";
import {data} from "autoprefixer";
import {Router} from "@angular/router";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  _loginForm!: FormGroup
  isLoggedInErrorVisible: boolean = false
  errorMessage: string = ""

  constructor(private _formBuilder: FormBuilder, private _authService: AuthService, private _router: Router) {
  }

  ngOnInit(): void {
    if(this._authService.hasToken()){
      this._router.navigate([environment.PHOTOGRAPHER_ENDPOINT])
    }
    this._loginForm = this._formBuilder.group({
      username: "",
      password: ""
    })
  }

  login() {
    this.isLoggedInErrorVisible = false
    this._authService.login(this._loginForm.value).subscribe({
      next: response => {
        if(response){
          this._authService.setToken(response.toString())
        }
        this._router.navigate([environment.PHOTOGRAPHER_ENDPOINT])
      },
      error: err => {
        this.errorMessage = err.error
        this.isLoggedInErrorVisible = true
        console.log(err.error)
      }
    })

  }

}
