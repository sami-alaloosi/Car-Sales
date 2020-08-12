

//action types
const ADD_FEATURE = "ADD_FEATURE"
const REMOVE_FEATURE = "REMOVE_FEATURE"

// action creatores
export  const addedFeature = (feature) =>{
  
  return {
    type: ADD_FEATURE,
    payload: feature
  }

}

export  const removeFeature = (feature) =>{
  return {
    type: REMOVE_FEATURE,
    payload: feature
  }

}

//intinalState
const intinalState ={
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  }

// Reducer
 const carReducer =(state =intinalState, action) => {
    switch(action.type) {
      case "ADD_FEATURE": 
          
            return {
              ...state,
              car: {
                ...state.car,
                features: 

                 state.car.features.includes(action.payload) ? [...state.car.features] : 
                [...state.car.features, action.payload]
                
              }
              ,
              
              additionalPrice: state.car.features.includes(action.payload) ? state.additionalPrice : state.additionalPrice += action.payload.price
            }


    

            case REMOVE_FEATURE: 
                return {
                  ...state, 
                  car: {
                    ...state.car, 
                    features: state.car.features.filter(feature => feature.id !== action.payload.id)
                  },
                  additionalPrice: state.additionalPrice -= action.payload.price
                }


        default:
            return state
    }
}

export default carReducer