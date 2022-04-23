# e-commerce

# To Run Server: 
1- npm install <br />
2- npm run start-dev <br />
3- Add .env file with this variabld:<br />
=========================
1- MONGODB_URI             // For Mongodb URI <br />
2- EMAIL                   // For nodemailer Auth to send mail to customer after changing order status Example: example@gmail.com <br />
3- PASS                    // Pass For nodemailer Auth <br />
4- ACCESS_TOKEN_SECRET     // For JWT to create Token <br />
5- CLOUD_NAME              // For cloudinary <br />
6- API_KEY                 // For cloudinary <br />
7- API_SECRET              // For cloudinary <br />
# Api Documentaion:
Registration API: 
=========================

Link: https://e-commerce-fwd.herokuapp.com/users/add <br /> 
Required Fields: <br />
{ <br />
    "firstName": "", <br />
    "lastName": "",  <br />   
    "email": "", <br />
    "password" : "" <br />
} <br />
Request type: POST <br />
Response :  <br />
{ <br />
    "message": "User added successfully." <br />
} <br />
 
Login API: 
========================= 
Link: https://e-commerce-fwd.herokuapp.com/users/ login <br />
Required Fields: <br />
{ <br />
    "email": " ", <br />
    "password" : " " <br />
}  <br />
Request type: POST <br />
Response:  <br />
{ <br />
    "message": "Login Success", <br />
    "accessToken": "" <br />
} <br />
 
Logout API: 
========================= 
Link: https://e-commerce-fwd.herokuapp.com/users/ logout <br />
Request type: GET  <br />
Response:  <br />
{ <br />
    "message": "logout Success", <br />
} <br />
Category API
=========================
Add Category:
=========================
Link: https://e-commerce-fwd.herokuapp.com/cateogry/add <br />
Request type: POST <br />
Required Fields: <br />
{ <br />
    "categoryName" : "" } <br />
 
Response:  <br />
{ <br />
     	Status: true, message: " Category Added Successfully " <br />
} <br />
 
Show Category:
=======================
Link: https://e-commerce-fwd.herokuapp.com/cateogry  <br /> 
Request type: GET  <br /> 

Edit Category:
=========================
Link: https://e-commerce-fwd.herokuapp.com/cateogry/id  <br /> 
Request type: PUT  <br /> 
Required Fields: <br /> 
{ <br /> 
    "categoryName" : "" <br /> 
}  <br /> 
Response:  <br /> 
{ <br /> 
  Status: true, <br /> 
  message: " Category Updated Successfully " <br /> 
} <br /> 
 
Delete Category:
=========================
Link: https://e-commerce-fwd.herokuapp.com/cateogry/id <br /> 
Request type: DELETE  <br /> 
Response:  <br /> 
{ <br /> 
 Status: true, <br /> 
 message: " Category Deleted Successfully " <br /> 
} <br /> 

Products API
=========================
Add Products: 
=========================
Link: https://e-commerce-fwd.herokuapp.com/products/ create  <br /> 
Request type: POST  <br /> 
Required Fields: <br /> 
{ <br /> 
    "productName"  	:   "", <br /> 
    "categoryName"  	: "", <br /> 
    "descriptions"   	:  "", <br /> 
    "price"            	:   , <br /> 
    "quantity"         	: , <br /> 
    "images"           	:[{"public_id": "","url": ""}    ] <br /> 
}  <br /> 
To add images by upload API and the response is:<br /> 
{"public_id": "","url": ""}<br /> 
Link: https://e-commerce-fwd.herokuapp.com/uploadImage <br /> 
Response:  <br /> 
{ <br /> 
  Status: true, <br /> 
  message: " Product Added Successfully " <br /> 
} <br /> 
  
Show Products:
=========================
Link: https://e-commerce-fwd.herokuapp.com/ products <br /> 
Request type: GET <br /> 

Edit Products:
=========================
Link: https://e-commerce-fwd.herokuapp.com/ products/id <br /> 
Request type: PUT  <br /> 
Required Fields: <br /> 
{ <br /> 
    "productName"  	:   "", <br /> 
    "categoryName"  	: "", <br /> 
    "descriptions"   	:  "", <br /> 
    "price"            	:   , <br /> 
    "quantity"         	: , <br /> 
    "images"           	:[{"public_id": "","url": ""}    ] <br /> 
}  <br /> 
To add images by upload API and the response is:<br /> 
{"public_id": "","url": ""}<br /> 
Link: https://e-commerce-fwd.herokuapp.com/uploadImage<br /> 
Response:  <br /> 
{ <br /> 
  Status: true, <br /> 
  message: " Product Updated Successfully " <br /> 
} <br /> 

