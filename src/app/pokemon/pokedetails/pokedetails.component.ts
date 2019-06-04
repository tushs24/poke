import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../pokemon.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokedetails',
  templateUrl: './pokedetails.component.html',
  styleUrls: ['./pokedetails.component.css']
})
export class PokedetailsComponent implements OnInit {

  name: string;
  pokeInfo: any;
  extraInfo: any;

  constructor(private data: PokemonService, private route: ActivatedRoute) {
    this.route.params.subscribe(param => this.name = param.name)
   }

  ngOnInit() { 
    this.data.getPokeDetail(this.name).subscribe(
      (data) => {
       this.pokeInfo = data;

       this.data.getExtraDetails(this.pokeInfo.species.url).subscribe(
        (data) => {
          this.extraInfo = data;
        }
      )
      }
    )
  }
}
