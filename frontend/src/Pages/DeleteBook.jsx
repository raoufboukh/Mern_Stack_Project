import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useSnackbar } from "notistack";

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const handleSaveBook = () => {
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book deleted successfully", { variant: "success" });
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        enqueueSnackbar("Failed to delete book", { variant: "error" });
        console.log(err);
      });
  };
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Delete Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
          <div className="my-4">
            <p className="text-center">
              Are you sure you want to delete this book?
            </p>
            <button
              onClick={handleSaveBook}
              className="bg-red-500 text-white px-4 py-2 rounded-md mx-auto mt-4 w-fit block"
            >
              Delete Book
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteBook;
