import React, { useEffect, useState } from "react";
import Card from "./Card";

const Posts = () => {
  const [todo, setTodo] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((json) => setTodo(json.results))
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container">
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : (
        todo.map((item) => <Card {...item} key={item.id} />)
      )}
    </div>
  );
};
export default Posts;
