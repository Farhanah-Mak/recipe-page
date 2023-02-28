import React from 'react'
import Image from "next/image";
import Link from 'next/link';

function RecipeList({recipes, type}) {
  return (
    <div className="grid grid-cols-1 p-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {recipes.map((recipe, index) => (
        <div
          key={index}
          className="p-5 border-solid border-2 border-cyan-700 m-2"
        >
          <div className="p-5">
            <Link href={`/types/${type}/${recipe.idMeal}`}>
              <h2 className="text-2xl font-bold text-center hover:text-cyan-700 curosr-pointer">
                {recipe.strMeal}
              </h2>
            </Link>
          </div>
          <Link href={`/types/${type}/${recipe.idMeal}`}>
            <Image
              src={`${recipe.strMealThumb}`}
              alt="recipe-img"
              width={500}
              height={500}
              className="cursor-pointer w-100"
            />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default RecipeList