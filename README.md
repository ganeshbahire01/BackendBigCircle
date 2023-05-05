<h1 align="center">Books-Shop Backend - Assignment 1</h1> 

<h2 align="center">Books Shop is E- Book reading platfor where we can pick any book and read it after reaading you can remove it from list main Task is to Create API for login Signup Add Book or Remove book</h2>

<br />
<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="chakra-ui"/>
     <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="nodejs" />
    <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="expressjs" />
    <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="mongodb" />
</p>
<h3 align="center"><a href="https://big-circle.vercel.app/"><strong>Want to see live preview »</strong></a></h3>

## 🚀 Features
- Register User by Credentials .
- Password Store in Encrypted Form.
- Login User by credentials .
- Token Genration on Login .
- Storing Books data with user Id
- Getting Books Data of Perticular user.
- Removing perticular Book data On request.
- Storing Data to Mongo DB .
- Deployed On cyclic - API - https://exuberant-battledress-clam.cyclic.app/
<br />

## 🚀 How To Use It Locally
- Clone Repo --- git clone https://github.com/ganeshbahire01/BackendBigCircle.git .
- Install All Dependecies --- npm i .
- Run Locally use --- npm run start.
- It's Start Server on Port number 8080
- So in Browser use   --- http://localhost:8080/ -- local API .
<br />

## 🚀 Data Format on MongoDB
- User Data Formate:- 
    - {_id:6453ab78df7c312758d5a227,
      email:"ganesh@gmail.com",
      password:"$2b$04$nwyTwn2tMzGC4ok1y/KNaOpjrWuGvllQKwXP7PXAtpFtGuwE3jsf6",
      mobile:12345}
- Password are in Encrypted Formate - bcrypt
- Books Data Formates
   - {_id:6453d252a4eeb7883d1dc9e7,
        userID:"6453ad630a12b8126da83a7a",
        BookImg:"http://books.google.com/books/content?id=tjjrDwAAQBAJ&printsec=frontco…",
        BookTitle:"Learning React",
        BookAuthor[
            "Alex Banks" 
            "Eve Porcello"],
         BookPrice:3764.2
    }
<br />

## 🚀 Registration 
- POST Request with payload -- req.body({email,mobile,password}).
- API - https://exuberant-battledress-clam.cyclic.app/users/register
- Succesfully Registration 
   - Response :- {
               "message": "Registration successful"
                }
- user Already Registered 
   - Response :- {
               "message": "User Already Registerd"
                }
- Failed Request  
   - Response :- {
  "message": "Invalid status code: undefined"
}
<br />

## 🚀 Login 
- POST Request with payload -- req.body({email:"ganesh@gmail.com",password:"ganesh"}).
- API - https://exuberant-battledress-clam.cyclic.app/users/login
- Succesfully Login 
   - Response :-{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NDUzYWI3OGRmN2MzMTI3NThkNWEyMjciLCJpYXQiOjE2ODMyODAxMDZ9.pgxoKTlwh8CubnDHKEEDz7jq2Jy6EP2O1stEAMPv-ZU",
  "owner": {
    "_id": "6453ab78df7c312758d5a227",
    "email": "ganesh@gmail.com",
    "password": "lol",
    "mobile": 12345
  }
}
- Wrong Password 
   - Response :- {
  "message": "Invalid password"
}
- Failed Request  
   - Response :- {
  "message": "Invalid status code: undefined"
}
<br />

## 🚀 Add Book to Readlist 
- POST Request with payload -- req.body({email,mobile,password}).
- API - https://exuberant-battledress-clam.cyclic.app/books/addBook
- Succesfully Adding Books to DB. 
   - Response :- {
               "message": "Book saved successfully"
                }
- Book Already in Reading List 
   - Response :-{ message: "Book already in Reading List" }
- Failed Request  
   - Response :- {
  "message": "Invalid status code: undefined"
}
<br />

## 🚀 Get Book by userID
- GET Request with payload -- req.body({email,mobile,password}).
- API - https://exuberant-battledress-clam.cyclic.app/books/6453ab78df7c312758d5a227  -- UserId
- Succesfully getting Books from DB. 
   - Response :- [
  {
    "_id": "64542c391f96f9c20118ea67",
    "userID": "6453ab78df7c312758d5a227",
    "BookImg": "http://books.google.com/books/content?id=cWdmDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "BookTitle": "Beginning React",
    "BookAuthor": [
      "Andrea Chiarelli"
    ],
    "BookPrice": 1229.55
  },
  {
    "_id": "64543ec546025a6a7f2f1b3b",
    "userID": "6453ab78df7c312758d5a227",
    "BookImg": "http://books.google.com/books/content?id=j6QqDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "BookTitle": "Intracranial Pressure and Brain Monitoring XV",
    "BookAuthor": [
      "Beng-Ti Ang"
    ],
    "BookPrice": 9239.4
  },
  {
    "_id": "6454a16d3686b009f2d263e3",
    "userID": "6453ab78df7c312758d5a227",
    "BookImg": "http://books.google.com/books/content?id=WAOxl4-HS1wC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "BookTitle": "For Kin or Country",
    "BookAuthor": [
      "Stephen M. Saideman",
      "R. William Ayres"
    ],
    "BookPrice": 2487
  },
  {
    "_id": "6454d203c74518e62205ed98",
    "userID": "6453ab78df7c312758d5a227",
    "BookImg": "http://books.google.com/books/content?id=tjjrDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "BookTitle": "Learning React",
    "BookAuthor": [
      "Alex Banks",
      "Eve Porcello"
    ],
    "BookPrice": 3764.2
  }
]
- Failed Request  
   - Response :- {
  "message": "Invalid status code: undefined"
}
<br />

## 🚀 Remove Book From List 
- DELETE Request with payload -- req.body({email,mobile,password}).
- API -https://exuberant-battledress-clam.cyclic.app/books/6454d203c74518e62205ed98  -- BookID
- Succesfully Deleting 
   - Response :- {
               "Delete Successful"
                }
- Failed Request  
   - Response :- {
  "message": "Invalid status code: undefined"
}
<br />
