from fastapi import FastAPI, APIRouter, Depends
from fastapi.middleware.cors import CORSMiddleware
from dependencies.database import provide_session, Session
from domains.users.dto import LoginUser, User
from domains.users.models import UserModel
from dependencies.auth import verify_password,create_access_token, hash_password


name = "users"
router = APIRouter()

@router.post("/login")
def login_user(lg_user: LoginUser, db: Session = Depends(provide_session)):
    user = db.query(UserModel).filter(UserModel.id == lg_user.id).first()
    if user:
        if verify_password(lg_user.password, user.password) :
            s="로그인 성공"
            token = create_access_token({"sub": "id"})
            return s, token
        else:
            s="비밀번호 불일치"
    else:
        s="일치하는 학번 없음"
    
    return s
    

@router.post("/register", response_model=User)
def register_user(user: User, db: Session = Depends(provide_session)):
    # 회원가입 로직
    db_user = UserModel(
        id=user.id,
        name=user.name,
        nickname=user.nickname,
        password=hash_password(user.password),
        birth_date=user.birth_date
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user