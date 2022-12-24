const INITIAL_DATA = {}

export const GET_PROFILE_DATA = (state=INITIAL_DATA ,action) =>{
   if(action.type==="GET_PROFILE_DATA"){
      return action.payload
   }

   return state
}