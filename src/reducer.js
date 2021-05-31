export const initialState={
    user:null,
    playlists:[],
    playing:false,
    item:null,
    // token:"BQC4P1G6WivzDr4lSq-rjKENwxVDm8XAM6uqXdJ0nVpP_WXRTquQE20yhRLELezSp0QtMHC98Bp0XXN12cx0lCewCD7HJ4MJt2OCMGbKb3a6vJ1yVaAljoscyHMm0ZsDwD4sGgE7hAK-xx7BqB1xXp5z4yG-mtjyTyLnIIQRR3Pf7251",
    
};

const reducer=(state, action)=>{
console.log(action);

switch(action.type){
    case 'SET_USER':
        return{
            ...state,
            user:action.user
        };
    case 'SET_TOKEN':
        return{
            ...state,
            token:action.token
        };

    case 'SET_PLAYLISTS':
        return{
            ...state,
            playlists:action.playlists,
        };

    case 'SET_DISCOVER_WEEKLY':
        return{
            ...state,
            discover_weekly: action.discover_weekly,
        };

    default:
            return state;
}
}

export default reducer;