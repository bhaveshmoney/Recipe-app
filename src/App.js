import React,{useState,useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Recipe from './Recipe';

function App() {
  const API_ID='2e2cafb7';
  const API_KEY='9ef5387daf5933ca81b185ecad42cbbb';
  const [recipe,setRecipe] = useState([]);
  const [search,setSearch] =useState('');
  useEffect( ()=>{
     getRecipe(); 

  },[]);
  const getRecipe = async () =>{
    const response = await axios.get(`https://api.edamam.com/search?q=chicken&app_id=${API_ID}&app_key=${API_KEY}`);
    setRecipe(response.data.hits);
    console.log(response);
  };
  return (
    <>
    <form>
      <input type="text" value={search} onChange={} />
      <button type='button'>Search</button>
    </form>
    { recipe.map( (recipe) =>(
      <Recipe
       title={recipe.recipe.label}
       calories={recipe.recipe.calories}
       image={recipe.recipe.image}
       ingredients={recipe.recipe.ingredients}
       />
    ) )}
    
    </>
  );
}

export default App;
