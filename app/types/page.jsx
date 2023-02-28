import React from 'react'
import Link from 'next/link';

const fetchRecipePlaces = async () => {
    const res = await fetch(
      "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
    );
    const data = await res.json()
    const response = data.meals.map(item => item.strArea)
    return response
}

async function page() {
  const places= await fetchRecipePlaces()
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 p-5">
      {places.map((place, index) => (
        <Link
          key={index}
          href={`/types/${place}`}
          className="bg-teal-50 px-4 py-8 text-center rounded-lg shadow-xl-gray-700 cursor-pointer font-bold hover:bg-cyan-700 hover:text-white"
        >
          {place}
        </Link>
      ))}
    </div>
  );
}

export default page