from pydantic import BaseModel
from typing import Optional
import json

#forum class
class Post(BaseModel):
    tittle: str
    content: str
    published: bool= True
    rating: Optional[int] = None

def getMyPosts():
    with open("Forum\Db\MyPostsDb.json",'r+') as file:
        return json.load(file)
    
def saveMyPosts(newPosts):
    with open("Forum\Db\MyPostsDb.json","w+") as file:
        return file.write(json.dumps(newPosts, indent=4))
