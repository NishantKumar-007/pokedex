import React from 'react';
import Button from './Button';
import '../style/Top.css';

function Top() {
    return (
      <div className='lights'>
        <Button></Button>
        <Button color='red' height='20px' width='20px'></Button>
        <Button color='yellow' height='20px' width='20px'></Button>
        <Button color='green' height='20px' width='20px'></Button>
      </div>
    )
  }
  
  export default Top;
  