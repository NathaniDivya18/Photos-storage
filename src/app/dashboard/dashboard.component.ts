import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink,RouterOutlet,CommonModule,FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  constructor(private titleservice:Title  ){
  }
  isvisible="true";
  photos = [
    { id: 1, src: '/photo1.png', alt: 'Photo1' ,type:'image'},
    { id: 2, src: '/photo2.png', alt: 'Photo2',type:'image' },
    { id: 3, src: '/photo3.png', alt: 'Photo3' ,type:'image'},
    { id: 4, src: '/photo4.png', alt: 'Photo4',type:'image' },
    { id: 5, src: '/photo5.png', alt: 'Photo5',type:'image' },
    { id: 6, src: '/photo6.png', alt: 'Photo6',type:'image' },
    { id: 7, src: '/photo7.png', alt: 'Photo7',type:'image' },
    { id: 8, src: '/photo8.png', alt: 'Photo8' ,type:'image'},
    { id: 9, src: '/photo9.png', alt: 'Photo9' ,type:'image'},
    { id: 10, src: '/photo10.png', alt: 'Photo10' ,type:'image'},
    { id: 11, src: '/photo11.png', alt: 'Photo11',type:'image' },
    { id: 12, src: '/photo12.png', alt: 'Photo12',type:'image' },
    {id:13,src:'/video13.mp4',alt:'video1',type:'video',isVideoVisible: false},
    {id:14,src:'/video14.mp4',alt:'video2',type:'video',isVideoVisible: false},
    {id:15,src:'/video15.mp4',alt:'video3',type:'video',isVideoVisible: false},
    {id:16,src:'/video16.mp4',alt:'video4',type:'video',isVideoVisible: false},
    {id:17,src:'/video17.mp4',alt:'video5',type:'video',isVideoVisible: false}
  ];
  searchquery='';

  
  ngOnInit(){
    this.titleservice.setTitle('Watch ibomma Telugu movies in HD | iBOMMA ONE');
  }
  filiteredphotos=this.photos;
  search(){
    this.filiteredphotos=this.photos.filter((photo)=>photo.alt.toLowerCase().includes(this.searchquery.toLowerCase()))
  }
  showVideo(photoId: number) {
    const photo = this.photos.find(p => p.id === photoId);
    if (photo) {
      photo.isVideoVisible = !photo.isVideoVisible;  // Toggle visibility
    }
  }

}
