<template>
	<header>
		<Sidebar />
		<img alt="Vue logo" src="../../assets/logo.png" width="150">
		<h1>군복</h1>
		<h4><div><span style="color: #42b983;">군</span>인종합<span style="color: #42b983;">복</span>지포털</div></h4>
        <div class="menuWrap">
			<ul class="menu">
				<li>
					<div v-if(user.is_Admin)><b-button variant="success" @click="addBef" size="sm">혜택추가</b-button></div>
				</li>
				<li><b-button-group size="sm">
				<b-button variant="success" @click="Home">Home</b-button>
				<b-button variant="success" @click="userFn">김승운님</b-button>
				<b-button variant="success" @click="userBef">쿠폰함</b-button>
				<b-button variant="success" @click="userModi">정보수정</b-button>
				<b-button variant="success" @click="logout">로그아웃</b-button>
				</b-button-group></li>
			</ul>
		</div>
	</header>
</template>

<script>
import Sidebar from './Sidebar';

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
	components:{
		Sidebar
	}
	,
	methods:{
		addBef(){
			this.$router.push({path:'/board/addBef',query:this.body});
		}
		,Home(){
			this.$router.push({path:'/',query:this.body});
		}
		,userFn(){
			this.$router.push({path:'/',query:this.body});
		}
		,userBef(){
			this.$router.push({path:'/board/userBef',query:this.body});
		}
		,userModi(){
			this.$router.push({path:'/board/userBef',query:this.body});
		}
		,logout() {

		}
	}	
}
</script>

<style scoped>
header{width:100%; text-align:center; position:relative; height:230px; border-bottom:1px solid #35495e}
header img {position:absolute; top:10px; right:60%;}
header ul.menu:after{display:block; clear:both; content:'';}
header ul.menu{position:absolute; top:150px; right:10px;}
header ul.menu li{float:left; padding:1px 20px; list-style:none;}

a{text-decoration:none; color:#333;}
</style>