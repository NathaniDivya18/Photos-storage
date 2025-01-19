import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dmca',
  standalone: true,
  imports: [RouterLink,RouterOutlet,FormsModule,CommonModule],
  templateUrl: './dmca.component.html',
  styleUrl: './dmca.component.scss'
})
export class DmcaComponent {
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
  searchquery='';
  searched=false;
  filiteredphotos=this.photos;
  search(){
    this.filiteredphotos=this.photos.filter((photo)=>photo.alt.toLowerCase().includes(this.searchquery.toLowerCase()))
    this.searched=true;
  }


}
