import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PoketypesComponent } from 'src/app/pokemon/poketypes/poketypes.component';
import { PokelistComponent } from 'src/app/pokemon/pokelist/pokelist.component';
import { PokedetailsComponent } from 'src/app/pokemon/pokedetails/pokedetails.component';

const routes: Routes = [
  {
    path:'', component:PoketypesComponent
  },
  {
    path:':type',component:PokelistComponent
  },
  {
    path:':type/:name',component:PokedetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
