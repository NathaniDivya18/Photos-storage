import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.scss'
})
export class PhotoComponent {
  photoid:any;
  idtype:any;
  constructor(private routerA:ActivatedRoute){}
  ngOnInit(){
    this.routerA.paramMap.subscribe((params)=>{
      this.photoid=+params.getAll('id') ||"";
      this.idtype=params.get('type')||"";
      console.log(this.photoid,this.idtype);
      console.log('Constructed video src:', 'video' + this.photoid + '.mp4');
    })
  }

}
