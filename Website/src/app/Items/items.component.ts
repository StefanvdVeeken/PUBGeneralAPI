import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/image.service';
import { PictureData } from '../DataInterfaces/PictureInterface';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})

export class ItemsComponent implements OnInit {

  constructor(private _svc: ImageService) {

  }

  image: PictureData[];
  loading: boolean;
  outofrange:boolean;
  filter: string[] = [
    "all items",
    "weapons",
    "use items",
    "equipment",
    "attachments",
    "maps",
    "ammuntion"
  ];

  private _filter: string;
  private _id: number;

  get Filter() {
    return this._filter;
  }

  set Filter(value: string) {
    this._filter = value;
  }

  get ID(){
    return this._id;
  }

  set ID(value:number){
    this._id = value;
  }

  ngOnInit(): void {
    this.loading = true;
    this._svc.getImages().subscribe(result => {
      this.image = result;
      console.log(this.image);
      if (this.image.length == result.length) {
        this.loading = false;
      }
    });
  }

  ApplyFilter(): void {
    switch (this._filter) {
      case this.filter[0]: {
        this.loading = true;
        this._svc.getImages().subscribe(result => {
          this.image = result;
          if (this.image.length == result.length) {
            this.loading = false;
          }
        });
        break;
      }

      case this.filter[1]: {
        this.loading = true;
        this._svc.getWeapons().subscribe(result => {
          this.image = result;
          if (this.image.length == result.length) {
            this.loading = false;
          }
        });
        break;
      }

      case this.filter[2]: {
        this.loading = true;
        this._svc.getUseItems().subscribe(result => {
          this.image = result;
          if (this.image.length == result.length) {
            this.loading = false;
          }
        });
        break;
      }

      case this.filter[3]: {
        this.loading = true;
        this._svc.getEquipment().subscribe(result => {
          this.image = result;
          if (this.image.length == result.length) {
            this.loading = false;
          }
        });
        break;
      }

      case this.filter[4]: {
        this.loading = true;
        this._svc.getAttachments().subscribe(result => {
          this.image = result;
          if (this.image.length == result.length) {
            this.loading = false;
          }
        });
        break;
      }

      case this.filter[5]: {
        this.loading = true;
        this._svc.getMaps().subscribe(result => {
          this.image = result;
          if (this.image.length == result.length) {
            this.loading = false;
          }
        });
        break;
      }

      case this.filter[6]: {
        this.loading = true;
        this._svc.getAmmunition().subscribe(result => {
          this.image = result;
          if (this.image.length == result.length) {
            this.loading = false;
          }
        });
        break;
      }

    }
  }

  FilterById(): void {
    this.loading = true;
    this.image = [];
    this._svc.getImagesId(this._id).subscribe(result =>{
      this.image[0] = result;
      if(this.image[0] != null){
        this.outofrange = false;
      }
      if(this.image[0] == null){
        this.outofrange = true;
      }
      this.loading = false;
    });
  }

}
