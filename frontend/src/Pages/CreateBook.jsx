import { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSnackbar } from "notistack";

const CreateBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .post("http://localhost:5555/books", data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book created successfully", { variant: "success" });
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        enqueueSnackbar("Failed to create book", { variant: "error" });
        console.log(err);
      });
  };
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Create Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
          <div className="my-4">
            <label htmlFor="tit">Title</label>
            <input
              type="text"
              id="tit"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full"
            />
            <label htmlFor="aut">Author</label>
            <input
              type="text"
              id="aut"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full"
            />
            <label htmlFor="pub">PublishYear</label>
            <input
              type="number"
              id="pub"
              value={publishYear}
              onChange={(e) => setPublishYear(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full"
            />
            <button className="p-2 bg-sky-300 m-8" onClick={handleSaveBook}>
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateBook;
