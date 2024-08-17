import {Component, OnInit} from '@angular/core';
import {NgIf} from "@angular/common";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-registration',
  standalone: true,
    imports: [
        NgIf,
        ReactiveFormsModule
    ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnInit{
  _registrationForm!: FormGroup
  isRegisterErrorVisible:boolean=false;
  errorMessage:string = ""

  constructor(private _formBuilder: FormBuilder,private _authService: AuthService,private _router: Router) {
  }

  ngOnInit(): void {
    this._registrationForm= this._formBuilder.group({
      name: "",
      username: "",
      password: "",
      role: environment.ADMIN
    })
  }

  register(){
    this._authService.register(this._registrationForm.value).subscribe({
      next:data=>{
        this._router.navigate([environment.LOGIN])
      },
      error: err => {
        this.errorMessage=err.error
        this.isRegisterErrorVisible=true
        console.log(err.error)
      }
    })

  }
}
