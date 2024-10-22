import React from 'react';
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import HeroSection from "../Components/HeroSection/Herosection";


const Aboutpage = () => {

  
  return (
    <div>
      <Header></Header>




      
      <h1 className="bg-teal-500 text-center italic underline decoration-orange-600 text-yellow-300 rounded-full font-extrabold p-8 m-4 border-spacing-4 border-x-fuchsia-700 border-4 bg-gradient-to-tr ">This is our About page filled with diverse information about us and our key authentic services worldwide.</h1>

      <HeroSection></HeroSection>




      <Footer></Footer>
    </div>
  )


  
}







export default Aboutpage;