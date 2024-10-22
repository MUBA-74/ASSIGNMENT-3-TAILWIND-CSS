import React from 'react'
import Link from "next/link";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import HeroSection from "./Components/HeroSection/Herosection";


const NavBar = () => {

  return (
    <div>
      <Header></Header>
      <h1 className='bg-green-400 text-center decoration-green-600 hover:text-blue-800 rounded-full font-extrabold p-2 m-8 border-spacing-4 border-cyan-600 border-4 bg-gradient-to-tr italic underline '>WELCOME! TO AN AMAZING PROGRAMMING WEBAPP</h1> 
  
        
        
        <nav>
  
  
  
  <li>




<Link href="/" className='bg-yellow-500 text-center drop-shadow-2xl decoration-green-300 hover:text-blue-500 rounded-full font-extrabold p-2 m-8 border-spacing-4 underline ease-in-out border-x-pink-700 border-4 bg-gradient-to-tr  border-dashed underline-offset-2'>Homepage</Link>            
<Link href="/AboutUsPage" className='bg-orange-500  text-center drop-shadow-2xl border-dashed text-ellipsis decoration-green-600 hover:text-blue-800  rounded-full  ease-in-out font-extrabold p-2 m-8 border-spacing-4 border-cyan-600 border-4 bg-gradient-to-tr border=solid underline underline-offset-2' target="_blank">AboutUsPage</Link>                      
<Link href="/ContactUsPage" className='bg-pink-300  text-center drop-shadow-2xl  text-ellipsis ease-in-out decoration-gray-600 hover:text-cyan-800 rounded-full underline font-extrabold p-2 m-8 border-spacing-4 border-yellow-600 border-4 bg-gradient-to-tr border-dashed underline-offset-2'>ContactUsPage</Link>           
<Link href="/PortfolioPage" className='bg-blue-500  text-center text-ellipsis drop-shadow-2xl ease-in-out decoration-orange-600 hover:text-orange-800 rounded-full underline border-dashed font-extrabold p-2 m-8 border-spacing-4 border-cyan-300 border-4 bg-gradient-to-tr underline-offset-2 '>PortfolioPage</Link>                
<Link href="/ServicesPage" className='bg-green-300  text-center text-ellipsis drop-shadow-2xl ease-in-out border-dashed decoration-emerald-400 hover:text-teal-500 underline rounded-full font-extrabold p-2 m-8 border-spacing-4 border-emerald-900 border-4 bg-gradient-to-tr underline-offset-2 '>ServicesPage</Link>
           
           
           
                                                          
                                                          
                                                          
                                                              
 </li> 



 
 
 

  


        </nav>


        
      
      <div>






      





      <h1 className="bg-rose-400 text-center flex-grow float-start decoration-double decoration-emerald-300 text-blue-800  font-extrabold p-2 m-2 underline italic border-spacing-2 border-yellow-300 border-4 bg-gradient-to-tr ">This is our engaging and embellishing Home page. </h1>
      <p  className="bg-cyan-500 text-center flex-grow float-right stroke-width underline-offset-2 transition-colors decoration-teal-600 border-4 text-yellow-800 underline italic rounded-3xl font-extrabold p-2 m-2 border-spacing-2 border-violet-500 bg-gradient-to-tr ">Welcome! to our world full of knowledge and wisdom.</p>

     
     
     <HeroSection></HeroSection>

        
      </div>






      <Footer></Footer>
    </div>






  )
  
}


export default NavBar;

  
