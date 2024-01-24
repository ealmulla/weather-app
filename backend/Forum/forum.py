from fastapi import APIRouter, HTTPException, status
from pydantic import BaseModel
from random import randrange
from Forum.Db.forumUtils import getMyPosts, saveMyPosts,Post

router =APIRouter()

myPosts = getMyPosts()

#finding post by id
def findPost(id):
    for i in myPosts:
        if i["id"] == id:
            return i

# displaying all posts
@router.get("/posts")
def getAllPosts():
    return{"data":myPosts}

@router.post('./createPost',status_code=status.HTTP_201_CREATED)
def createPost(post:Post):
    global myPosts
    postsDict = post.dict()
    #craeting a random id for the post
    postsDict["id"] = randrange(0,100000)
    myPosts.append(postsDict)
    print("My posts one:",myPosts)
    saveMyPosts(myPosts)
    return{"data":postsDict}


@router.get("/findpost/{id}")
def findPostById(id:int):
    
    post=findPost(id)
    return{"data":post}