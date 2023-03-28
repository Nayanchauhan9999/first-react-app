const initialValue = 0
const changeCounter = (state = initialValue,action)=>{
    switch(action.type){
        case "INCREMENT" : return state + 1
        case "DECREMENT" : return state - 1
        case "RESET" : return state
        default : return state
    }
}
export default changeCounter;