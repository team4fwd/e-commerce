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
{ 
    "firstName": " ", <br />
    "lastName": " ",     "email": " ", <br />
    "password" : " " } <br />
Request type: POST <br />
Response :  <br />
{ 
    "message": "User added successfully." <br />
} <br />
 
Login API: 
========================= 
Link: https://e-commerce-fwd.herokuapp.com/users/ login <br />
Required Fields: <br />
{ 
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
Link: https://e-commerce-fwd.herokuapp.com/users/ logout 
Request type: GET  
Response:  
{ 
    "message": "logout Success", 
} 
Category API
=========================
Add Category:
=========================
Link: https://e-commerce-fwd.herokuapp.com/cateogry/add 
Request type: POST 
Required Fields: 
{ 
    "categoryName" : "" } 
 
Response:  
{ 
     	Status: true, message: " Category Added Successfully " 
} 
======================= 
Show Category:
Link: https://e-commerce-fwd.herokuapp.com/cateogry 
========================= 
Request type: GET 
========================= 
Edit Category:
Link: https://e-commerce-fwd.herokuapp.com/cateogry/id 
========================= 
Request type: PUT 
========================= 
Required Fields: 
{ 
    "categoryName" : "" } 
========================= 
Response:  
{ 
     	Status: true, 
message: " Category Updated Successfully " 
} 
========================= 
Delete Category:
Link: https://e-commerce-fwd.herokuapp.com/cateogry/id 
========================= 
Request type: DELETE 
========================= 
Response:  
{ 
     	Status: true, 
message: " Category Deleted Successfully " 
} 

 



 
Products API
Add Products: 
Link: https://e-commerce-fwd.herokuapp.com/products/ create 
========================= 
Request type: POST 
========================= 
Required Fields: 
{ 
    "productName"  	:   "", 
    "categoryName"  	: "", 
    "descriptions"   	:  "", 
    "price"            	:   , 
    "quantity"         	: , 
    "images"           	:[{"public_id": "","url": ""}    ] 
}  
To add images by upload API and the response is:
{"public_id": "","url": ""}
Link: https://e-commerce-fwd.herokuapp.com/uploadImage
========================= 
Response:  
{ 
     	Status: true, 
message: " Product Added Successfully " 
} 
======================= 
Show Products: 
Link: https://e-commerce-fwd.herokuapp.com/ products 
=========================
Request type: GET 
=========================
 Edit Products:
Link: https://e-commerce-fwd.herokuapp.com/ products/id 
========================= 
Request type: PUT 
========================= 
Required Fields: 
{ 
    "productName"  	:   "", 
    "categoryName"  	: "", 
    "descriptions"   	:  "", 
    "price"            	:   , 
    "quantity"         	: , 
    "images"           	:[{"public_id": "","url": ""}    ] 
}  
To add images by upload API and the response is:
{"public_id": "","url": ""}
Link: https://e-commerce-fwd.herokuapp.com/uploadImage
========================= 
Response:  
{ 
     	Status: true, 
message: " Product Updated Successfully " 
} 
========================= 
Delete Products:
Link: https://e-commerce-fwd.herokuapp.com/ products/id 
========================= 
Request type: DELETE 
========================= 
Response:  
{ 
     	Status: true, 
message: " Product Deleted Successfully " 
} 
Product Details:
Link: https://e-commerce-fwd.herokuapp.com/products/id 
========================= 
Request type: GET 
========================= 
Response:  
{ 
    "productName"  	:   "", 
    "categoryName"  	: "", 
    "descriptions"   	:  "", 
    "price"            	:   , 
    "quantity"         	: , 
    "images"           	:[{"public_id": "","url": ""}    ]} 

======================= 
Search Products: 
Link: https://e-commerce-fwd.herokuapp.com/products? Products=””&cat=””
=========================
Request type: GET 
=========================

 
userprofile API
show userprofile: 
Link: https://e-commerce-fwd.herokuapp.com/userprofile 
========================= 
Request type: GET 
========================= 
Response:  
{
    "userprofile": [
        {
            "_id": "",
            "user_id": "",
            "card": [],
            "__v": 0,
            "address": "",
            "phoneNumber": ""
        }
    ],
    "user": {
        "firstName": "",
        "lastName": "",
        "email": ""
    }
}
======================= 
Edit userprofile: 
Link: https://e-commerce-fwd.herokuapp.com/userprofile/edit
========================= 
Request type: POST 
========================= 
Required Fields: 
{ 
    " address "  	:   "", 
    " phoneNumber "  	: "", 
    "avatar"           	:[{"public_id": "","url": ""}    ] 
}  
To add avatar by upload API and the response is:
{"public_id": "","url": ""}
Link: https://e-commerce-fwd.herokuapp.com/uploadImage


 
 
Orders API
Add order: 
Link: https://e-commerce-fwd.herokuapp.com/order 
This link for user to add order 
========================= 
Request type: POST 
========================= 
Required Fields: 
{
user_id     : String,
    	orderItems  : [{
            "img": String,
            "price": Number,
            "amount" : Number,
            "name": String,
        }],
    	shippingInfo :[{
            "address": String,
            "phone": Number,
        }],
    	itemsPrice   : Number,
    	shippingPrice : Number,    
    	taxPrice     : Number,
    	totalPrice     : Number,
    orderStauts     :String enum: ['Inprogress', 'Shipped','In The Way','Delivered','Canceled'],
    paymentMethod     :String enum: ['Cash On Delivered', 'PayPal','Visa','Master Card'],
}

Show order: 
=========================
Link: https://e-commerce-fwd.herokuapp.com/order 
This link for admin to show all orders  
Request type: GET 
========================= 
Response:  
All orders in database
 
Edit order Status: 
Link: https://e-commerce-fwd.herokuapp.com/order/id
This link for admin to edit order status 
'Inprogress', 'Shipped','In The Way','Delivered','Canceled'
After any changes in order status the user received email for order status 
========================= 
Request type: PUT 
========================= 
Required Fields: 
{
orderStauts : “”

} 


