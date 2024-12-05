import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import ShowBook from "./Pages/ShowBook";
import EditBook from "./Pages/EditBook";
import DeleteBook from "./Pages/DeleteBook";
import CreateBook from "./Pages/CreateBook";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/details/:id" element={<ShowBook />} />
      <Route path="/books/edit/:id" element={<EditBook />} />
      <Route path="/books/delete/:id" element={<DeleteBook />} />
      <Route path="/books/create" element={<CreateBook />} />
    </Routes>
  );
};

export default App;
