import React from 'react';
import Display from './Display';
import Bottom from './Bottom';
import Top from './Top';
import '../style/Case.css';

function Case() {
    return (
     <div class="cube">
      <div class="face outercase">
      <Top></Top>
      <Display></Display>
      <Bottom></Bottom>
      </div>
      <div class="face back"></div>
      <div class="face top"></div>
      <div class="face bottom"></div>
      <div class="face left"></div>
      <div class="face right"></div>
   </div>

     

    )
  }
  
  export default Case;
  