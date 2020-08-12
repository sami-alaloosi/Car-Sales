import React from 'react';
import {store} from "../store/store"
import { removeFeature} from "../store/cars"



const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={() => {
       store.dispatch(removeFeature(props.feature));
      }}
      
        className="button">x</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
