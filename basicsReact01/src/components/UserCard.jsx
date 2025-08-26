import React from 'react'

function UserCard({name, profileImage, isOnline, bio}) {
  return (
    <div>
        <h4>{name}</h4>
        <img src={profileImage} alt={name} width="250px"/>
        <p style={{ color: isOnline ? 'green' : 'red' }}>{isOnline ? 'Active' : 'Inactive'}</p>
        <p>{bio}</p>
    </div>
  )
}

export default UserCard