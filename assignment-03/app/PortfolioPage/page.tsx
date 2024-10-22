import React from 'react';
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import HeroSection from "../Components/HeroSection/Herosection";



function Productpage() {

  
  return (
    <div>

      <Header></Header>



      
        <h2 className="bg-sky-800 text-center italic underline decoration-sky-500 text-fuchsia-500 rounded-full font-extrabold p-4 m-4 border-spacing-4 border-yellow-600 border-4 bg-gradient-to-tr "> Welcome! to our sophisticated yet interesting nextjs assignments portfolio page.</h2>
        <p className="bg-yellow-200 text-center italic underline decoration-green-600 text-blue-600 rounded-full font-extrabold p-4 m-4 border-spacing-4 border-orange-400 border-4 bg-gradient-to-tr ">It includes basic web app development procedure using tailwind CSS and nextjs framework to achieve embellishing outcomes and future perspectives under the divine guidance of beloved Sir Hamza Alvi.  </p>

        <HeroSection></HeroSection>












        <Footer></Footer>
        
    </div>
  )
}



export default Productpage;