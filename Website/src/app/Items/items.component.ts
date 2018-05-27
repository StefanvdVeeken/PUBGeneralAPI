import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  imagebytes : ByteString[];
  loading : boolean;
  constructor(private _svc: ImageService) {

  }


  ngOnInit(): void {
    this.loading = true;
    this._svc.getImages().subscribe(result => {
      this.imagebytes = result;
      if(this.imagebytes.length == 2){
        this.loading = false;
      }
    })
  }

}
