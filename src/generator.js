import React,{Component} from 'react';
import Pokecard from './pokecard';

let pokemons = [];
let pokemonNumber = 1;
for (let i = 0; i < 134 ; i++){
    let tempPokemon = []
    for(let j = 0; j < 6; j++){
        
        tempPokemon.push(
            <td>
            <Pokecard
                id = {pokemonNumber}
            />
            </td>
        )
        pokemonNumber++;

    }
    pokemons.push(tempPokemon);
}


let dexTable = pokemons.map( (pokemon) => (
    <table>
        <tr>
            {pokemon}
        </tr>
    </table>
));


export default dexTable;