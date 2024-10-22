import React from 'react';
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import HeroSection from "../Components/HeroSection/Herosection";
import Link from "next/link";


function Servicespage() {

  
  return (
    <div>
        

      <Header></Header>

     
     
     
      <Link href="/ServicesPage/services-development"  className='bg-green-300 underline text-center decoration-green-600 ease-in-out hover:text-blue-800 rounded-full font-extrabold p-2 m-4 border-spacing-4 border-cyan-600 border-4 bg-gradient-to-tr '>services-development</Link>


      <h2 className="bg-teal-500 text-center italic underline decoration-fuchsia-500 text-blue-800 rounded-full font-extrabold p-4 m-4 border-spacing-4 border-pink-500 border-4 bg-gradient-to-tr ">This is our magnified yet elegant Services page with brief orientation of our genuine services throughout.</h2>

      <HeroSection></HeroSection>



      







      <Footer></Footer>
    </div>
  )
}


export default Servicespage;