import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'

import { Container } from "./styles";

import api from "../../services/api";

export default function Posts() {
  const [allPosts, setAllPosts] = useState([]);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  function prevPage(){
    
  }
  function nextPage(){

  }

  useEffect(() => {
    async function getAllPosts() {
      const { data } = await api.get("posts");
      console.log(data.length);

      setAllPosts(allPosts);
    }

    getAllPosts();
  }, []);

  return (
    <Container>
      <h1>POSTS</h1>
      <header>
        <div>
          <span>Page 1 of 1</span>
          <button>PREVIOUS</button>
          <button>NEXT</button>
        </div>
      </header>

      {posts.map(p => (
        <div className="posts" key={p.id} body={p.body}>
          <strong>{p.title}</strong>
          <small>Started by <Link to="/">user id {p.userId}</Link></small>
        </div>
      ))}
    </Container>
  );
}
