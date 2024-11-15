import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-amenity',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './amenity.component.html',
  styleUrl: './amenity.component.css'
})
export class AmenityComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() img!: string;
  @Input() isRightAligned!: boolean;
}
