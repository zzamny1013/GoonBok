<template>
	<header>
		<h1><router-link to="/"><img alt="Vue logo" src="../../assets/logo.png" width="80"></router-link></h1>
		<div class="menuWrap">
			<ul class="menu">
				<li><b-button-group size="sm">
				<b-button @click="addBef" >등록</b-button>
				<b-button @click="Home">Home</b-button>
				<b-button @click="userFn">김승운님</b-button>
				<b-button @click="userBef">쿠폰함</b-button></b-button-group></li>
			</ul>
		</div>
		<div>
			<b-button-group>
				<b-button @click="Home">Home</b-button>
				<b-dropdown right split text="전체 혜택" @click="Bef()">
				<b-dropdown-item @click="Bef(0)">영화</b-dropdown-item>
				<b-dropdown-item @click="Bef(1)">테마파크</b-dropdown-item>
				<b-dropdown-item @click="Bef(2)">음식</b-dropdown-item>
				<b-dropdown-item @click="Bef(3)">숙박</b-dropdown-item>
				<b-dropdown-item @click="Bef(4)">레져</b-dropdown-item>
				<b-dropdown-item @click="Bef(5)">복지</b-dropdown-item>
				<b-dropdown-item @click="Bef(6)">기타</b-dropdown-item>
				<b-dropdown-divider></b-dropdown-divider>
				</b-dropdown>
				<b-dropdown right text="국군">
				<b-dropdown-item>육군</b-dropdown-item>
				<b-dropdown-item>해군</b-dropdown-item>
				<b-dropdown-item>공군</b-dropdown-item>
				</b-dropdown>
			</b-button-group>
		</div>
	</header>
</template>

<script>
export default {
	data() {

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
		,Bef(msg){
			this.$router.push({path:'/board/listBef',query:this.body});
			this.serchBef(msg);
		}
		,serchBef(msg){
			this.$router.push({path:'/board/listBef',query:this.body});
			alert(msg);
		}
		
	}	
}
</script>

<style scoped>
header{width:100%; text-align:center; position:relative; height:150px; border-bottom:1px solid #35495e}
header h1{position:absolute; top:10; left:100px;}
header ul.menu:after{display:block; clear:both; content:'';}
header ul.menu{position:absolute; top:70px; right:10px;}
header ul.menu li{float:left; padding:1px 20px; list-style:none;}

a{text-decoration:none; color:#333;}
</style>