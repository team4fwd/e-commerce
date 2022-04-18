const validate = values => {
    const errors = {}
    if (!values.productName) {
        errors.productName = "Required";

    } if (!values.categoryName) {
        errors.categoryName = "Required";

    } if (!values.descriptions) {
        errors.descriptions = "Required";

    } if (!values.price) {
        errors.price = "Required";

    } if (!values.quantity) {
        errors.quantity = "Required";
    }


    return errors
}

export default validate;