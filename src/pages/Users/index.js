import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

import api from "../../services/api";
import { shortName } from "../../services/util";
import Loading from "../../components/Loading";

export default function Users() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getAllUsers() {
      const { data } = await api.get("users");
      setUsers(data);
      setLoading(false);
    }
    getAllUsers();
  }, []);

  return (
    <Container data={loading ? "notReady" : "ready"}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <h2>Users | Total: {users.length}</h2>
          <div>
            {users.map(u => (
              <div className="user" key={u.id}>
                <header>
                  <p>{u.name[0]}</p>
                  <p>{shortName(u.name)}</p>
                  <p>ID {u.id}</p>
                </header>

                <main>
                  <Link to={`/users/${u.id}`}>DETAILS</Link>
                </main>
              </div>
            ))}
          </div>
        </>
      )}
    </Container>
  );
}
