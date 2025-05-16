import { useState } from 'react'
import "./app.css"
import SimplifiedSwapInterface from './swap'
import CryptoTradingFlow from './howwedo'
import Headroom from 'react-headroom'



 const Header = () => {

    
    return (
        <>
        <Headroom>
        <header className='  w-full bg-white'>
             <div className="header bg-[url('')] bg-cover bg-center h-screen  ">

            <div className="imgdivwithname text-black font-black w-[100px] flex flex-row   gap-2 items-center">

            <div className=" w-[30px]   ">
                <img  src="src\assets\Z (1).png" alt="" /> 
            </div>
            <div>
                Swap
            </div>

            </div>
            


            <div className="centerdiv text-[0.75rem] text-gray-500 font-bold">
            <div>
            <a href="#" class="hover:underline">Overview</a>
            </div>
            <div>
            <a href="#" class="hover:underline">How it works</a>
            </div>
            <div>
            <a href="#" class="hover:underline">Help</a>
            </div>
            <div>
            <a href="#" class="hover:underline">About</a>
            </div>

            

        </div>
        <div className=" w-[200px] ">
                <img  src="src\assets\Rectangle 34.png" alt="" /> 
            </div>
        </div>
        </header>

        </Headroom>


        
       

        
        <div class="bg-[rgba(235,236,248,1)] w-screen h-screen flex justify-around align-middle items-center ">

            <div className="left text-center">
                
                
                    <span class="text-violet-950 text-8xl font-normal font-['Jersey_10']">
                        Everyone’s 
                        <br/>
                    </span>
                    <span class="text-violet-600 text-8xl font-normal font-['Jersey_10']">
                            Favorite Z
                    </span>

                    <a href="">
                    <div className="w-[502px] h-6 justify-center  text-violet-950 text-[15px] font-semibold font-['Inter'] flex gap-2">
                        
                        The world’s First P2P exchange with “No-KYC”
                        <div className="omg flex items-center justify-center ">
                       
                            <img className='h-2'  src="src\assets\Vector.svg" alt="" />
                            </div>
                        
                    </div>
                    </a>
                    
                    
                   
                

            </div>
                
            <div className="right ">
                
                <SimplifiedSwapInterface/>
            </div>
        


        </div>

        <div className="center  w-screen bg-[rgba(235,236,248,1)]  h-screen flex flex-col align-middle items-center justify-around">
        
        <span class=" text-6xl font-normal font-['Jersey_10'] pt-10">
                           HOW WE DO 
                    </span>

                    <CryptoTradingFlow />


        

        </div>


        


        
        

        </>

       
        
        


        


    )
}

export default Header;
