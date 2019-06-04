import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../pokemon.service';

@Component({
  selector: 'app-poketypes',
  templateUrl: './poketypes.component.html',
  styleUrls: ['./poketypes.component.css']
})
export class PoketypesComponent implements OnInit {

  poketypes: any;

  constructor(private data: PokemonService) { }

  ngOnInit() {
    this.data.getPokeTypes().subscribe(
      (data) => {this.poketypes = data;
      })


  }

}
