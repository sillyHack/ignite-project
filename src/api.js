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

export const popularGamesURL = () => `${base_url}${popular_games}`;

//console.log(popularGamesURL());