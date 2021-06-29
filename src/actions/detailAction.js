import axios from "axios";
import { gameDetailsURL, gameScreenshotURL } from "../api";

export const loadDetail = (id) => async (dispatch) => {

     dispatch({
          type: "LOADING_DETAIL"
     });     

     const detailData = await axios.get(gameDetailsURL(id));
     const screenshots = await axios.get(gameScreenshotURL(id));

     dispatch({
          type: "GET_DETAIL",
          payload: {
               game: detailData.data,
               screenshots: screenshots.data
          }
     });
};
