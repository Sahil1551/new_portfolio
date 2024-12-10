import React from 'react';

const Cards = (props) => {
  return (
    <div className="bg-white p-6 shadow-lg rounded-md flex flex-col items-center text-center h-full">
      <img src={props.images} alt={props.title} className="w-40 h-40 object-cover mb-4 rounded-full" />
      <h2 className="text-lg font-semibold text-gray-700">{props.title}</h2>
      <p className="text-sm text-gray-500 mb-4">{props.Description}</p>
      <a href={props.href} className="bg-purple-600 text-white py-2 px-4 rounded transition-colors hover:bg-purple-700">
        View
      </a>
    </div>
  );
};

export default Cards;