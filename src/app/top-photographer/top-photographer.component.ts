import {Component} from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-top-photographer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-photographer.component.html',
  styleUrl: './top-photographer.component.css'
})
export class TopPhotographerComponent {
  photographers: string[] = [
  "Annie Leibovitz", "Kebede", "Melaku", "Hile"]
}
