import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const AcountDetailsForm = () => {
  const userInfo = useSelector((state) => state.user.userInfo);
  useEffect(() => {}, []);
  return (
    <div className='card-block'>
      <div className='row'>
        <div className='col-md-4'>
          <p className='m-b-10 f-w-600'>Frist name</p>
          <h6 className='text-muted f-w-400'>{userInfo.firstName}</h6>
        </div>
        <div className='col-md-4'>
          <p className='m-b-10 f-w-600'>Last name</p>
          <h6 className='text-muted f-w-400'>{userInfo.lastName}</h6>
        </div>
        <div className='col-md-4'>
          <p className='m-b-10 f-w-600'>Email</p>
          <h6 className='text-muted f-w-400'>{userInfo.email}</h6>
        </div>
      </div>
      <div className='d-flex align-items-end justify-content-center mt-4'>
        <div>
          {/* <Button variant='primary' type='submit'>
            Update
          </Button>           */}
        </div>
      </div>
    </div>
  );
};

export default AcountDetailsForm;
