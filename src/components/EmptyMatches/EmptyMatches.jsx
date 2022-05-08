import React from "react";

export const EmptyMatches = ({ message }) => {
  return (
    <div className="w-screen min-h-screen flex flex-col justify-center items-center">
      <div className="w-96 h-96">
        <img
          className="w-full h-full"
          src="https://res.cloudinary.com/fueledup-ecom/image/upload/v1652032233/no%20match%20found.png"
        />
      </div>
      <p className="text-2xl font-bold">{message}</p>
    </div>
  );
};
