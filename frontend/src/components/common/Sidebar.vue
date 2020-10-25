<template>
  <div>
    <div align="left" style="margin:25px 0 0 50px;"><b-button v-b-toggle.sidebar-1 pill variant="success">SideBar</b-button></div>
    <b-sidebar id="sidebar-1" title="Sidebar" shadow>
      <div class="px-3 py-2">
        <img alt="Vue logo" src="../../assets/logo.png" width="80">
      </div>
      <div>
        <b-button variant="outline-secondary" @click="Home">Home</b-button>
        <b-card v-b-toggle.collapse-1 variant="primary">혜택분류</b-card>
        <b-collapse id="collapse-1" class="mt-0">
            <b-card-text @click="listBef('all', 'all')">전체</b-card-text>
            <b-card-text @click="listBef('영화', 'all')">영화</b-card-text>
            <b-card-text @click="listBef('테마파크', 'all')">테마파크</b-card-text>
            <b-card-text @click="listBef('음식', 'all')">음식</b-card-text>
            <b-card-text @click="listBef('숙박', 'all')">숙박</b-card-text>
            <b-card-text @click="listBef('레저', 'all')">레져</b-card-text>
            <b-card-text @click="listBef('복지', 'all')">복지</b-card-text>
            <b-card-text @click="listBef('기타', 'all')">기타</b-card-text>
        </b-collapse>
        <b-card v-b-toggle.collapse-2 variant="primary">적용대상</b-card>
        <b-collapse id="collapse-2" class="mt-2">
            <b-card-text @click="listBef('all', '간부')">간부</b-card-text>
            <b-card-text @click="listBef('all', '병사')">병사</b-card-text>
            <b-card-text @click="listBef('all', '예비군')">예비군</b-card-text>
            <b-card-text @click="listBef('all', '민간인')">민간인</b-card-text>
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
		,listBef(category, rank){
			this.$router.push({path:'/board/listBef',query:{ category:category, rank:rank }});
            console.log(rank)
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