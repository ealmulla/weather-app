from pydantic import BaseModel
from typing import Optional
import json

#forum class
class Post(BaseModel):
    title: str
    content: str
    published: bool= True
    rating: Optional[int] = None

def getMyPosts():
    with open("Forum/Db/myPostsDb.json",'r+') as file:
        return json.load(file)
    
def saveMyPosts(newPosts):
    with open("Forum/Db/MyPostsDb.json", "w") as file:
            json.dump(newPosts, file, indent=4)




