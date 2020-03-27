import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";
import api from "../../services/api";
import Loading from "../../components/Loading";

export default function Comments({ match }) {
  const [lading, setLoading] = useState(true);
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function getPostData() {
      const { data: postData } = await api.get(`posts/${match.params.id}`);
      const { data: commentsData } = await api.get(
        `posts/${match.params.id}/comments`
      );

      setPost(postData);
      setComments(commentsData);
      setLoading(false);
    }

    getPostData();
  }, [match.params.id]);

  return (
    <Container>
      {lading ? (
        <Loading />
      ) : (
        <div>
          <header>
            <strong>{post.title}</strong>
          </header>

          <div className="question">
            <p>{post.body}</p>
            <p>
              <small>
                Asked by{" "}
                <Link to={`/users/${post.userId}`}>user id {post.userId}</Link>
              </small>
            </p>
          </div>

          <div className="answers">
            <p>{comments.length} Answers</p>

            {comments.map(c => (
              <div key={c.id}>
                <p>{c.body}</p>

                <div>
                  <div>
                    <small>Answered by</small>
                    <p>
                      <small>
                        <label>Name: </label>
                      </small>
                      <small>{c.name}</small>
                    </p>
                    <p>
                      <small>
                        <label>Email: </label>
                      </small>
                      <small>{c.email}</small>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </Container>
  );
}
