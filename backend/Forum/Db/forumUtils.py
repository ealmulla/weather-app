from pydantic import BaseModel
from typing import Optional
from UserDb.userUtils import getUsers
import json

#forum class
class Post(BaseModel):
    user_id: str
    title: str
    content: str
    published: bool= True
    rating: Optional[int] = None

def getUserById(id):
    users = getUsers()
    for user in users["users"]:
        if id == users["id"]:
            return user

def getMyPosts():
    with open("Forum/Db/myPostsDb.json",'r+') as file:
        return json.load(file)
    
def saveMyPosts(newPosts):
    with open("Forum/Db/MyPostsDb.json", "w") as file:
            json.dump(newPosts, file, indent=4)





