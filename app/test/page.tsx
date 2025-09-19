"use client";

import { useEffect, useState } from "react";

type UserType = {
  id: string;
  name: string;
  age: number;
  email: string;
};

const Test = () => {
  const [userData, setUserData] = useState<UserType[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/userdata")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserData([data]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      Test Page
      <br />
      <br />
      <div>
        <div>
          {Array.isArray(userData) &&
            userData.map((user: UserType, ndx: number) => (
              <div
                key={ndx}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div>ID: {user.id}</div>
                <div>Name: {user.name}</div>
                <div>Age: {user.age}</div>
                <div>Email: {user.email}</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Test;
