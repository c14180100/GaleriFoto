import { Component } from '@angular/core';
import { FotoService } from '../services/foto.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  randomNumber : Number;
  nomor : Number;
  showPhoto : Boolean;

  constructor(public fotoService2 : FotoService) {
    var min = Math.ceil(1);
    var max = Math.floor(10);
    
    this.randomNumber = Math.floor(Math.random() * (max - min) + min);
    this.showPhoto = false;
  }

  async ngOnInit(){

  }

  TambahFoto(){
    this.fotoService2.tambahFoto();
  }

  guess(){
    if(this.nomor == this.randomNumber){
      this.showPhoto = true;
    }
  }

}
