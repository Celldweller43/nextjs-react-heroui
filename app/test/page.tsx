"use client";

import { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@heroui/react";

type UserType = {
  id: string;
  name: string;
  age: number;
  email: string;
};

const Test = () => {
  const [userData, setUserData] = useState<UserType[]>([]);

  useEffect(() => {
    fetch("/api/userdata")
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
              // <div
              //   key={ndx}
              //   style={{
              //     display: "flex",
              //     flexDirection: "column",
              //     alignItems: "center",
              //     justifyContent: "center",
              //   }}
              // >
              //   <div>ID: {user.id}</div>
              //   <div>Name: {user.name}</div>
              //   <div>Age: {user.age}</div>
              //   <div>Email: {user.email}</div>
              // </div>
              <Table hideHeader>
                <TableHeader>
                  <TableColumn>ID</TableColumn>
                  <TableColumn>Name</TableColumn>
                  <TableColumn>Age</TableColumn>
                  <TableColumn>Email</TableColumn>
                </TableHeader>
                <TableBody>
                  <TableRow key={ndx}>
                    <TableCell>{user.id}</TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.age}</TableCell>
                    <TableCell>{user.email}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Test;
