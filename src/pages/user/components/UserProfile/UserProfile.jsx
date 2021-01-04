import React from 'react';
import './styles/UserProfile.scss';

const UserProfile = () => {
  const user = JSON.parse(sessionStorage.getItem('user'));

  return (
    <div className="profile">
      <img src={user.picture} alt="avatar" className="profile__image" />
      <span className="profile__item">{user.name}</span>
      <span className="profile__item">{`login: ${user.login}`}</span>
      <span className="profile__item">{`email: ${user.email}`}</span>
      <span className="profile__item">{`birthday: ${user.birthday}`}</span>
    </div>
  );
};

export default UserProfile;
