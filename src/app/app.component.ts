import { Component, OnInit } from '@angular/core';
import { HeroFormComponent } from "./hero-form/hero-form.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    // CommonModule,
    // FormsModule,
    // BrowserModule, // Why Error?
    HeroFormComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'AngularForm';

  ngOnInit(): void {
    console.log('AppComponent initialized');
  }
}
