import React,{Component} from 'react';

let numbers = [];

for (let i = 0 ; i < 6; i++){
    numbers.push( Math.floor(Math.random() * 807));
}

export default numbers;