import React from 'react';
import vg from "../assets/2.webp";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechStar</h1>
          <p>Solution to all your prblems</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse illum
            dolor obcaecati. Esse perferendis itaque corrupti nesciunt
            asperiores veritatis recusandae, alias molestias incidunt sit aut
            quasi atque et, voluptatem velit!
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>Who we are</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            incidunt, iste vero cupiditate omnis doloribus ratione in rerum
            maiores libero numquam quis, veniam id magni! Quidem voluptatibus
            deserunt aliquid tenetur.
          </p>
        </div>
      </div>
    <div className="home4" id="brands">
      <div>
        <h1>Brands</h1>
        <article>
          <div style={{animationDelay:"0.3s"}}>
            <AiFillGoogleCircle/>
            <p>Google</p>

          </div>
          <div style={{animationDelay:"0.5s"}}>
            <AiFillAmazonCircle/>
            <p>Amazon</p>

          </div>
          <div style={{animationDelay:"0.7s"}}>
            <AiFillYoutube/>
            <p>Youtube</p>

          </div>
          <div style={{animationDelay:"1s"}}>
            <AiFillInstagram/>
            <p>Instagram</p>

          </div>
        </article>
      </div>
    </div>
    </>
  );
}

export default Home