<template>
	<div>
		<h1>혜택카드 등록</h1>

		<div class="AddWrap">
			<form>
				<table class="tbAdd">
					<colgroup>
						<col width="100px" />
						<col width="300px" />
						<col width="100px" />
						<col width="300px" />
						<col width="100px" />
						<col width="300px" />
					</colgroup>
					
					<tr>
						<th>제목</th>
						<td colspan="5"><input type="text" v-model="title" ref="title" size="140" placeholder="Title"/></td>

					</tr>
					<tr>
						<th>회사</th>
						<td><input type="text" v-model="company" ref="company" size="30" placeholder="회사"/></td>
						<th>시작일</th>
						<td><b-form-datepicker v-model="start_date" class="mb-2"></b-form-datepicker></td>
						<th>종료일</th>
						<td>
						<b-form-datepicker v-model="end_date" class="mb-2"></b-form-datepicker>
						<!--<input type="date" v-model="end_date" ref="end_date" size="27"/>-->
						</td>
					</tr>
					<tr>
						<th>내용</th>
						<td colspan="5"><textarea v-model="detail" ref="detail"></textarea></td>
					</tr>
					<tr>
						<th>신분</th>
						<td colspan="3"><pre>
						<label><input type="checkbox" v-model.number="target1" true-value="1" false-value="0"  @change="targetAdd()">전체</label>   <label><input type="checkbox" v-model.number="target2" true-value="1" false-value="0" @change="targetAdd()">간부</label>   <label><input type="checkbox" v-model.number="target3" true-value="1" false-value="0" @change="targetAdd()">병사</label>   <label><input type="checkbox" v-model.number="target4" true-value="1" false-value="0" @change="targetAdd()">예비군</label>   
						<input type="hidden" v-model.number="target0" value="">
						<span>{{target0}}</span>
						<input type="hidden" v-model.number="target" value=""></pre>
						</td>
					</tr>
					<tr>
						<th>Icon-path</th>
						<td><input type="text" v-model="icon_path" placeholder="icon_path 입력" size="30"></td>
						<th>IMG-path</th>
						<td><input type="text" v-model="img_path" placeholder="img_path 입력" size="30"></td>
						<th>link</th>
						<td><input type="text" v-model="link" placeholder="link 입력" size="30"></td>
					</tr>
				</table>
			</form>
		</div>

		<div class="btnWrap">
			<a href="javascript:;" @click="listBef" class="btn">목록</a>
			<a href="javascript:;" @click="test" class="btnAdd btn">등록</a>
		</div>	
	</div>
</template>

<script>
export default {
	data() { //변수 생성
		return{
			bid:'news',
			title:'',
			company:'',
			target:'',
			category:'',
			detail:'',
			start_date:'',
			end_date:'',
			icon_path:'',
			img_path:'',
			link:'',
			target0:'0000',
			target1:'0',
			target2:'0',
			target3:'0',
			target4:'0',
			form:'' //form 전송 데이터
		}
	}
	,methods:{
		test(){
			alert(this.start_date+ ","+ this.end_date + "\n,"
			+ this.bid + ","+ this.title + ","+ this. company + "\n,"
			+ this.icon_path + ","+ this.img_path + ","+ this.link + "\n,"
			+ this.target0 + ","+ this.category + ","+ this.detail);
		}
		,targetAdd(){
			this.target0 = this.target1 + this.target2 + this.target3 + this.target4; //타겟0은 보낼 값, 1은 전체의미 이후 2,3,4 는 이진수의개념으로 이해
			//alert(this.target0);
		}
		,listBef(){ //혜택리스트 화면으로 이동 함수
			this.$router.push({path:'./listBef',query:this.body});
		}
		,fnAddBef() { //등록 프로세스
			if(!this.company) { //제목이 없다면 값을 입력하라고 알려준다.
				alert("제목을 입력해 주세요");
				this.$refs.company.focus(); //방식으로 선택자를 찾는다.
				return;
			}

			this.form = { //backend로 전송될 POST 데이터
				title:this.title,
				company:this.company,
				target:this.target0,
				category:this.category,
				detail:this.detail,
				start_date:this.start_date,
				end_date:this.end_date,
				icon_path:this.icon_path,
				img_path:this.img_path,
				link:this.link
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
	.tbAdd{border-top:1px solid #888;}
	.tbAdd th, .tbAdd td{border-bottom:1px solid #eee; padding:5px 0;}
	.tbAdd td{padding:10px 10px; box-sizing:border-box;}
	.tbAdd td input{min-height:30px; box-sizing:border-box; padding:0 10px;}
	.tbAdd td textarea{width:100%; min-height:300px; padding:10px; box-sizing:border-box;}
	.btnWrap{text-align:center; margin:20px 0 0 0;}
	.btnWrap a{margin:0 10px;}
	.btnAdd {background:#43b984}
	.btnDelete{background:#f00;}
</style>