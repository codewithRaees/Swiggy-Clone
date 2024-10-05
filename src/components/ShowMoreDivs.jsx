import React, { useState } from 'react';

const ShowMoreDivs = () => {
  // Example data: An array of 100 divs with some content
  const divs = Array.from({ length: 100 }, (_, index) => (
    <div key={index} className="p-4 bg-gray-200 my-2">
      Div content {index + 1}
    </div>
  ));

  // State to track how many divs to show
  const [showCount, setShowCount] = useState(3);

  // Function to toggle between showing more or fewer divs
  const toggleShowMore = () => {
    setShowCount(showCount === 3 ? divs.length : 3); // Toggle between showing all and showing 3
  };

  return (
    <div>
      {/* Show only the first `showCount` number of divs */}
      {divs.slice(0, showCount)}

      {/* Button to toggle between Show More / Show Less */}
      <button
        onClick={toggleShowMore}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        {showCount === 3 ? 'Show More' : 'Show Less'}
      </button>
    </div>
  );
};

export default ShowMoreDivs;
