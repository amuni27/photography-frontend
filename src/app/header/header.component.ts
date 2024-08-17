import {Component, OnInit} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {AuthService} from "../auth.service";
import {NgIf} from "@angular/common";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false

  constructor(private _router: Router, private _authService: AuthService) {
  }

  ngOnInit(): void {
    this.isLoggedIn = this._authService.hasToken()
  }


  logout() {
    this._authService.logout()
    this.isLoggedIn=false
    this._router.navigate([environment.PHOTOGRAPHER_ENDPOINT])
  }
}
