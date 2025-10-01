// import React, {  useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import PlantsCard from '../Components/PlantsCard/PlantsCard';

const Home = () => {
    //old method 
// const [plants,setPlants]=useState([])
//     useEffect(()=>{
//         fetch(`https://openapi.programming-hero.com/api/plants`)
//         .then (res=>res.json())
//         .then(data=>setPlants(data.plants))

//     })

const plantsData=useLoaderData();
const plants=plantsData?.plants
console.log(plants)
console.log(plantsData);

    return (
        <div className='lg:p-10 p-5 grid md:grid-cols-3 col-span-3 gap-5 grid-cols-1  '>
           {plants?.map(plant=><PlantsCard key={plant.id} plant={plant}></PlantsCard>)}
        </div>
    );
};

export default Home;