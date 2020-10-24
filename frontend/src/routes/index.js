import Vue from 'vue';
import Router from 'vue-router';
import main from '@/components/main.vue'; //메인 컴포넌트 호출
import userBef from '@/components/board/userBef'; //게시판 리스트 컴포넌트 호출
import Write from '@/components/board/Write'; //게시판 리스트 컴포넌트 호출

Vue.use(Router); //vue 라우터 사용

export default new Router({ //라우터 연결
	routes:[
		{
			path:'/'
			,name:main
			,component:main
		}
		,{
			path:'/board/userBef'
			,name:userBef
			,component:userBef
		}
		,{
			path:'/board/write'
			,name:Write
			,component:Write
		}
		
	]
})