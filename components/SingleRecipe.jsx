import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { FaCaretSquareRight } from "react-icons/fa";

function SingleRecipe({ recipe }) {
    
    //filter(Boolean) removes falsy values
    const ingredients = Object.keys(recipe).filter((key) => key.indexOf("Ingredient") > 0).map((ing) => recipe[ing]).filter(Boolean)
    //console.log(ingredients)
  return (
    <div className="p-5 grid grid-col-1 md:grid-cols-2 md:gap-5 lg:place-items-center lg:items-start">
      <div>
        <h1 className="text-3xl text-cyan-700 font-bold py-5">
          {recipe.strMeal}
        </h1>
        <Image
          src={recipe.strMealThumb}
          width={500}
          height={100}
          alt="recipe-image"
        />
      </div>
      <div>
        <h1 className="font-bold py-5 text-cyan-700 text-xl">How to make</h1>
        <div className="flex flex-wrap">
          {ingredients.map((i) => (
            <p
              key={i}
              className="bg-cyan-700 text-white rounded mx-1 my-1 px-2 py-1"
            >
              {i}
            </p>
          ))}
        </div>
        <p className="my-5">{recipe.strInstructions}</p>
        {recipe.strYoutube && (
          <Link
            href={recipe.strYoutube}
            target="_blank"
            rel="noreferrer"
            className="font-bold py-5 text-cyan-700 text-xl cursor-pointer flex items-center gap-5"
          >
            Watch video <FaCaretSquareRight />
          </Link>
        )}
      </div>
    </div>
  );
}

export default SingleRecipe