import React from "react";
import styled from "styled-components";

const CardFlexContainer = styled.div`
  width: 30%;
  color: black;
  background-color: #d5f3e5;
  border-radius: 1rem;
  @media (max-width: 960px) {
    width: 45%;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const CardHeader = styled.div`
  display: flex;
  background-color: #77d1a6;
  padding: 0.5rem;
  border-radius: 1rem 1rem 0 0;
  justify-content: space-between;
`;

const CardBody = styled.div`
  display: flex;
  padding: 0.5rem;
  flex-direction: column;
  text-align: center;
`;

const CardFooter = styled.div`
  display: flex;
  padding: 0.5rem;
  background-color: #77d1a6;
  border-radius: 0 0 1rem 1rem;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Link = styled.a`
  width: 100%;
  text-decoration: none;
  color: #ec6a6a;
  &:hover {
    text-decoration: underline;
  }
`;

const Separator = styled.hr`
  border: none;
  border-bottom: 0.125rem solid #ec6a6a;
  width: 50%;
  margin: 1rem auto;
`;

const ItalicText = styled.span`
  font-style: italic;
`;

const UserCard = ({ user }) => {
  return (
    <CardFlexContainer>
      <CardHeader>
        <div>#{user.id}</div>
        <div>
          {user.name} | {user.username}
        </div>
      </CardHeader>
      <CardBody>
        <div>{user.email}</div>
        <div>{user.phone}</div>
        <div>
          <Link
            target="_blank"
            rel="noreferrer"
            href={`https://${user.website}`}
          >
            {user.website}
          </Link>
        </div>
        <Separator />
        <div>Working at</div>
        <div>
          {user.company.name} <ItalicText>({user.company.bs})</ItalicText>
        </div>
        <div>{user.company.catchPhrase}</div>
      </CardBody>
      <CardFooter>
        <div>
          <div>
            {user.address.suite} {user.address.street}
          </div>
          <div>
            {user.address.zipcode} {user.address.city}
          </div>
        </div>
        <div>
          <Link
            target="_blank"
            rel="noreferrer"
            href={`http://www.google.com/maps/place/${user.address.geo.lng},${user.address.geo.lat}`}
          >
            Find on Map
          </Link>
        </div>
      </CardFooter>
    </CardFlexContainer>
  );
};

export default UserCard;
