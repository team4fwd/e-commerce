import React from 'react';
import './UsersList.scss';
import { DataGrid } from '@mui/x-data-grid';
import { MdDeleteOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function UsersList() {
  const [data, setData] = useState([]);
  const { token } = useSelector((state) => state.user.userInfo);

  useEffect(() => {
    fetch('https://e-commerce-fwd.herokuapp.com/users', {
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const users = data.map((user) => ({
          id: user._id,
          username: `${user.firstName} ${user.lastName}`,
          email: user.email,
        }));
        console.log(users);
        setData(users);
      });
  }, [token]);

  const handleDeleteUser = (id) => {
    setData((currusers) => currusers.filter((user) => user.id !== id));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'user',
      headerName: 'User',
      width: 200,
      renderCell: (params) => (
        <div className='usersList__user'>
          {/* <img src={params.row.avatar} alt='' className='usersList__user-img' /> */}
          {params.row.username}
        </div>
      ),
    },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'status', headerName: 'Status', width: 120 },
    // { field: 'transactions', headerName: 'Transactions', width: 160 },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            {/* <Link to={`${params.row.id}`}>
              <button className='usersList__edit'>Edit</button>
            </Link> */}
            <MdDeleteOutline
              className='usersList__delete'
              onClick={() => handleDeleteUser(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className='usersList'>
      <div className='usersList__titleContainer'>
        <h3 className='usersList__title'>Users List</h3>
        <Link to='newuser'>
          <button className='usersList__add-btn'>Create</button>
        </Link>
      </div>
      <div className='usersList__table'>
        <DataGrid
          rows={data}
          disableSelectionOnClick
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </div>
  );
}

export default UsersList;
