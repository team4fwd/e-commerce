const validate = values => {
    const errors = {}
    if (!values.productName) {
        errors.productName = "Required";

    }  if (!values.categoryName) {
        errors.categoryName = "Required";

    }  if (!values.descriptions) {
        errors.descriptions = "Required";

    }  if (!values.price) {
        errors.price = "Required";

    }  if (!values.quantity) {
        errors.quantity = "Required";

    }  if (!values.images) {
        errors.images = "Required";}
        if (values.images && values.images.size) {
            const imageFileKb = values.images.size / 1024;
      
            if (imageFileKb < 100) {
              return `Image should be > 100 kb`;
            }
          }
    
    return errors
}

export default validate;