Delete Products:
=========================
Link: https://e-commerce-fwd.herokuapp.com/ products/id <br /> 
Request type: DELETE  <br /> 
Response:  <br /> 
{ <br /> 
  Status: true, <br /> 
  message: " Product Deleted Successfully " <br /> 
} <br /> 

Product Details:
=========================
Link: https://e-commerce-fwd.herokuapp.com/products/id <br /> 
Request type: GET  <br /> 
Response:  <br /> 
{ <br /> 
    "productName"  	:   "", <br /> 
    "categoryName"  	: "", <br /> 
    "descriptions"   	:  "", <br /> 
    "price"            	:   , <br /> 
    "quantity"         	: , <br /> 
    "images"           	:[{"public_id": "","url": ""}    ]} <br /> 

 
Search Products: 
=========================
Link: https://e-commerce-fwd.herokuapp.com/products? Products=””&cat=””<br /> 
Request type: GET <br /> 

userprofile API
=========================
show userprofile: 
=========================
Link: https://e-commerce-fwd.herokuapp.com/userprofile  <br /> 
Request type: GET  <br /> 
Response:  <br /> 
{<br /> 
    "userprofile": [<br /> 
        {<br /> 
            "_id": "",<br /> 
            "user_id": "",<br /> 
            "card": [],<br /> 
            "__v": 0,<br /> 
            "address": "",<br /> 
            "phoneNumber": ""<br /> 
        }<br /> 
    ],<br /> 
    "user": {<br /> 
        "firstName": "",<br /> 
        "lastName": "",<br /> 
        "email": ""<br /> 
    }<br /> 
}<br /> 
 
Edit userprofile: 
=========================
Link: https://e-commerce-fwd.herokuapp.com/userprofile/edit <br /> 
Request type: POST  <br /> 
Required Fields: <br /> 
{ <br /> 
    " address "  	:   "", <br /> 
    " phoneNumber "  	: "", <br /> 
    "avatar"           	:[{"public_id": "","url": ""}    ] <br /> 
}  <br /> 
To add avatar by upload API and the response is:<br /> 
{"public_id": "","url": ""}<br /> 
Link: https://e-commerce-fwd.herokuapp.com/uploadImage<br /> 


 
 
Orders API
=========================
Add order: 
=========================
Link: https://e-commerce-fwd.herokuapp.com/order <br /> 
This link for user to add order <br /> 
Request type: POST  <br /> 
Required Fields: <br /> 
{<br /> 
user_id     : String,<br /> 
    	orderItems  : [{<br /> 
            "img": String,<br /> 
            "price": Number,<br /> 
            "amount" : Number,<br /> 
            "name": String,<br /> 
        }],<br /> 
    	shippingInfo :[{<br /> 
            "address": String,<br /> 
            "phone": Number,<br /> 
        }],<br /> 
    	itemsPrice   : Number,<br /> 
    	shippingPrice : Number,    <br /> 
    	taxPrice     : Number,<br /> 
    	totalPrice     : Number,<br /> 
    orderStauts     :String enum: ['Inprogress', 'Shipped','In The Way','Delivered','Canceled'],<br /> 
    paymentMethod     :String enum: ['Cash On Delivered', 'PayPal','Visa','Master Card'],<br /> 
}<br /> 
Show order: 
=========================
Link: https://e-commerce-fwd.herokuapp.com/order <br /> 
This link for admin to show all orders  <br /> 
Request type: GET  <br /> 
Response:  <br /> 
All orders in database<br /> 
 
Edit order Status: 
=========================
Link: https://e-commerce-fwd.herokuapp.com/order/id<br /> 
This link for admin to edit order status <br /> 
'Inprogress', 'Shipped','In The Way','Delivered','Canceled'<br /> 
After any changes in order status the user received email for order status  <br /> 
Request type: PUT <br /> 
Required Fields: <br /> 
{<br /> 
orderStauts : “”<br /> 

} <br /> 


