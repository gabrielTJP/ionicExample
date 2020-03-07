import { ArtigoService } from './../artigo/artigo.service';
import { Artigo } from './../model/artigo';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

artigos: Artigo[]= [];

  constructor(private serviceArtigo: ArtigoService) {
    this.artigos = this.serviceArtigo.getAll();

  }

}
