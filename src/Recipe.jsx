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
         {ingredients.map((ingredient) => (
                 <li>{ingredient.text}</li>
             ))}
            
         </ol>
         </div>
             
        </>
    )
}

export default Recipe
