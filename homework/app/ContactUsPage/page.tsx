import React from 'react';
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import HeroSection from "../Components/HeroSection/Herosection";
import Link from "next/link";


const Contactpage = () => {

  
  return (
    <div> 
      <Header></Header>



     
      
      <Link href="/ContactUsPage/contact-development"  className='bg-yellow-500 ease-in-out underline text-center decoration-green-600 hover:text-blue-800 rounded-full font-extrabold p-2 m-4 border-spacing-4 border-cyan-600 border-4 bg-gradient-to-tr '>    contact-development</Link>



        
        
        
      <h3 className="bg-orange-500 text-center text-pretty italic underline decoration-teal-600 text-blue-800 rounded-full font-extrabold p-4 m-4 border-spacing-4 border-cyan-300 border-4 bg-gradient-to-tr "> This is our detail oriented contact page.Contact us for more information.</h3>

       
       
       
       
        

      <HeroSection></HeroSection>



        







      <Footer></Footer>
   </div>

  
  )
}





export default Contactpage;