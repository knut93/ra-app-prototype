import React, { useState, useEffect } from 'react'
import axios from 'axios';

function UsersPage() {
  const [users, setUsers] = useState<Object>({});

  useEffect(() => {
    const getUsers = async () => {
      try {
        const userList = await axios.get('http://127.0.0.1:3000/users')
        setUsers(userList);
      } catch (err) {
        console.error(err)
      }
    }
    getUsers();
  }, [])

  console.log(users)
  return (
    <div>
      HomePage
    </div>
  )
}

export default UsersPage;