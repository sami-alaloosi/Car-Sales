import {createStore} from "redux"
import carReducer from "./cars"
import {devToolsEnhancer } from "redux-devtools-extension"


 export let store = createStore(carReducer, devToolsEnhancer({trace: true}))

