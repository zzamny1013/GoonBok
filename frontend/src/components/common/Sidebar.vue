<template>
  <div>
    <img v-b-toggle.sidebar-1 align="left" alt="Vue logo" src="../../assets/logo.png" width="80">
    <b-sidebar id="sidebar-1" title="Sidebar" shadow>
      <div class="px-3 py-2">
        <img alt="Vue logo" src="../../assets/logo.png" width="80">
      </div>
      <div>
        <b-button @click="Home">Home</b-button>
        <b-card v-b-toggle.collapse-1 variant="primary">혜택분류</b-card>
        <b-collapse id="collapse-1" class="mt-0">
            <b-card-text @click="listBef()">전체</b-card-text>
            <b-card-text @click="listBef(0)">영화</b-card-text>
            <b-card-text @click="listBef(1)">테마파크</b-card-text>
            <b-card-text @click="listBef(2)">음식</b-card-text>
            <b-card-text @click="listBef(3)">숙박</b-card-text>
            <b-card-text @click="listBef(4)">레져</b-card-text>
            <b-card-text @click="listBef(5)">복지</b-card-text>
            <b-card-text @click="listBef(6)">기타</b-card-text>
        </b-collapse>
        <b-card v-b-toggle.collapse-2 variant="primary">적용대상</b-card>
        <b-collapse id="collapse-2" class="mt-2">
            <b-card-text @click="listBef(0)">간부</b-card-text>
            <b-card-text @click="listBef(0)">병사</b-card-text>
            <b-card-text @click="listBef(0)">예비군</b-card-text>
            <b-card-text @click="listBef(0)">민간인</b-card-text>
        </b-collapse>
		</div>
    </b-sidebar>
  </div>
</template>

<script>
export default {
	data() {
        return { };
	}
	,
	methods:{
		Home(){
			this.$router.push({path:'/',query:this.body});
		}
		,listBef(msg){
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
.b-sidebar{
    width : 250px;
}

.card-text{
    margin: 0 0 0 0;
    padding: 7px;
}
.card-text:hover{
    background-color: lightgray;
}
</style>