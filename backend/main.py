from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api import users
from Forum import forum

app = FastAPI()

orgins = [
    "http://localhost",
    "https://localhost",
    "http://localhost:3000",
    "https://localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=orgins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

app.include_router(users.router, prefix="/users", tags=["Users"])
app.include_router(forum.router, prefix="/forum", tags=["Forum"])

@app.get("/")
async def root():
    return{"message" : "Hello World"}
