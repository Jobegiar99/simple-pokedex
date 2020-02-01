import React,{Component} from 'react';
import "./pokeStyle.css";

class Pokecard extends React.Component{

    render(){
        let id = (this.props.id > 99 ) ? this.props.id.toString(): (this.props.id > 9 ) ? "0" + this.props.id.toString() : "00" + this.props.id.toString();
        let serebii=`https://www.serebii.net/pokedex-sm/${id}.shtml`
        let url =`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`
        return(

            <div  className = "pokeCardDiv">
                <u><b>
                    <h3 align = "center"  className = "pokeCardH3">
                        {id}
                    </h3> 
                </b></u> 
                <br></br>
                <a HREF = {serebii} target = "_blank">
                    <img className = "pokemonImage"src={url} alt={id} width = "50"/>
                </a>

            </div>
        )
    }

}

export default Pokecard;