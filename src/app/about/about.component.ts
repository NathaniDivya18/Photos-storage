import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-bug',
  standalone: true,
  imports: [RouterLink,RouterOutlet,FormsModule,CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  photos = [
    { id: 1, src: '/photo1.png', alt: 'Photo1' },
    { id: 2, src: '/photo2.png', alt: 'Photo2' },
    { id: 3, src: '/photo3.png', alt: 'Photo3' },
    { id: 4, src: '/photo4.png', alt: 'Photo4' },
    { id: 5, src: '/photo5.png', alt: 'Photo5' },
    { id: 6, src: '/photo6.png', alt: 'Photo6' },
    { id: 7, src: '/photo7.png', alt: 'Photo7' },
    { id: 8, src: '/photo8.png', alt: 'Photo8' },
    { id: 9, src: '/photo9.png', alt: 'Photo9' },
    { id: 10, src: '/photo10.png', alt: 'Photo10' },
    { id: 11, src: '/photo11.png', alt: 'Photo11' },
    { id: 12, src: '/photo12.png', alt: 'Photo12' }
  ];

  searchquery:any;
  filteredPhotos:any;
  searched = false; // Flag to track if search has been performed

  search(event: Event) {
    event.preventDefault(); // Prevent form submission
    this.searched = true; // Set searched flag to true once search is performed
    this.filteredPhotos = this.photos.filter(photo =>
      photo.alt.toLowerCase().includes(this.searchquery.toLowerCase())
    );
    console.log('Filtered Photos:', this.filteredPhotos);
  }
}
