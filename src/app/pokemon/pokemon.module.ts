import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { PoketypesComponent } from './poketypes/poketypes.component';
import { PokedetailsComponent } from './pokedetails/pokedetails.component';
import { PokelistComponent } from './pokelist/pokelist.component';
import { ImageId } from '../image-id.pipe';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [PoketypesComponent, PokedetailsComponent, PokelistComponent,ImageId],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    ScrollingModule
  ]
})
export class PokemonModule { }
