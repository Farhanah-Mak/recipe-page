
import React from 'react'
import RecipeList from '@/components/RecipeList'

const fetchRecipes = async (type) => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${type}`
    )
    const data = await res.json()
   // console.log(data.meals)
    return data.meals
}

async function page({ params }) {
    //console.log(params)
    const recipes = await fetchRecipes(params.type)
  return (
    <>
          <RecipeList recipes={recipes} type={params.type} />  
    </>
  );
}

export default page