import React,{Component} from 'react';
import Pokecard from './pokecard';

let dexTable = [];
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


for (let i = 0 ; i < 134 ; i++){

    dexTable.push(
        <table>
            <tr>
                {pokemons[i]}
            </tr>
            <tr>

            </tr>
        </table>
    );

}


export default dexTable;