import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

import api from "../../services/api";
import { shortName } from "../../services/util";
import Loading from "../../components/Loading";

export default function UserProfile({ match }) {
  const [user, setUser] = useState();

  useEffect(() => {
    async function getUserData() {
      const { data } = await api.get(`/users/${match.params.id}`);
      setUser(data);
    }

    getUserData();
  }, [match.params.id]);

  return (
    <Container>
      {!user ? (
        <Loading />
      ) : (
        <div className="user">
          <header>
            <p>{user.name[0]}</p>
            <p>{shortName(user.name)}</p>
            <p>ID {user.id}</p>
          </header>

          <main>
            <div className="basic">
              <h3>Personal Informations</h3>
              <dl>
                <div>
                  <dt>Name</dt>
                  <dd>{user.name}</dd>
                </div>
                <div>
                  <dt>Email</dt>
                  <dd>{user.email}</dd>
                </div>
                <div>
                  <dt>Phone</dt>
                  <dd>{user.phone}</dd>
                </div>
                <div>
                  <dt>Website</dt>
                  <dd>{user.website}</dd>
                </div>
              </dl>
            </div>
            <div className="address">
              <h3>Address</h3>
              <dl>
                <div>
                  <dt>Street</dt>
                  <dd>{user.address.street}</dd>
                </div>
                <div>
                  <dt>Suite</dt>
                  <dd>{user.address.suite}</dd>
                </div>
                <div>
                  <dt>City</dt>
                  <dd>{user.address.city}</dd>
                </div>
                <div>
                  <dt>Zipcode</dt>
                  <dd>{user.address.zipcode}</dd>
                </div>
                <div>
                  <dt>Geo</dt>
                  <dd>Lat. {user.address.geo.lat}</dd>
                  <dd>Lng. {user.address.geo.lng}</dd>
                </div>
              </dl>
            </div>
            <div className="company">
              <h3>Company</h3>
              <dl>
                <div>
                  <dt>Name</dt>
                  <dd>{user.company.name}</dd>
                </div>
                <div>
                  <dt>Catch Phrase</dt>
                  <dd>{user.company.catchPhrase}</dd>
                </div>
                <div>
                  <dt>BS</dt>
                  <dd>{user.company.bs}</dd>
                </div>
              </dl>
            </div>
          </main>
        </div>
      )}
    </Container>
  );
}
