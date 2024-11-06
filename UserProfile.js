
import React from 'react';

const UserProfile = ({ user }) => {
  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      <img src={user.profilePicture} alt="Profile" />
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserProfile;
