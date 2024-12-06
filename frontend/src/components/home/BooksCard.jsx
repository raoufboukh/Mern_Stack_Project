/* eslint-disable react/prop-types */

import BookSingleCard from "./BookSingleCard";

const BooksCard = ({ books }) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
      {books.map((book) => (
        <BookSingleCard key={book._id} book={book} />
      ))}
    </div>
  );
};

export default BooksCard;
