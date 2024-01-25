import json

def getUsers():
    with open("UserDb/usersDB.json", "r+") as file:
        return json.load(file)


def saveUsers(newUsers):
    with open("UserDb/usersDB.json", "w+") as file:
        file.write(json.dumps(newUsers, indent=4))
