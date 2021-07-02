import axios from "axios";
import {popularGamesURL, upcomingGamesURL, newGamesURL, searchGameURL} from '../api';

// Action creator

export const loadGames = () => async (dispatch) => { // async: to call a function in an asynchronous way
     // FETCH AXIOS
     const popularData = await axios.get(popularGamesURL()); // await: to wait for the data finishing to load
     const upcomingData = await axios.get(upcomingGamesURL()); 
     const newGamesData = await axios.get(newGamesURL()); 
     dispatch({
          type: "FETCH_GAMES",
          payload: {
               popular: popularData.data.results, // we get the games directly
               upcoming: upcomingData.data.results,
               newGames: newGamesData.data.results
          }
     });
};

export const fetchSearch = (game_name) => async (dispatch) => {
     const searchGames = await axios.get(searchGameURL(game_name));
     dispatch({
          type: "FETCH_SEARCHED",
          payload: {
               searched: searchGames.data.results
          }
     });
};
