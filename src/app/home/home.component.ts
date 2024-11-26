import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  name: string = "Dalila";
  roles: string[] = [
    "Aspiring Software Engineer",
    "UC San Diego Alumni",
    "Hobbyist Artist",
    "Aspiring Software Engineer"
  ];
}
