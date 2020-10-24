<template>
	<div>
		<h1>혜택카드 등록</h1>

		<div class="AddWrap">
			<form>
				<table class="tbAdd">
					<colgroup>
						<col width="40px" />
						<col width="160px" />
						<col width="40px" />
						<col width="*" />
					</colgroup>
					<tr>
						<th>회사</th>
						<td><input type="text" v-model="company" ref="company" size="12" placeholder="회사"/></td>
						<th>제목</th>
						<td><input type="text" v-model="title" ref="company" size="75" placeholder="Title"/></td>

					</tr>
					<tr>
						<th>기간설정</th>
						<td colspan="3"><pre>시작일 : <input type="date" v-model="start_date" ref="start_date" size="15" />      종료일 : <input type="date" v-model="end_date" ref="end_date" size="15"/></pre></td>
					</tr>
					<tr>
						<th>내용</th>
						<td colspan="3"><textarea v-model="detail" ref="detail"></textarea></td>
					</tr>
					<tr>
						<th>신분</th>
						<td colspan="3">
						<select name="goon_type">
							<option value="1">육군</option>
							<option value="2">해군</option>
							<option value="3">공군</option>
							<option value="4">민간인</option>
						</select>
						
						<select name="is_soldier">
							<option value="1">간부</option>
							<option value="2">병사</option>
							<option value="3">예비군</option>
							<option value="4">민간인</option>
						</select>
						</td>
					</tr>
					<tr>
						<th>로고첨부</th>
					</tr>
				</table>
			</form>
		</div>

		<div class="btnWrap">
			<a href="javascript:;" @click="fnList" class="btn">목록</a>
			<a href="javascript:;" @click="fnAddProc" class="btnAdd btn">등록</a>
		</div>	
	</div>
</template>

<script>
export default {
	data() { //변수 생성
		return{
			board_code:'news'
			,title:''
			,cont:''
			,id:'admin'
			,form:'' //form 전송 데이터
		}
	}
	,methods:{
		fnList(){ //리스트 화면으로 이동 함수
			this.$router.push({path:'./list',query:this.body});
			
		}
		,fnAddProc() { //등록 프로세스
			if(!this.company) { //제목이 없다면 값을 입력하라고 알려준다.
				alert("제목을 입력해 주세요");
				this.$refs.company.focus(); //방식으로 선택자를 찾는다.
				return;
			}

			this.form = { //backend로 전송될 POST 데이터
				board_code:this.board_code
				,company:this.company
				,detail:this.detail
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