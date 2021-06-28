const initialState = {
     popular : [],
     newGames : [],
     upcoming : [],
     searched: []
}

const gamesReducer = (state = initialState, action) => {
     switch (action.type) {
          case 'FETCH_GAMES':
               return {...state};
          default:
               return {...state};
     }
};

// Action creator
const fetchGames = (userData) => {
     return {
          type: "FETCH_GAMES",
     };
};

export default gamesReducer;