# nodejs project

server  >> storing certain book data
        >> user registration 
        >> Subscriber

## fine system
User = 6.03.2023 - 6.06.2023
09.06.2023 =50*3=150/-

3 Months (Basic)
6 Months (Standard)
12 Months (Premium)

If the subscription type is standard  && if the subscription date is 06/3/2023
=> then subscription valid till 06/09/2023

within the subscription date => if we miss the renewal >>50/- per day
subscription date is also been missded  >> and also missed the renewal >> 100 + 50/day

# Routes and Endpoints

## /users
POST : CREATE A NEW USER
GET  : GET all the user info here

## /users/{id}
GET : Get a user by id
PUT : Update a user by their ID
DELETE : Delete a user by their ID(Check if she/he still have any issued books) & (if there any fine to paid or not)

## /users/subscription-details/{id}
GET - Get user subscription details
        >> Date of subscription
        >> Valid till
        >> Is there any fine

## /books
GET - Get all the books
POST - Create/Add a new book

## /books/{id}
GET - Get a book by id
PUT - Update a book by id

## /books/issued
GET - Get all issued books

## /books/issued/withFine
GET - Get all issued books with their fine

https://github.com/himanshigrover30/libraryRecord-node-express-js.git

## npm init
## npm i nodemon -- save-dev

# npm i express

## The express.Router() function is used to create a new router object. This function is used when you want to create a new router object in your program to handle requests. Multiple requests can be easily differentiated with the help of the Router() function in Express.js.This is the advantage of the use of the Router.