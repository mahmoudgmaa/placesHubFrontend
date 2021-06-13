import React from "react";
import UserItem from "./UserItem";
import "./UserList.css" 
import styled from "styled-components";


const Card = styled.div`
  margin: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 6px;
  padding: 1rem;
  overflow: hidden;
  background: white;
`;

const Wrapper = styled.ul`
  list-style: none;
  margin:0 auto;
  padding: 0;
  width: 90%;
  max-width: 50rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;



const UserList=(props)=>{
    if(props.items.length===0){
        return (
          <Card>
            <h2>No users found</h2>
          </Card>
        );
    }
    return (
      <Wrapper>
        {props.items.map((user) => {
          return (
            <div className="col-md-4">
              <UserItem
                key={user.id}
                id={user.id}
                image={user.image}
                name={user.name}
                placeCounter={user.placeCounter}
              />
            </div>
          );
        })}
      </Wrapper>
    );
}
export default UserList;