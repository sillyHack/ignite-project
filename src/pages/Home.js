import React, {useEffect} from "react";
// styling
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
// Redux
import {useDispatch, useSelector} from "react-redux";
import {loadGames} from "../actions/gamesAction";
// components
import Game from "../components/Game";
import GameDetail from "../components/GameDetail";
import { useLocation } from "react-router-dom";

const Home = () => {
     // get the current location
     const location = useLocation();
     const pathId = location.pathname.split("/")[2];
     // FETCH GAMES
     const dispatch = useDispatch();
     useEffect(() => {
          dispatch(loadGames());
     }, [dispatch]);
     // get the data back
     const {popular, newGames, upcoming, searched} = useSelector((state) => state.games); // we just extract the popular games, new games and upcoming games
     console.log(popular);
     return(
          <GameList>
               <AnimateSharedLayout type="crossfade">
                    <AnimatePresence> {/*We wrap the component we want to transition to*/}
                         { pathId && <GameDetail pathId={pathId}/> }
                    </AnimatePresence>
                    {searched.length ? (
                         <div className="searched">
                              <h2>Searched Games</h2>
                              <Games>
                                   {searched.map(game => (
                                        <Game 
                                             name={game.name} 
                                             released={game.released} 
                                             id={game.id}
                                             image={game.background_image}
                                             key={game.id}
                                        />
                                   ))}
                              </Games>
                         </div>
                    ) : ("")}
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
               </AnimateSharedLayout>
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


