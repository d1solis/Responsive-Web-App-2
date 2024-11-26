import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  hobbies: string[] = ['Gaming 🎮', 'Drawing ✏️', 'Painting 🎨', 'Yoga 🧘‍♀️', 
    'Baking 🍪', 'Photography 📸', 'Music 🎧', 'Swimming 🏊‍♀️', 'Pin Collecting 📌', 
    'Stickers 🙂', 'Plushies 🧸', 'Napping 💤'];
}
