import React from 'react';
import './UsersList.scss';
import { DataGrid } from '@mui/x-data-grid';
import { MdDeleteOutline } from 'react-icons/md';
import { userRows } from '../../components/admin/DummyData';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function UsersList() {
  const [data, setData] = useState(userRows);

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
          <img src={params.row.avatar} alt='' className='usersList__user-img' />
          {params.row.username}
        </div>
      ),
    },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'status', headerName: 'Status', width: 120 },
    { field: 'transactions', headerName: 'Transactions', width: 160 },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`${params.row.id}`}>
              <button className='usersList__edit'>Edit</button>
            </Link>
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
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}

export default UsersList;
