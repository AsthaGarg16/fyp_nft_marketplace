import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

function MyCollection() {
  const navigate = useNavigate();

  return (
    <div className="m-5">
      <h1 className="mb-4 text-5xl font-bold leading-none text-gray-900 md:text-3xl lg:text-5xl dark:text-white text-left">
        My Collections
      </h1>
      <button
        className="p-3 bg-indigo-600 rounded-lg text-2xl font-semibold mb-10 mt-5 text-white self-start"
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
