// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { Link, useLoaderData, useLocation, useParams } from 'react-router';
import { Link, useLoaderData, useLocation } from 'react-router';

const PlantDetails = () => {
        //old method 
//         const {id}=useParams()
//         // console.log(id);
        
// const [plant,setPlant]=useState({})
//     useEffect(()=>{

//         // fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
//         // .then (res=>res.json())
//         // .then(data=>setPlant(data?.plants))

        
//         axios(`https://openapi.programming-hero.com/api/plant/${id}`)
        
//         .then(data=>setPlant(data.data.plants))

//     },[id])
    // console.log(plant);



     //******** 1st way ** */
  //  const {data}=useLoaderData();
    // console.log(data.plants);
    // const {name,image,description,price,category}=data.plants;
    
    // ************************************2nd way *************************************//
    const location=useLocation();
    console.log(location);
    const {name,image,description,price,category}=location?.state || [];
     
    return (
           <div className=" h-fit rounded-lg w-96 mx-auto   bg-base-100 shadow-sm lg:p-3 p-4">
    

         <figure className=' rounded-xl  overflow-hidden'>
                <img className="aspect-3/2   object-cover"

                 src={image} alt="image" />
              </figure>
            <div className=" mt-1">
                <h2  className="card-title text-base font-semibold text-[#1F2937]">{name}</h2>
                <p className="text-[12px] font-normal text-[#1F2937] line-clamp-2 lg:line-clamp-3">{description}</p>
                <div className="flex justify-between items-center py-2 " >
                 <p  className=" py-2 px-2 text-[#15803D] bg-[#DCFCE7] rounded-full text-xs">{category}</p>
               <div className='flex '>
                 <p className="text-sm font-semibold text-[#1F2937]">৳</p>
                <p className="text-sm font-semibold text-[#1F2937]">{price}</p>
             </div>
             </div>
             <div>
                <Link to='/'  className='btn py-3'>Back home</Link>
             </div>
         
      </div>
    </div>
    );
};

export default PlantDetails;