import { FETCH_WEATHER } from '../actions/index';

export default function(state= [], action) {   // return multiple colum
    switch(action.type){
        case FETCH_WEATHER:
            //return state.push(action.payload.data)
            //return state.concat([action.payload.data]);
            return [ action.payload.data, ...state ]; //use es6
    }
    return state;
}