const express= require("express"); // import express module here

const {users}=require("./data/users.json");

const app=express();  // initialize express with constant variable

const PORT = 8081;

app.use(express.json());  // define we use the application in json format

app.get("/",(req,res)=>{
    res.status(200).json({
        messege:"server is up and running :-)"
    })
})

/* 
Route: /users
Method: GET
Description: Get all users
Access: Public
Parameters: None
*/

app.get("/users",(req,res)=>{
    res.status(200).json({
        success: true,
        data: users,
    })
})

/* 
Route: /users/:id
Method: GET
Description: Get a user by id
Access: Public
Parameters: id
*/
app.get("/users/:id",(req,res)=>{
    const {id}=req.params;
    const user=users.find((each) =>each.id=== id);
    if(!user){
        return res.status(404).json({
            status:false,
            messege:"user does not exist"
        })
    }
        return res.status(200).json({
            status:true,
            messege:"user exist",
            data: user
        })
})

/* 
Route: /users
Method: POST
Description: Creating/Adding a new user
Access: Public
Parameters: None
*/

app.post("/users",(req,res)=>{
    const {id,name,surname,email,subscriptionType,subscriptionDate}=req.body;
    const user=users.find((each)=>each.id === id);
    if(user){
        return res.status(404).json({
            status:false,
            messege:"user with this id already exist"
        })
    }
    users.push({
        id,
        name,
        surname,
        email,
        subscriptionType,
        subscriptionDate
    })
    return res.status(201).json({
        status:true,
        messege:"user added successfully",
        data:users
    })
})

/* 
Route: /users/:id
Method: PUT
Description: Updating a user by their ID
Access: Public
Parameters: Id
*/

app.put("/users/:id", (req,res)=>{
    const {id} =req.params;
    const {data}= req.body;
    const user=users.find((each)=>each.id===id);
    if(!user){
        return res.status(404).json({
            status:false,
            messege:"user with this id does not exist"
        })
    }
    const updateUserData=users.map((each)=>{
        if(each.id===id){
            return{
                ...each, //each element data present in json file
                ...data  // updated data
            };   
        }
        return each;
    })
    return res.status(200).json({
        status:true,
        messege:"User updated",
        data:updateUserData,
    })

})

/* 
Route: /users/:id
Method: DELETE
Description: Deleting a user by their ID
Access: Public
Parameters: Id
*/

app.delete("/users/:id",(req,res)=>{
    const {id}=req.params;
    const user=users.find((each)=>each.id===id);
    if(!user){
        return res.status(404).json({
            status:false,
            messege:"User does not exist with this id"
        })
        return
    }
})

app.get("*",(req,res)=>{
    res.status(404).json({
        messege:"This route doesn't exist"
    })
})

app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`)
})  