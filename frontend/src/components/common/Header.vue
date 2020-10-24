<template>
	<header>
		<h1><router-link to="/"><img alt="Vue logo" src="../../assets/logo.png" width="80"></router-link></h1>
		<div class="menuWrap">
			<ul class="menu">
				<li><b-button-group size="sm" >
				<b-button @click="listAddFn" color="#43b984">등록</b-button>
				<b-button @click="Home" color="#43b984">Home</b-button>
				<b-button @click="userFn" color="#43b984">김승운님</b-button>
				<b-button @click="userBef" color="#43b984">쿠폰함</b-button></b-button-group></li>
			</ul>
		</div>
		<div>
			<b-button-group>
				<b-button @click="Home">Home</b-button>
				<b-dropdown right split text="혜택">
				<b-dropdown-item>전체</b-dropdown-item>
				<b-dropdown-item>영화</b-dropdown-item>
				<b-dropdown-item>테마파크</b-dropdown-item>
				<b-dropdown-item>음식</b-dropdown-item>
				<b-dropdown-item>숙박</b-dropdown-item>
				<b-dropdown-item>레져</b-dropdown-item>
				<b-dropdown-item>복지</b-dropdown-item>
				<b-dropdown-item>기타</b-dropdown-item>
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
	methods:{
		listAddFn(){
			this.$router.push({path:'/board/Write',query:this.body});
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
		,fnAddProc() { //등록 프로세스
			if(!this.subject) { //제목이 없다면 값을 입력하라고 알려준다.
				alert("제목을 입력해 주세요");
				this.$refs.subject.focus(); //방식으로 선택자를 찾는다.
				return;
			}

			this.form = { //backend로 전송될 POST 데이터
				board_code:this.board_code
				,subject:this.subject
				,cont:this.cont
				,id:this.id
			} 
			
			this.$axios.post('http://localhost:3000/api/board',this.form)
			.then((res)=>{
				if(res.data.success) {
					alert('등록되었습니다.');
					this.fnList();
				} else {
					alert("실행중 실패했습니다.\n다시 이용해 주세요");
				}
			})
			.catch((err)=>{
				console.log(err);
			})
		}
	}	
}
</script>

<style scoped>
header{width:100%; text-align:center; position:relative; height:140px; border-bottom:1px solid #35495e}
header h1{position:absolute; top:0; left:100px;}
header ul.menu:after{display:block; clear:both; content:'';}
header ul.menu{position:absolute; top:50px; right:10px;}
header ul.menu li{float:left; padding:1px 20px; list-style:none;}

a{text-decoration:none; color:#333;}
</style>