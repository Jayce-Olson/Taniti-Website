import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-amenity',
  standalone: true,
  imports: [],
  templateUrl: './amenity.component.html',
  styleUrl: './amenity.component.css'
})
export class AmenityComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() img!: string;
}