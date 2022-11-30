import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Home = () => {

  const APP_ID = '9c110ebb';
  const APP_KEY = '733f529f85c71536e07d8179288e8aa4';
  const [query, setQuery] = useState('egg');
  const [selectedMeal, setSelectedMeal] = useState('breakfast');

const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;

const getData = async () => {
  const {data} = await axios(url);
  console.log(data);
}

useEffect(() => {
  getData();
}, [])


  return (
    <div>
      Home
    </div>
  )
}

export default Home
