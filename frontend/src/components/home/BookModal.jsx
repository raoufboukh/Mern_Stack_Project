/* eslint-disable react/prop-types */
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const BookModal = ({ book, onClose }) => {
  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 flex justify-center items-center  z-50"
      onClick={onClose}
    >
      <div
        className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        <AiOutlineClose
          className="absolute top-6 right-6 text-3xl text-red-600 cursor-pointer"
          onClick={onClose}
        />
        <h2 className="w-fit px-4 py-1 bg-red-300 rounded-lg">
          {book.publishYear}
        </h2>
        <h4 className="my-2 text-gray-500">{book._id}</h4>
        <div className="flex justify-start items-center gap-x-2">
          <PiBookOpenTextLight className="text-2xl text-red-300" />
          <h2 className="my-1">{book.title}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <BiUserCircle className="text-2xl text-red-300" />
          <h2 className="my-1">{book.author}</h2>
        </div>
        <p className="mt-4">Show Anything you want</p>
        <p className="my-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
          sequi tenetur. Delectus illum quasi assumenda beatae eum, soluta et
          rem molestias eveniet eaque modi reiciendis hic deserunt, commodi,
          doloribus quos.
        </p>
      </div>
    </div>
  );
};

export default BookModal;
