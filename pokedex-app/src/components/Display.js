import React from 'react';
import Button from './Button';
import PokeAPI from '../functional-components/pokeAPI';
import '../style/Display.css'

function Display() {
    return (
      <div>
        <div className='outerscreen'>
          <div className='row1'>
          <Button color='red' width='3px' height='3px'></Button>
          <Button color='red' width='3px' height='3px'></Button>
          </div>
          <div className='innerscreen'>
            <PokeAPI></PokeAPI>
          </div>
          <div className='row3'>
          <Button color='red' width='30px' height='30px'></Button>
          <div></div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Display;
  