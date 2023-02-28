import React from 'react'
import SingleRecipe from '@/components/SingleRecipe'

const fetchRecipeDetail = async (id) => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    )
    const data = await res.json()
    return data.meals[0]
}

async function RecipeDetail({ params }) {
    const recipe = await fetchRecipeDetail(params.id)
   // console.log(recipe)
  return (
      <div>
          {recipe && <SingleRecipe recipe={recipe} />}
    </div>
  )
}

export default RecipeDetail