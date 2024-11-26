import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  email: string = "dalilaeileensolis@gmail.com";
  showEmail: boolean = true;

  toggleEmail(): void {
    this.showEmail = !this.showEmail;
  }

  userName: string = ''; // Property for two-way binding
  userLastName: string = ''; // Property for two-way binding
  userEmail: string = ''; // Another property for the email field
  formSubmitted: boolean = false; // Flag to track form submission

  onSubmit(): void {
    this.formSubmitted = true; // Set the flag to true when the form is submitted
    console.log(`Name: ${this.userName} ${this.userLastName}, Email: ${this.userEmail}`); // Debugging output
  }
}
