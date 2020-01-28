import React,{Component} from 'react';
import Pokedex from './pokedex';
import ReactDOM from 'react-dom';


class App extends React.Component{
    render(){
        
        return(
            <Pokedex />
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('root'));




