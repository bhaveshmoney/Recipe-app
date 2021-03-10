import React from 'react'
import './Recipe.css'

const Recipe = ({title,calories,image,ingredients}) => {
    return (
        <>
        
        <div className="card">
         <p>{title}</p>
         <p>{calories}</p>
         <img src={image} alt="" />
         <ol>
         <button type="button" className="collapsible" >Ingredient</button>
         <div className="content">
         {ingredients.map((ingredient) => (
            
               <li>{ingredient.text}</li>  
                 
             ))}
             </div>
         </ol>
         </div>
             
        </>
    )
}

export default Recipe
