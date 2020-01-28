import React,{Component} from 'react';
import Pokecard from './pokecard';
import pokemon from './generator';
import "./pokeStyle.css";
import ReactDOM from 'react-dom';


class Pokedex extends React.Component{
    render(){
      

        return(
            <div align = "center" className = "pokedexDiv">
                <image src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTOXv1hI7gSjxW6MILa_WsOmOXVK4m8AF8BbjJnWgrhMm_HHVzi"></image>  
                <br></br>
                <br></br>
                {pokemon}
                <br></br>
            </div>
        )
    }
}


export default Pokedex;