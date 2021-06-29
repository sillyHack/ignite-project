import React, {useEffect} from "react";
// styling
import styled from "styled-components";
import { motion } from "framer-motion";
// Redux
import {useDispatch, useSelector} from "react-redux";
import {loadGames} from "../actions/gamesAction";
// components
import Game from "../components/Game";

const Home = () => {
     // FETCH GAMES
     const dispatch = useDispatch();
     useEffect(() => {
          dispatch(loadGames());
     }, [dispatch]);
     // get the data back
     const {popular, newGames, upcoming} = useSelector((state) => state.games); // we just extract the popular games, new games and upcoming games
     console.log(popular);
     return(
          <GameList>
               <h2>Upcoming Games</h2>
               <Games>
                    {upcoming.map(game => (
                         <Game 
                              name={game.name} 
                              released={game.released} 
                              id={game.id}
                              image={game.background_image}
                              key={game.id}
                         />
                    ))}
               </Games>
               <h2>Popular Games</h2>
               <Games>
                    {popular.map(game => (
                         <Game 
                              name={game.name} 
                              released={game.released} 
                              id={game.id}
                              image={game.background_image}
                              key={game.id}
                         />
                    ))}
               </Games>
               <h2>New Games</h2>
               <Games>
                    {newGames.map(game => (
                         <Game 
                              name={game.name} 
                              released={game.released} 
                              id={game.id}
                              image={game.background_image}
                              key={game.id}
                         />
                    ))}
               </Games>
          </GameList>
     );
};

const GameList = styled(motion.div)`
     padding: 0rem 5rem;
     h2{
          padding: 5rem 0rem
     }
`;

const Games = styled(motion.div)`
     min-height: 80vh;
     display: grid;
     grid-template-columns: repeat(auto-fit, minmax(500px, 1fr)); // each components should take 500px space
     grid-column-gap: 3rem; // we add space between columns
     grid-row-gap: 5rem; // we add space between rows
`;

export default Home;


