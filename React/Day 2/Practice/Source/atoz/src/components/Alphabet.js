import React from 'react';

export class Alphabet extends React.Component{
    alpha(){
        var res = '';
        for(let i=65;i<=90;i++)
        res += String.fromCharCode(i) + ' ';
        return res;
    }
    render(){
        return(
        <div>
            <h1>
                Alphabet
            </h1>
            <hr />
            <h3>
                {this.alpha()}
            </h3>
        </div>
        )
    }
}
export default Alphabet;