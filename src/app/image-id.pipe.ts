import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name:'imageId'})
export class ImageId implements PipeTransform{
imgId: string;
transform(pokemonId :number): string {

        if (pokemonId.toString().length == 1)
        {
            this.imgId =  '00' + pokemonId;
            return this.imgId;  
        }
        else if (pokemonId.toString().length == 2)
        {
            this.imgId =  '0' + pokemonId;
            return this.imgId;  
        }
        else
        {
            return pokemonId.toString();
        }
    }
}