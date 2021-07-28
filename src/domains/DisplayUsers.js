import React, { useState, useEffect } from "react";
import styled from "styled-components";
import UserCard from "../components/UserCard";

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-between;
`;

const DisplayUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const users = await response.json();
      setUsers(users);
    };
    fetchUsers();
  }, [setUsers]);

  if (!users || !users.length) {
    return (
      <>This is a very ugly loading... But I will never be displayed so...</>
    );
  }

  return (
    <FlexContainer>
      {users.map((user) => (
        <UserCard user={user} />
      ))}
    </FlexContainer>
  );
};

export default DisplayUsers;
