import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { IPokemons } from './pokelist';

@Component({
  selector: 'app-pokelist',
  templateUrl: './pokelist.component.html',
  styleUrls: ['./pokelist.component.css']
})
export class PokelistComponent implements OnInit {

  type: string;
  // Need interface
  pokemons: IPokemons[];
  constructor(private data: PokemonService, private route: ActivatedRoute) { 
    this.route.params.subscribe(param => this.type = param.type)
  }

  ngOnInit() {
    this.data.getPokelist(this.type).subscribe(
    (data) => {this.pokemons = data;
      console.log('asfasf',this.pokemons);
    })
  }
}
