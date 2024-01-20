from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from Forum.Db.forumUtils import getMyPosts, saveMyPosts,Post

router =APIRouter()

myPosts = getMyPosts()

#finding post by id
def findPost(id):
    for i in myPosts:
        if i["id"] == id:
            return i

# displaying all posts
@router.get("/posts",response_model=Post)
def getAllPosts():
    return{"data":myPosts}