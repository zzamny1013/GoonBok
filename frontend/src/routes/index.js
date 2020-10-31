import Vue from 'vue';
import Router from 'vue-router';
import main from '@/components/main.vue'; //메인 컴포넌트 호출
import userBef from '@/components/board/userBef'; //유저쿠폰함 컴포넌트 호출
import addBef from '@/components/board/addBef'; //혜택등록 컴포넌트 호출
import listBef from '@/components/board/listBef'; //혜택리스트 컴포넌트 호출

Vue.use(Router); //vue 라우터 사용

export default new Router({ //라우터 연결
	routes:[
		{
			path:'/'
			,name:main
			,component:listBef
		}
		,{
			path:'/board/userBef'
			,name:userBef
			,component:userBef
		}
		,{
			path:'/board/addBef'
			,name:addBef
			,component:addBef
		}
		,{
			path:'/board/listBef'
			,name:listBef
			,component:listBef
		}
	]
})