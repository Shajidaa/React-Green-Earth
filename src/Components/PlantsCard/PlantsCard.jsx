import React from 'react';
import { Link, useNavigate, useNavigation } from 'react-router';

const PlantsCard = ({plant}) => {
    
    // console.log(plant);
    const {name,image,description,category,id,price}=plant

//  const viewDetails=()=>{
//     console.log("click");
    
//  }
  const navigate=useNavigate();
    return (
         <div className=" h-fit rounded-lg   bg-base-100 shadow-sm lg:p-3 p-4">
    

         <figure className=' rounded-xl w-full overflow-hidden'>
                <img className="aspect-3/2 w-full  object-cover"

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
          <div className="card-actions ">
            {/* 1st way  */}
          {/* <Link to={`/plantDetails/${id}` }    className="btn rounded-full w-full
          text-base text-white font-semibold bg-[#15803D] hover:bg-[#42ad6d]">View Details</Link> */}

          {/* 2nd way     state */}
          {/* <Link to={`/plantDetails/${id}` }   state={plant}
           className="btn rounded-full w-full
          text-base text-white font-semibold bg-[#15803D] hover:bg-[#42ad6d]">View Details</Link> */}

             {  /* 3rd way */}
          <button onClick={()=>navigate(`/plantDetails/${id}`,{state:plant} )} className="btn rounded-full w-full
          text-base text-white font-semibold bg-[#15803D] hover:bg-[#42ad6d]">View Details</button>
          </div>
      </div>
    </div>
    );
};

export default PlantsCard;