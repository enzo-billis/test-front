import React, { useState, useEffect } from "react";
import styled from "styled-components";
import UserCard from "../components/UserCard";
import { getUsers } from "../services/users";

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
      setUsers(await getUsers());
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
      {users.map((user, index) => (
        <UserCard key={index} user={user} />
      ))}
    </FlexContainer>
  );
};

export default DisplayUsers;
