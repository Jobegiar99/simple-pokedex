import React,{Component} from 'react';
import "./pokeStyle.css";

class Pokecard extends React.Component{

    render(){
        let url ="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png"
        let id = (this.props.id > 99 ) ? this.props.id.toString(): (this.props.id > 9 ) ? "0" + this.props.id.toString() : "00" + this.props.id.toString();
        let serebii="https://www.serebii.net/pokedex-xy/{id}.shtml"
        url = url.replace("${id}",id );
        serebii = serebii.replace("{id}",id);
        
        return(

            <div  className = "pokeCardDiv" >

               <hi className = "pokeCardH1">
                   {id}
               </hi> 
               <br></br>
               <a HREF = {serebii} target = "_blank">
                    <img className = "pokemonImage"src={url} width = "50"/>
                </a>

            </div>
        )
    }

}

export default Pokecard;