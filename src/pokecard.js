import React,{Component} from 'react';
import "./pokeStyle.css";

class Pokecard extends React.Component{
    static defaultProps = {
        id : 1,
        name : "Bulbasaur",
        type : "grass",
        xp : 0
    }

    render(){
        let url ="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png"
        let id = (this.props.id > 99 ) ? this.props.id.toString(): (this.props.id > 9 ) ? "0" + this.props.id.toString() : "00" + this.props.id.toString();
        url = url.replace("${id}",id );
        //https://www.serebii.net/pokedex-xy/001.shtml
        
        return(

            <div  className = "pokeCardDiv" >

               <hi className = "pokeCardH1">
                   {id}
               </hi> 
               <br></br>
               <img className = "pokemonImage"src={url} width = "50"/>

            </div>
        )
    }
}

export default Pokecard;