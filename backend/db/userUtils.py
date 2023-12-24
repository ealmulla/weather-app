import json 
import uuid

def getUsers():
    with open("db/userDN.json","r+") as file:
        return json.load(file)

def saveUsers(newUsers):
    with open("db/usersDB.json", "w+") as file:
        file.write( json.dumps(newUsers, indent=4)) 
        