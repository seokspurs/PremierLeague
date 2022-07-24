import './index.css';
import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
function MainPageComponent(){
    const [player, setPlayer] = React.useState([]);
    React.useEffect(()=>{
        axios.get("https://d28e8bab-20bb-4207-9f64-e7c8d5bacb25.mock.pstmn.io/player").then((result)=>{
            const player = result.data.player;
            setPlayer(player);
        }).catch((error)=>{
            console.error(error);
        });
    },[]);
   
    return (
        <div>
             <div id="header">
        <div id="header-area">
            <img src="images/Premier_League-Logo.png" alt="toticon"/>
        </div>
    </div>
    <div id="body">
        <div id="banner">
            <img src="images/banner3.jpg" alt="banner"/>
        </div>
        <div id="team-list">
            {
                player.map(function(player,index){
                        return (<div class="team-card">
                    <Link className='team-link' to={`/team/${index}`}>
                    <img id="team-img" src={player.imageUrl}/>
                    </Link>
                </div>)
                })
            }
        </div>
    </div>
    <div id="footer"></div>
        </div>
    )
}
export default MainPageComponent;