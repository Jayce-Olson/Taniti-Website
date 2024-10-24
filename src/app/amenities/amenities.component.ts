import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AmenityComponent } from './amenity/amenity.component';

@Component({
  selector: 'app-amenities',
  standalone: true,
  imports: [AmenityComponent, CommonModule],
  templateUrl: './amenities.component.html',
  styleUrl: './amenities.component.css'
})
export class AmenitiesComponent {
  amenities = [
    {title: "Restaurants:",
      description: "Taniti currently has 10 restaurants: five serve mostly local fish and rice, three serve American-style meals, and two serve Pan-Asian cuisine.",
    img: "/assets/taniti.jpg"},
    {title: "Grocery Stores:",
      description: "Taniti has two supermarkets, two smaller grocery stores, and one convenience store that is open 24 hours a day.",
    img: "/assets/taniti.jpg"}
  ]
}
