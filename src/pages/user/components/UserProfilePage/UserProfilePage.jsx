import React from 'react';
import Header from '../../../../shared/components/Header/components/PageHeader/PageHeader';
import ROUTES from '../../../../shared/constants/paths/paths';
import UserProfile from '../UserProfile/UserProfile';

const UserProfilePage = () => {
  const { profile } = ROUTES;

  return (
    <>
      <Header currentPage={profile.name} />
      <UserProfile />
    </>
  );
};

export default UserProfilePage;
