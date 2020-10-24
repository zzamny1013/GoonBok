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
						<col width="600px" />
					</colgroup>
					<tr>
						<th>회사</th>
						<td><input type="text" v-model="company" ref="company" size="12" placeholder="회사"/></td>
						<th>제목</th>
						<td><input type="text" v-model="title" ref="title" size="95" placeholder="Title"/></td>

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
							<option value="0">전체</option>
							<option value="1">육군</option>
							<option value="2">해군</option>
							<option value="3">공군</option>
							<option value="4">민간인</option>
						</select>
						
						<select name="is_soldier">
							<option value="0">전체</option>
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
			<a href="javascript:;" @click="listBef" class="btn">목록</a>
			<a href="javascript:;" @click="fnAddBef" class="btnAdd btn">등록</a>
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
			goon_type:'',
			is_soldier:'',
			category:'',
			detail:'',
			start_date:'',
			end_date:'',
			icon_path:'',
			img_path:'',
			link:'',
			form:'' //form 전송 데이터
		}
	}
	,methods:{
		listBef(){ //혜택리스트 화면으로 이동 함수
			this.$router.push({path:'./listBef',query:this.body});
			
		}
		,fnAddBef() { //등록 프로세스
			if(!this.company) { //제목이 없다면 값을 입력하라고 알려준다.
				alert("제목을 입력해 주세요");
				this.$refs.company.focus(); //방식으로 선택자를 찾는다.
				return;
			}

			this.form = { //backend로 전송될 POST 데이터
				bid:this.bid,
				title:this.title,
				company:this.company,
				goon_type:this.goon_type,
				is_soldier:this.is_soldier,
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