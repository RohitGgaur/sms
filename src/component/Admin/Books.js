import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './book.css'; // Ensure you create and import a CSS file for styling

const Books = () => {
  const { category } = useParams();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        console.log("Fetching books for category:", category);
        const res = await axios.get(`http://localhost:8000/api/books/${category}`);
        console.log("API Response:", res.data);
        setBooks(res.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, [category]);

  return (
    <div className="books-grid">
      {books.map(item => (
        <div key={item._id} className="book-card">
          <figure>
            <img src={item.image} alt={item.name} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions flex justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-green-500 hover:text-white duration-200">
               <button type="button"style={{padding:"10px",border:"1px solid green",backgroundColor:"green",color:"white",borderRadius:"5px"}}>Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Books;
