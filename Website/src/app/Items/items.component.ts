import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/image.service';
import { PictureData } from '../DataInterfaces/PictureInterface';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  image : PictureData[];
  loading : boolean;
  constructor(private _svc: ImageService) {

  }


  ngOnInit(): void {
    this.loading = true;
    this._svc.getImages().subscribe(result => {
      this.image = result;
      console.log(this.image);
      if(this.image.length == result.length){
        this.loading = false;
      }
    });
  }
}
