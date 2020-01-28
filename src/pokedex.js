import React,{Component} from 'react';
import Pokecard from './pokecard';
import pokemon from './generator';
import "./pokeStyle.css";
import ReactDOM from 'react-dom';


class Pokedex extends React.Component{
    render(){
      

        return(
            <div align = "center" className = "pokedexDiv">
                <br></br>
                <br></br>
                {pokemon}
                <br></br>
            </div>
        )
    }
}


export default Pokedex;