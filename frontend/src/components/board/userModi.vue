<template>
	<div>
		<h2>유저</h2>
		<div v-for="item of filteredUser" :key="item.uid" :userInfo="item">
		</div>
	</div>
</template>

<script>
import userInfom from '../board/userInfom';

export default {
	data() {
		return {
			users: [
				{
					uid: "zzamny1013",
					pw: "1q2w3e4r!",
					name: "김재민",
					gid: "20-76022576",
					auth: 1,
					is_admin: 1,
					goon_type: 1,
					is_soldier: 1,
					email: "msyh0207@naver.com",
					tel: "01077777777",
					salt: "1111"
				},
				{
					uid: "admin",
					pw: "1q2w3e4r!",
					name: "어드민",
					gid: "111111",
					auth: 1,
					is_admin: 1,
					goon_type: 1,
					is_soldier: 0,
					email: "admin@admin.com",
					tel: "01088888888",
					salt: "2222"
				},
				{
					uid: "testuser",
					pw: "1q2w3e4r!",
					name: "테스트",
					gid: "222222",
					auth: 1,
					is_admin: 0,
					goon_type: 2,
					is_soldier: 1,
					email: "testuser@test.com",
					tel: "01011111111",
					salt: "3333"
				},
				{
					uid: "user1",
					pw: "1q2w3e4r!",
					name: "김유저",
					gid: "333333",
					auth: 0,
					is_admin: 0,
					goon_type: 3,
					is_soldier: 1,
					email: "user1@test.com",
					tel: "01011111111",
					salt: "3333"
				},
				{
					uid: "user2",
					pw: "1q2w3e4r!",
					name: "이유저",
					gid: "444444",
					auth: 0,
					is_admin: 0,
					goon_type: 4,
					is_soldier: 1,
					email: "user2@test.com",
					tel: "01011111111",
					salt: "3333"
				},
				{
					uid: "user3",
					pw: "1q2w3e4r!",
					name: "박유저",
					gid: "666666",
					auth: 0,
					is_admin: 0,
					goon_type: 1,
					is_soldier: 0,
					email: "user3@test.com",
					tel: "01011111111",
					salt: "3333"
				},
				{
					uid: "user4",
					pw: "1q2w3e4r!",
					name: "최유저",
					gid: "555555",
					auth: 0,
					is_admin: 0,
					goon_type: 2,
					is_soldier: 0,
					email: "user4@test.com",
					tel: "01011111111",
					salt: "3333"
				},
				{
					uid: "user5",
					pw: "1q2w3e4r!",
					name: "강유저",
					gid: "777777",
					auth: 0,
					is_admin: 0,
					goon_type: 3,
					is_soldier: 0,
					email: "user5@test.com",
					tel: "01011111111",
					salt: "3333"
				},
				{
					uid: "user6",
					pw: "1q2w3e4r!",
					name: "유유저",
					gid: "888888",
					auth: 0,
					is_admin: 0,
					goon_type: 4,
					is_soldier: 0,
					email: "user6@test.com",
					tel: "01011111111",
					salt: "3333"
				},
				{
					uid: "user7",
					pw: "1q2w3e4r!",
					name: "관계자1",
					gid: "000000",
					auth: 1,
					is_admin: 0,
					goon_type: 0,
					is_soldier: 0,
					email: "kwankye1@test.com",
					tel: "01011111111",
					salt: "3333"
				},
				{
					uid: "user8",
					pw: "1q2w3e4r!",
					name: "관계자2",
					gid: "000000",
					auth: 1,
					is_admin: 0,
					goon_type: 0,
					is_soldier: 0,
					email: "kwankye2@test.com",
					tel: "01011111111",
					salt: "3333"
				},
				
			]
		};
	},
	computed : {
        filteredUser(){
            var arr = [];
            var uid = this.$route.query.uid
            alert(uid);
            for(var item of this.user)
            {
                var flagUid = (!uid);
                if(uid)
                   flagUid = (item.uid.indexOf(uid) != -1);
                if(flagUid)
                    arr.push(item);
            }
            return arr;
        }
    },
	components:{
		userInfom
	}
}
</script>

<style scoped>

</style>