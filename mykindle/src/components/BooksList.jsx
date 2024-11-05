import React, { useState, useEffect } from 'react';

export default function BooksList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Using fetch with .then() and .catch() to handle promises
    fetch('https://api.itbook.store/1.0/search/mongodb')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData.books); // Access the 'books' property from the response
        setLoading(false); // End loading after the fetch is complete
      })
      .catch((error) => {
        setError(error.message); // Set error if something goes wrong
        setLoading(false); // Also end loading on error
      });
  }, []); // Empty dependency array ensures this runs only once after component mounts

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='books'>
      <div className="overview">
        <h1>Book Overview</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <p>Lorem Ipsum has been the industry's standard dummy text ever</p>
      </div>
      <div className="book_list">
        {data.map((b) => (
          <div className="book_data" key={b.isbn13}>
            <img src={b.image} alt="" />
            <span>{b.title}</span>
            <p>{b.subtitle}</p>
            <span>{b.price}</span>
            <a href={b.url}>Overview this book</a>
          </div>
        ))}
      </div>
    </div>
  );
}
