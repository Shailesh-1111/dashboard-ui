import React from "react";
import { useNavigate } from 'react-router-dom';
import './Home.scss';
import Vector from '../../assets/icons/light/Vector.svg';


const Home = () =>{
    const navigate = useNavigate();
    return(
        <div className="background">

            <div className="shadow-purple"></div>
            <div className="shadow-green"></div>
            <div className="vector"><img src={Vector} width={540} height={540}/></div>
            <div className="btn" onClick={() => navigate('/dashboard?dash-e-commerce')}>
                GO TO ASSIGNMENT
            </div>

            <div className="assignment">
                UI  DEVELOPER ASSIGNMENT
            </div>

            <div className="company">
                <div>COMPANY</div>
                <div>Juspay Technologies Private Limited</div>
            </div>


        </div>
    )
}


export default Home;