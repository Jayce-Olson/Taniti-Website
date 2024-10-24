import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./nav-bar/nav-bar.component"
import { IntroductionComponent } from './introduction/introduction.component';
import { DescriptionComponent } from './description/description.component';
import { AmenitiesComponent } from './amenities/amenities.component';
import { FaqComponent } from './faq/faq.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, IntroductionComponent, DescriptionComponent, AmenitiesComponent, FaqComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
