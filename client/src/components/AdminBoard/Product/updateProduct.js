import React, { useState, useEffect } from "react";
import { useFormik } from 'formik';
import validate from './validationProduct';
import { useParams } from 'react-router-dom';
import CategoryOption from "./categoryOption";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

import "../prodAndCteg-List.scss"

let UpdateProduct = props => {
  const [productData, setProductData] = useState([]);
  const [images, setImages] = React.useState([]);
  const [showImg, setShowImg] = React.useState(false)

  let navigate = useNavigate();


  const { id } = useParams();

  useEffect(() => {

    fetch("https://e-commerce-fwd.herokuapp.com/products/" + id, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify()
    }).then(res => res.json())
      .then((data) => { setImages(data.images); setProductData(data) })
  }, [id]);


  const formik = useFormik({
    initialValues: {
      productName: productData.productName,
      categoryName: productData.categoryName,
      descriptions: productData.descriptions,
      price: productData.price,
      quantity: productData.quantity,
      images: productData.images,
      showImg:showImg
    },

    enableReinitialize: true,

    validate,

    onSubmit: (values) => {
      values.images = images;

      fetch("https://e-commerce-fwd.herokuapp.com/products/" + id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },

        body: JSON.stringify(values)
      }).then(res => res.json()).then((data) => data
        //   alert(JSON.stringify(values, null, 5));
      )
      navigate("/admin/products")

    }
  })

  const handleUpload = async (e) => {
    e.preventDefault()

    const files = e.target.files

    for (var i = 0; i < files.length; i++) {
      let file = files[i]

      try {
        if (!file) return alert("File not exist.")

        if (file.size > 1024 * 1024) // 1mb
          return alert("Size too large!")

        if (file.type !== 'image/jpeg' && file.type !== 'image/png') // 1mb
          return alert("File format is incorrect.")

        let formData = new FormData()
        formData.append('file', file)

        const res = await axios.post('https://e-commerce-fwd.herokuapp.com/uploadImage', formData, {
          headers: { 'content-type': 'multipart/form-data' }
        })
         console.log(res.data)

       await formik.values.images.push(res.data)
       
        // images.push(res.data)

      } catch (err) {
        alert(err.response.data.message)
      }
    }
    setImages(formik.values.images)
    setShowImg(true)
  }



  const handleDestroy = async (public_id) => {
    await setImages(images.filter(function (obj) {
      return obj.public_id !== public_id;
    }));
    formik.values.images = formik.values.images.filter(function (obj) {
      return obj.public_id !== public_id;
    });
  }


  return (

    <div className='prodAndCteg-List'>
      <div className='prodAndCteg-List__titleContainer'>
        <h3 className='prodAndCteg-List__title'>Update product</h3>

      </div>
      <div className="col-md-12 div-form">

        <form className="form-center" onSubmit={formik.handleSubmit}>

          <label className="control-label form-label" htmlFor="productName">Product Name</label>
          <input
            className="form-control form-control-lg"
            id="productName"
            name="productName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.productName}
          />
          {formik.errors.productName ? <div className="text-danger">{formik.errors.productName}</div> : null}

          <label className="control-label form-label" htmlFor="categoryName">Category Name</label>
          <select
            className="form-control form-control-lg"
            id="categoryName"
            name="categoryName"
            onChange={formik.handleChange}
            value={formik.values.categoryName}
          > <CategoryOption /></select>
          {formik.errors.categoryName ? <div className="text-danger">{formik.errors.categoryName}</div> : null}

          <label className="control-label form-label" htmlFor="descriptions">Descriptions</label>
          <textarea
            className="form-control form-control-lg"
            id="descriptions"
            name="descriptions"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.descriptions}
          />
          {formik.errors.descriptions ? <div className="text-danger">{formik.errors.descriptions}</div> : null}

          <label className="control-label form-label" htmlFor="price">Price</label>
          <input
            className="form-control form-control-lg"
            id="price"
            name="price"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.price}
          />
          {formik.errors.price ? <div className="text-danger">{formik.errors.price}</div> : null}
          <label className="control-label form-label" htmlFor="quantity">Quantity</label>
          <input
            className="form-control form-control-lg"
            id="quantity"
            name="quantity"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.quantity}
          />
          {formik.errors.quantity ? <div className="text-danger">{formik.errors.quantity}</div> : null}



          <input type="file" name="file" className="form-control-lg" id="" multiple onChange={handleUpload} />



          <div className="prod_images_Container">

            {images.map((image, index) => (
              <div className="prod_images" key={index}>

                <img src={image.url} alt="" />
                <span onClick={() => handleDestroy(image.public_id)}>X</span>


              </div>
            ))} </div>

          <div className="d-flex justify-content-center mt-3">
            <button type="submit" className="btn btn-primary btn-block  text-body">update product</button>
          </div>
        </form>


      </div>





    </div>)
}


export default UpdateProduct;