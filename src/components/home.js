import "./styles/home.css";
import cactus from "./images/cactus.svg";
import cactus2 from "./images/cactus2.svg";
import mountain from "./images/mountain.svg"
import light from "./images/light.svg";
import light2 from "./images/light2.svg";
import sun from './images/sun.svg';
import sun2 from './images/sun2.svg';
import sun3 from './images/sun-background.svg';
import cloud1 from './images/cloud1.svg';
import cloud2 from './images/cloud2.svg';
import cloud3 from './images/cloud3.svg';
import cloud4 from './images/cloud4.svg';
import cloud5 from './images/cloud5.svg';
import cloud6 from './images/cloud6.svg';
import cloud7 from './images/cloud7.svg';
import senja from './images/senja.svg';
import { useEffect } from "react";

export const Home = () => {

    useEffect(() => {
        let navbar = document.querySelector(".navbar");
        navbar.classList.remove("visible");
    }, []);

    return (
        <div className="home">
            <img src={cactus} alt="cactus" className="cactus" id="mainImages" />
            <img src={cactus2} alt="cactus" className="cactus2" id="mainImages" />
            <img src={mountain} alt="mountain" className="mountain" id="mainImages" />
            <img src={light} alt="light" className="light" id="mainImages" />
            <img src={light2} alt="light" className="light2" id="mainImages" />
            <img src={sun} alt="sun" className="sun" />
            <img src={sun2} alt="sun" className="sun" />
            <img src={sun3} alt="sun" className="sun" />
            <img src={cloud1} alt="cloud" className="cloud1" id="clouds" />
            <img src={cloud2} alt="cloud" className="cloud2" id="clouds" />
            <img src={cloud3} alt="cloud" className="cloud3" id="clouds" />
            <img src={cloud4} alt="cloud" className="cloud4" id="clouds" />
            <img src={cloud5} alt="cloud" className="cloud5" id="clouds" />
            <img src={cloud6} alt="cloud" className="cloud6" id="clouds" />
            <img src={cloud7} alt="cloud" className="cloud7" id="clouds" />
            <img src={senja} alt="senja" className="senja" />
        </div>
    )
}