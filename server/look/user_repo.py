from typing import Iterator, Tuple

from .model import User, Face


class UserRepository:
    def __init__(self) -> None:
        pass

    def get_users(self) -> Iterator[User]:
        users = User.query.all()
        for user in users:
            yield user

    def find_by_face_id(self, face_id: str) -> Tuple[User, bool]:
        face = Face.query.filter_by(face_id=face_id).first()
        if face is None:
            return (User(), False)

        return (User.query.filter_by(id=face.user_id).first(), True)
