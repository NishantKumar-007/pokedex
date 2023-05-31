import React from 'react';
import Display from './Display';
import Bottom from './Bottom';
import Top from './Top';
import '../style/Case.css';

function Case() {
    return (
     <div className='outercase'>
        <Top></Top>
        <Display></Display>
        <Bottom></Bottom>
     </div>

    )
  }
  
  export default Case;
  