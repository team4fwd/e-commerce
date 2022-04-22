import React, { useState, useEffect } from "react";
import './profile.css'
import Loading from './loading/Loading'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';
import { AddInformationAPI } from "../../util/API";
import { useSelector } from "react-redux";
import axios from 'axios'

const initialState = {
  address: '',
  phoneNumber: '',
}
const ProfileInformation = () => {
  const [avatar, setAvatar] = useState(false)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(initialState)
  const { token } = useSelector((state) => state.user.userInfo);

  let navigate = useNavigate();

  useEffect(() => {

  }, []);

  const formik = useFormik({

    initialValues: {
      address: '',
      phoneNumber: '',

      avatar: [],
    },
    onSubmit: values => {
      values.avatar = avatar;

      console.log(values)

      AddInformationAPI(values, token)
        .then((data) => data)
        .then((data) => console.log(data))

    }

  });


  const handleUpload = async e => {
    e.preventDefault()
    try {
      const file = e.target.files[0]
      console.log(file)
      if (!file) return alert("File not exist.")

      if (file.size > 1024 * 1024) // 1mb
        return alert("Size too large!")

      // if(file.type !== 'image/jpeg' && file.type !== 'image/png') // 1mb
      //     return alert("File format is incorrect.")

      let formData = new FormData()
      formData.append('file', file)

      setLoading(true)
      const res = await axios.post('https://e-commerce-fwd.herokuapp.com/uploadImage', formData, {
        headers: {
          'content-type': 'multipart/form-data',
          'content-type': 'multipart/form-data',
          'x-access-token': token,
        }
      })
      setLoading(false)
      setAvatar(res.data)
      // console.log(res)


    } catch (err) {
      // alert(err.response.data.msg)
    }
    console.log(data)

  }

  const handleDestroy = async () => {

    try {
      setLoading(false)
      setAvatar(false)

    } catch (err) {
      // alert(err.response.data.msg)
    }
  }
  const styleUpload = {
    display: avatar ? "block" : "none"
  }

  return (
    // console.log(userInfo),
    <div className="row">
      <div className="col-md-5">
        <div className="upload">
          <input type="file" name="file" id="file_up" onChange={handleUpload} />
          {
            loading ? <div id="file_img"><Loading /></div>

              : <div id="file_img" style={styleUpload}>
                <img src={avatar ? avatar.url : ''} alt="" />
                <span onClick={handleDestroy}>X</span>
              </div>
          }

        </div>
      </div>

      <div className="col-md-7">
        {/* {(productError) ? <div className="alert alert-danger" role="alert">{productError}</div> : ""} */}


        <form className="form" onSubmit={formik.handleSubmit}>
          <div className="mb-3">

            <label className="form-label" htmlFor="address">Address</label>
            <input
              className="form-control"
              id="address"
              name="address"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.address}
            />
          </div>
          {/* {formik.errors.address ? <div className="text-danger">{formik.errors.address}</div> : null} */}
          <div className="mb-3">
            <label className="form-label" htmlFor="phoneNumber">Phone number</label>
            <input
              className="form-control"
              id="phoneNumber"
              name="phoneNumber"
              onChange={formik.handleChange}
              value={formik.values.phoneNumber}
            />
          </div>
          {/* {formik.errors.phoneNumber ? <div className="text-danger">{formik.errors.phoneNumber}</div> : null} */}
          <div className="d-flex justify-content-center mt-3">
            <button type="submit" className="btn btn-primary btn-block  text-body" >Add Information</button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default ProfileInformation;
