import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Form, FormGroup, Label, Input } from "reactstrap";
import Header1 from "../component/Header1";
import Footer from "../component/Footer";
import MovieEdit from "../pages/MovieEdit";

const ProtectedMovieEdit = ({ isLoggedIn, updateMovie, movies, deleteMovie }) => {
  const { id } = useParams();
  let currentMovie = movies?.find((movie) => movie.id === +id);

  const [editMovie, setEditMovie] = useState({
    title: currentMovie?.title || "",
    image: currentMovie?.image || "",
    trailer: currentMovie?.trailer || "",
    rating: currentMovie?.rating || "",
    description: currentMovie?.description || "",
    platform: currentMovie?.platform || "",
    genre: currentMovie?.genre || "",
  });

  const handleChange = (e) => {
    setEditMovie({ ...editMovie, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleUpdate = () => {
    updateMovie(currentMovie.id, editMovie);
    navigate("/movieindex");
  };

  const handleDelete = () => {
    deleteMovie(currentMovie.id);
    navigate("/movieindex");
  };

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login'); // Redirect to the login page if not authenticated
    }
  }, [isLoggedIn]);

  return (
    <>
      <Header1 />
      <h1>Protected Movie Edit Page</h1>
      <Form>
        <FormGroup>
          <Label for="title">Title</Label>
          <Input
            id="title"
            name="title"
            type="text"
            onChange={handleChange}
            value={editMovie.title}
          />
        </FormGroup>
        <FormGroup>
          <Label for="image">Image URL</Label>
          <Input
            id="image"
            name="image"
            type="text"
            onChange={handleChange}
            value={editMovie.image}
          />
        </FormGroup>
        <FormGroup>
          <Label for="trailer">Trailer URL</Label>
          <Input
            id="trailer"
            name="trailer"
            type="text"
            onChange={handleChange}
            value={editMovie.trailer}
          />
        </FormGroup>
        <FormGroup>
          <Label for="rating">Rating</Label>
          <Input
            id="rating"
            name="rating"
            type="text"
            onChange={handleChange}
            value={editMovie.rating}
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">Description</Label>
          <Input
            id="description"
            name="description"
            type="text"
            onChange={handleChange}
            value={editMovie.description}
          />
        </FormGroup>
        <FormGroup>
          <Label for="platform">Platform</Label>
          <Input
            id="platform"
            name="platform"
            type="text"
            onChange={handleChange}
            value={editMovie.platform}
          />
        </FormGroup>
        <FormGroup>
          <Label for="genre">Genre</Label>
          <Input
            id="genre"
            name="genre"
            type="text"
            onChange={handleChange}
            value={editMovie.genre}
          />
        </FormGroup>
        <button name="update" onClick={handleUpdate}>
          Update
        </button>
        <button name="delete" onClick={handleDelete}>
          Delete
        </button>
      </Form>
      <Footer />
    </>
  );
};

export default ProtectedMovieEdit;
