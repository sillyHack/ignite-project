// base url
const base_url = 'https://api.rawg.io/api/';

// api key
const API_KEY = '8709ac55e67241afbaf26788d272d718';

// getting the current month
const getCurrentMonth = () => {
     const month = new Date().getMonth() + 1;
     if(month < 10){
          return `0${month}`;
     }else{
          return month;
     }
}

// getting the current day
const getCurrentDay = () => {
     const day = new Date().getDate();
     if(day < 10){
          return `0${day}`;
     }else{
          return day;
     }
}

// getting the full current date yyyy-mm-dd
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// Popular games
// we get the games since lastYear until now, ordering them starting by the highest rate, and we display 10 games in the page
const popular_games = `games?key=${API_KEY}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
// we get the games since now until next year, ordering by added, and we display 10 games in the page
const upcoming_games = `games?key=${API_KEY}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?key=${API_KEY}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${newGames}`;

// GAME DETAILS
export const gameDetailsURL = (game_id) => `${base_url}games/${game_id}?key=${API_KEY}`
// GAME SCREENSHOTS
export const gameScreenshotURL = (game_id) => `${base_url}games/${game_id}/screenshots?key=${API_KEY}`
// SEARCHED GAME
export const searchGameURL = (game_name) => `${base_url}games?key=${API_KEY}&search=${game_name}&page_size=7`;

//console.log(popularGamesURL());