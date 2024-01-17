import React from 'react'
import Header from '../components/laylout/Header'
import withAuth from '../components/withAuth';
import UsersContainer from '../components/users/UsersContainer';

const Users = () => {
  return (
    <div>
        <Header />
        <UsersContainer />
    </div>
  )
}

export default withAuth(Users)