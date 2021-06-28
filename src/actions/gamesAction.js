import axios from "axios";
import {popularGamesURL} from '../api';

// Action creator

export const loadGames = () => async (dispatch) => { // async: to call a function in an asynchronous way
     // FETCH AXIOS
     const popularData = await axios.get(popularGamesURL()); // await: to wait for the data finishing to load
     dispatch({
          type: "FETCH_GAMES",
          payload: {
               popular: popularData.data.results // we get the games directly
          }
     });
}