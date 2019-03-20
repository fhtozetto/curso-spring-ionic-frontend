import { API_CONFIG } from './../../Config/api.config';
import { CategoriaDTO } from './../../models/categoria.dto';
import { CategoriasService } from './../../services/domain/categoria.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {

  bucketUrl: string = API_CONFIG.bucketBaseUrl;

  items: CategoriaDTO[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public categoriaService: CategoriasService) {
  }

  ionViewDidLoad() {
    this.categoriaService.findAll()
    .subscribe(response => {
      this.items = response;
    },
    error => {
      console.log(error)
    });
    
  }

}
