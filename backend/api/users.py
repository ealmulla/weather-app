from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from db.userUtils import getUsers,saveUsers
from db.dbUtils import genrateUuid

router = APIRouter()

class AuthCredentails(BaseModel):
    email: str
    password: str

class LoginResonse(BaseModel):
    id: str
    username: str

#registration function
@router.post("/register", response_model=LoginResonse)      #post bc your sending something .... then resonse model is for documentaion ig
async def register(credentails:AuthCredentails):            #the info year getting from frontend and then the ":" is for the format in has to be in
    usersJSON = getUsers()

    #check if users exists 
    for user in usersJSON:
        if(credentails.email == user["email"]):             #check the users email with the ones that we have in the db
            raise HTTPException(400, detail="Account already exists.")

    #acount doesnt exist, create a new one 
    new_user = {
        "id": genrateUuid(),
        "email": credentails.email,
        "password": credentails.password,
        "username": credentails.email.split("@")[0]    #can create issues if ppl have the same username which can be an issue bc if diff email companys .. unno
    }

    usersJSON["users"].append(new_user)  #adding new user to database
    saveUsers(usersJSON)

    return {"id" : new_user["id"], "username" : new_user["username"]}

@router.get("/test")
async def test():
    return {"message": "users endpoint works"}
