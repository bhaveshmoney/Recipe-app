import React,{useState,useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Recipe from './Recipe';



function App() {
  const API_ID='2e2cafb7';
  const API_KEY='9ef5387daf5933ca81b185ecad42cbbb';
  const [recipe,setRecipe] = useState([]);
  const [search, setSearch] =useState('');
  const [query, setQuery] = useState('chiken');
  useEffect( ()=>{
     getRecipe(); 

  },[query]);
  const getRecipe = async () =>{
    const response = await axios.get(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`);
    setRecipe(response.data.hits);
    console.log(response);
  };
  const updateSearch = (e) =>{
    setSearch(e.target.value);
    
  }
  const updateQuery = (e) =>{
    e.preventDefault();
    setQuery(search);
  }
  return (
    < >
    <div className="App">
    
    <form onSubmit={updateQuery}>
      <input type="text" value={search} onChange={updateSearch} />
      <button type='submit'>Search</button>
    </form>
    
    { recipe.map( (recipe) =>(
      <Recipe
       title={recipe.recipe.label}
       calories={recipe.recipe.calories}
       image={recipe.recipe.image}
       ingredients={recipe.recipe.ingredients}
       />
    ) )}
    </div>
    
    </>
  );
}

export default App;
