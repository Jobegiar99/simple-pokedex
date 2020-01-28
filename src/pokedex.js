import React,{Component} from 'react';
import Pokecard from './pokecard';
import numbers from './generator';
import "./pokeStyle.css";
import ReactDOM from 'react-dom';


class Pokedex extends React.Component{
    render(){
        let data = [
            {id: numbers[0], name: '', type: 'fire', base_experience: 62},
            {id: numbers[1], name: '', type: 'water', base_experience: 63},
            {id: numbers[2], name: '', type: 'bug', base_experience: 72},
            {id: numbers[3], name: '', type: 'flying', base_experience: 178},
            {id: numbers[4], name: '', type: 'electric', base_experience: 112},
            {id: numbers[5], name: '', type: 'normal', base_experience: 95},
            {id: 94, name: '', type: 'poison', base_experience: 225},
            {id: 133, name: '', type: 'normal', base_experience: 65}
        ];

        return(
            <div align = "center">
                <hi className = "pokedexH1">YOUR POKEMON TEAM</hi>   
                <br></br>
                <br></br>
                <table  className= "pokedexTable"> 
                   <tr>
                       <th>
                           <Pokecard
                                id = {data[0].id}
                                name = {data[0].name}
                                type = {data[0].type}
                                xp = {data[0].base_experience}
                           />
                       </th>
                       <th>
                            <Pokecard
                                id = {data[1].id}
                                name = {data[1].name}
                                type = {data[1].type}
                                xp = {data[1].base_experience}
                           />
                       </th>
                       <th>
                            <Pokecard
                                id = {data[2].id}
                                name = {data[2].name}
                                type = {data[2].type}
                                xp = {data[2].base_experience}
                           />
                       </th>
                   </tr> 
                   <tr>
                       <th>
                            <Pokecard
                                id = {data[3].id}
                                name = {data[3].name}
                                type = {data[3].type}
                                xp = {data[3].base_experience}
                           />
                       </th>
                       <th>
                            <Pokecard
                                id = {data[4].id}
                                name = {data[4].name}
                                type = {data[4].type}
                                xp = {data[4].base_experience}
                           />
                       </th>
                       <th>
                            <Pokecard
                                id = {data[5].id}
                                name = {data[5].name}
                                type = {data[5].type}
                                xp = {data[5].base_experience}
                           />
                       </th>
                   </tr>
                </table>
                <br></br>
            </div>
        )
    }
}


export default Pokedex;