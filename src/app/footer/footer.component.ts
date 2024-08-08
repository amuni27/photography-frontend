import { Component } from '@angular/core';
import {GenderPipe} from "../gender.pipe";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    GenderPipe
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
