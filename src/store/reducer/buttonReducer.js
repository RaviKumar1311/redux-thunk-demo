import {INCREMENT,DECREMENT} from "../action/type.action";


const reducers = (state = 0,  {type} ) => {
    switch (type) {
      case INCREMENT:
        return  state + 1;
         
        
      case DECREMENT:
        return state - 1 ;
          
        
        default:
            return state;
        }
      };
      
export default reducers;