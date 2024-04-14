import React from "react";

const topbutton = ({ setQuery }) => {
  const cities = [
    {
      id: 1,
      title: "Lucknow",
    },
    {
      id: 2,
      title: "Delhi",
    },
    {
      id: 3,
      title: "Mumbai",
    },
    {
      id: 4,
      title: "Noida",
    },
    {
      id: 5,
      title: "Gurugram",
    },
  ];
  return (
    <div className="flex item-center justify-center  justify-around my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-lg font-medium "
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
};

export default topbutton;
