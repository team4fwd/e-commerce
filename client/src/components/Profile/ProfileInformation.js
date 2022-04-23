import React, { useState, useEffect } from 'react';
import Loading from './loading/Loading';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { GetUserInfoAPI } from '../../util/API';
import { updateUserInfo } from '../../store/actions/userActions';

const ProfileInformation = () => {
  const dispatch = useDispatch();

  const [avatar, setAvatar] = useState([]);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const { token } = useSelector((state) => state.user.userInfo);

  useEffect(() => {
    GetUserInfoAPI(token).then((data) => {
      setData(data.userprofile);
      setAvatar(data.userprofile.avatar);
    });
  }, [token]);

  const formik = useFormik({
    initialValues: {
      address: data.address,
      phoneNumber: data.phoneNumber,
      avatar: avatar,
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      values.avatar = avatar;

      dispatch(updateUserInfo(values));
    },
  });

  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      const file = e.target.files[0];
      if (!file) return alert('File not exist.');

      if (file.size > 1024 * 1024)
        // 1mb
        return alert('Size too large!');

      if (
        file.type !== 'image/jpeg' &&
        file.type !== 'image/png' &&
        file.type !== 'image/webp'
      )
        return alert('File format is incorrect.');

      let formData = new FormData();
      formData.append('file', file);

      setLoading(true);
      const res = await axios.post(
        'https://e-commerce-fwd.herokuapp.com/uploadImage',
        formData,
        {
          headers: {
            'content-type': 'multipart/form-data',
            'x-access-token': token,
          },
        }
      );
      setLoading(false);
      setAvatar(res.data);
    } catch (err) {}
  };

  const handleDestroy = async () => {
    try {
      setLoading(false);
      setAvatar(false);
    } catch (err) {}
  };
  const styleUpload = {
    display: avatar ? 'block' : 'none',
  };

  return (
    <div className='row'>
      <div className='col-md-5'>
        <div className='upload profileInfo'>
          <input type='file' name='file' id='file_up' onChange={handleUpload} />
          {loading ? (
            <div id='file_img'>
              <Loading />
            </div>
          ) : (
            <div id='file_img' style={styleUpload}>
              <img src={avatar ? avatar.url : ''} alt='' />
              <span onClick={handleDestroy}>X</span>
            </div>
          )}
        </div>
      </div>

      <div className='col-md-7'>
        {/* {(productError) ? <div className="alert alert-danger" role="alert">{productError}</div> : ""} */}

        <form className='form' onSubmit={formik.handleSubmit}>
          <div className='mb-3'>
            <label className='form-label' htmlFor='address'>
              Address
            </label>
            <input
              className='form-control'
              id='address'
              name='address'
              type='text'
              onChange={formik.handleChange}
              value={formik.values.address}
            />
          </div>
          {/* {formik.errors.address ? <div className="text-danger">{formik.errors.address}</div> : null} */}
          <div className='mb-3'>
            <label className='form-label' htmlFor='phoneNumber'>
              Phone number
            </label>
            <input
              className='form-control'
              id='phoneNumber'
              name='phoneNumber'
              onChange={formik.handleChange}
              value={formik.values.phoneNumber}
            />
          </div>
          {/* {formik.errors.phoneNumber ? <div className="text-danger">{formik.errors.phoneNumber}</div> : null} */}
          <div className='d-flex justify-content-center mt-3'>
            <button
              type='submit'
              className='btn btn-primary btn-block  text-body'
            >
              Add Information
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileInformation;
