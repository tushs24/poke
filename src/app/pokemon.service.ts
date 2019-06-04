import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

export interface PokeTypes{
  name : string;
  url :string;
}

export interface PokeList{  
  pokemon: any[];
}

export interface PokemonResponse{
  count: number;
  results: PokeTypes[];
}

// export interface Ability{
//   name: string;
//   url: string;
// }

// export interface Abilities{
//   ability: Ability[];
// }

export interface PokeDetails{
  height: number;
  name:string;
  weight:number;
  base_experience:number;
  id:number;
  species:Species[];
}

export interface Species{
  name:string;
  url:string
}

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokeTypes():Observable<PokeTypes[]>{
    return this.http.get('https://pokeapi.co/api/v2/type')
      .pipe(
        map( (typeData:PokemonResponse) => { console.log('type information ', typeData); 
        return typeData.results })
    );
  }

  getPokelist(type):Observable<PokeList[]>
  {
    return this.http.get('https://pokeapi.co/api/v2/type/'+type)
    .pipe(
      map((typelist: PokeList) => {console.log('list', typelist)
    return typelist.pokemon})
    )
  }

  getPokeDetail(pokename):Observable<PokeDetails>
  {
    return this.http.get('https://pokeapi.co/api/v2/pokemon/'+pokename)
    .pipe(
      map((details:PokeDetails) => {console.log('details', details)
    return details})
    )
  }

  // getPokeDetail(name):Observable<Ability[]>
  // {
  //   return this.http.get('https://pokeapi.co/api/v2/pokemon/'+name)
  //   .pipe(
  //     map((typeDetail:Abilities) => {console.log('detail', typeDetail)
  //     return typeDetail})
  //   )
  // }
  getExtraDetails(url)
  {
    console.log(url);
    return this.http.get(url);
  }
}
