/*
{
            "uid": "로그인 아이디",
            "pw": "로그인 비밀번호",
            "name": "사람이름",
            "gid": "군번",
            "auth": "1=혜택카드를 올릴 수 있는 사람, 0=아닌사람",
            "is_admin" : "1=admin, 0=일반 사용자"
            "goon_type": 0=민간인, 1=육군, 2=해군, 3=공군, 4=국방부 직할부대,
            "is_soldier": 1=병사, 0=간부,
            "email": "이메일",
            "tel": "전화번호",
            "salt": "비밀번호 암호화에 사용되는값"
        }
*/

const users = {
    "users": [
        {
            "uid": "zzamny1013",
            "pw": "1q2w3e4r!",
            "name": "김재민",
            "gid": "20-76022576",
            "auth": 1,
            "is_admin": 1,
            "goon_type": 1,
            "is_soldier": 1,
            "email": "msyh0207@naver.com",
            "tel": "01077777777",
            "salt": "1111"
        },
        {
            "uid": "admin",
            "pw": "1q2w3e4r!",
            "name": "어드민",
            "gid": "111111",
            "auth": 1,
            "is_admin": 1,
            "goon_type": 1,
            "is_soldier": 0,
            "email": "admin@admin.com",
            "tel": "01088888888",
            "salt": "2222"
        },
        {
            "uid": "testuser",
            "pw": "1q2w3e4r!",
            "name": "테스트",
            "gid": "222222",
            "auth": 1,
            "is_admin": 0,
            "goon_type": 2,
            "is_soldier": 1,
            "email": "testuser@test.com",
            "tel": "01011111111",
            "salt": "3333"
        },
        {
            "uid": "user1",
            "pw": "1q2w3e4r!",
            "name": "김유저",
            "gid": "333333",
            "auth": 0,
            "is_admin": 0,
            "goon_type": 3,
            "is_soldier": 1,
            "email": "user1@test.com",
            "tel": "01011111111",
            "salt": "3333"
        },
        {
            "uid": "user2",
            "pw": "1q2w3e4r!",
            "name": "이유저",
            "gid": "444444",
            "auth": 0,
            "is_admin": 0,
            "goon_type": 4,
            "is_soldier": 1,
            "email": "user2@test.com",
            "tel": "01011111111",
            "salt": "3333"
        },
        {
            "uid": "user3",
            "pw": "1q2w3e4r!",
            "name": "박유저",
            "gid": "666666",
            "auth": 0,
            "is_admin": 0,
            "goon_type": 1,
            "is_soldier": 0,
            "email": "user3@test.com",
            "tel": "01011111111",
            "salt": "3333"
        },
        {
            "uid": "user4",
            "pw": "1q2w3e4r!",
            "name": "최유저",
            "gid": "555555",
            "auth": 0,
            "is_admin": 0,
            "goon_type": 2,
            "is_soldier": 0,
            "email": "user4@test.com",
            "tel": "01011111111",
            "salt": "3333"
        },
        {
            "uid": "user5",
            "pw": "1q2w3e4r!",
            "name": "강유저",
            "gid": "777777",
            "auth": 0,
            "is_admin": 0,
            "goon_type": 3,
            "is_soldier": 0,
            "email": "user5@test.com",
            "tel": "01011111111",
            "salt": "3333"
        },
        {
            "uid": "user6",
            "pw": "1q2w3e4r!",
            "name": "유유저",
            "gid": "888888",
            "auth": 0,
            "is_admin": 0,
            "goon_type": 4,
            "is_soldier": 0,
            "email": "user6@test.com",
            "tel": "01011111111",
            "salt": "3333"
        },
        {
            "uid": "user7",
            "pw": "1q2w3e4r!",
            "name": "관계자1",
            "gid": "000000",
            "auth": 1,
            "is_admin": 0,
            "goon_type": 0,
            "is_soldier": 0,
            "email": "kwankye1@test.com",
            "tel": "01011111111",
            "salt": "3333"
        },
        {
            "uid": "user8",
            "pw": "1q2w3e4r!",
            "name": "관계자2",
            "gid": "000000",
            "auth": 1,
            "is_admin": 0,
            "goon_type": 0,
            "is_soldier": 0,
            "email": "kwankye2@test.com",
            "tel": "01011111111",
            "salt": "3333"
        },
        
    ]
}

export default users;