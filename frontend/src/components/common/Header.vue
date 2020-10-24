<template>
	<header>
		<Sidebar />
		<h1> 군인종합복지포털(군복) </h1>
        <div class="menuWrap">
			<ul class="menu">
				<li><b-button-group size="sm">
				<b-button @click="addBef" >등록</b-button>
				<b-button @click="Home">Home</b-button>
				<b-button @click="userFn">김승운님</b-button>
				<b-button @click="userBef">쿠폰함</b-button></b-button-group></li>
			</ul>
		</div>
	</header>
</template>

<script>
import Sidebar from './Sidebar';

export default {
	data() {
		return { };
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
	}	
}
</script>

<style scoped>
header{width:100%; text-align:center; position:relative; height:150px; border-bottom:1px solid #35495e}
header h1{padding: 20px}
header ul.menu:after{display:block; clear:both; content:'';}
header ul.menu{position:absolute; top:70px; right:10px;}
header ul.menu li{float:left; padding:1px 20px; list-style:none;}

a{text-decoration:none; color:#333;}
</style>