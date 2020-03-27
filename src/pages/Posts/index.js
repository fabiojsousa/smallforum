import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

import api from "../../services/api";
import Loading from "../../components/Loading";

export default function Posts() {
  const [allPosts, setAllPosts] = useState([]);
  const [lading, setLoading] = useState(true);

  useEffect(() => {
    async function getAllPosts() {
      const { data } = await api.get("posts");

      setAllPosts(data);
      setLoading(false);
    }

    getAllPosts();
  }, []);

  return (
    <Container>
      {lading ? (
        <Loading />
      ) : (
        <>
          <h2>All Posts</h2>
          {allPosts.map(p => (
            <div className="posts" key={p.id}>
              <p>
                <Link to={`/posts/${p.id}`}>{p.title}</Link>
              </p>
              <small>
                Started by{" "}
                <Link to={`users/${p.userId}`}>user id {p.userId}</Link>
              </small>
            </div>
          ))}
        </>
      )}
    </Container>
  );
}
