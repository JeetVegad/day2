import React from 'react';
function Rectangle(){
    const calc = (num1,num2) =>{
        alert(num1 + num2);
    }
    return (
        <button onClick={() =>calc()}>helllo</button>
      );
}

export default Rectangle;