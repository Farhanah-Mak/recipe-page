'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
function Header() {
  const path = usePathname().split('/');
  const currentPlaceName = path[2]
  const recipeId= path[3]
  // console.log(currentPlaceName);
  //  console.log(recipeId)
  //console.log(path)
  return (
    <div className="py-5 px-10 bg-teal-50 flex justify-between items-center">
      <Link href="/">
        <h1 className="text-cyan-700 font-bold text-5xl">Recipes of the World</h1>
      </Link>
      {path && currentPlaceName && (
        <Link
          className="border-solid border-2 border-cyan-700 rounded py-1 px-2 text-white bg-cyan-700 hover:bg-cyan-600"
          href={recipeId ? `/types/${currentPlaceName}` : "/types"}
        >
          Back to {recipeId ? `${currentPlaceName} recipes` : "recipes"}
        </Link>
      )}
    </div>
  );
}

export default Header