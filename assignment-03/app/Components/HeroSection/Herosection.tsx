import Image from "next/image";

const HeroPage = () => {
  return (


    
    <div>

    
    
    
      

      {/* Hero Page Description */}
      <h1 className="bg-orange-500 text-center italic forced-color-adjust-auto decoration-green-600 text-yellow-200 rounded-full font-extrabold p-4 m-4 border-spacing-4 flex-auto border-yellow-600 border-4 bg-gradient-to-tr">
        This is a detail-oriented and comprehensive Hero Page.
      </h1> 

      <div className="flex justify-center items-center h-screen">
      <Image  src="/images/2.png" alt="Logo-image centered" width="500" height="500" className="text-amber-800 z-10 bg-teal-600 text-center  " /></div>

      <p className="bg-yellow-900 text-center italic underline decoration-amber-300 text-cyan-300 rounded-full font-extrabold p-4 m-4 border-spacing-4 border-8 flex-auto border-emerald-300 bg-gradient-to-tr">
        It includes a brief introduction and standardized portfolio of our services we offer worldwide, showcasing our vision and determination with our goal of providing 
        top-notch excellence and setting unprecedented benchmarks for others to follow. Also, it highlights major breakthroughs in this domain including our 
        <strong>1<sup>st</sup> position in the global arena awards</strong> held recently. Go through our website with a keen eye to look out for further prospects and achievements in this regard.
      </p>

      <div className="flex justify-center items-center h-screen">
      <Image  src="/images/1.png" alt="Programming-Concept Image background" width="500" height="500" className="text-amber-300 text-center bg-emerald-400 object-cover z-0"/>        
      </div>
       </div>
    
  );
  
}

export default HeroPage;
