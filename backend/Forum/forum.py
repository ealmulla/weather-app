from fastapi import APIRouter, HTTPException, status,Response
from pydantic import BaseModel
from random import randrange
from Forum.Db.forumUtils import getMyPosts, saveMyPosts,Post,getUserById

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
    return{"posts":myPosts}


@router.post('/createPost',status_code=status.HTTP_201_CREATED)
def createPost(newData:Post):
    users = getUserById(newData.user_id)
    global myPosts
    postsDict = newData.dict()
    #craeting a random id for the post
    postsDict["postId"] = randrange(0,100000)
    myPosts.append(postsDict)
    saveMyPosts(myPosts)
    return{"new_post":postsDict}


@router.get("/findpost/{id}")
def findPostById(id:int):
    
    post=findPost(id)
    return{"post":post}

def findIndexPosts(id):
    for i,p in enumerate(myPosts):
        if p["id"] == id:
            return i 

@router.delete("/posts/{id}", status_code=status.HTTP_204_NO_CONTENT)
def deletePosts(id:int):
    postIndex = findIndexPosts(id)
    #If posts not found
    if postIndex == None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"posts with id: {id} was not found.")
    myPosts.pop(postIndex)
    return Response(status_code=status.HTTP_204_NO_CONTENT)