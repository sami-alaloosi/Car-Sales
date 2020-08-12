import React from 'react';
import {addedFeature} from "../store/cars"

import {store} from "../store/store"



const AdditionalFeature = props => {
  
  


const clickHandler = (feature) => {
  store.dispatch(addedFeature(feature))
  
}

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
       onClick={()=>clickHandler(props.feature)} 
    
       className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};



export default (AdditionalFeature);