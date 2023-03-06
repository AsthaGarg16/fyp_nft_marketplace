import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

function MyCollection() {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        My Collections
      </h1>
      <button
        className="p-5 bg-indigo-600 rounded-lg text-2xl font-semibold mb-10 text-white"
        onClick={() => {
          navigate("/create-collection");
        }}
      >
        Create Collection
      </button>
      {/* display table */}
    </div>
  );
}

export default MyCollection;
