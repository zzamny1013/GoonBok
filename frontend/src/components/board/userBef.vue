<template>
	<div>
		<h2>내가 찜한 혜택 리스트</h2>
		<div>
			<b-button variant="primary">Primary</b-button>
			<b-button variant="secondary">Secondary</b-button>
			<b-button variant="success">Success</b-button>
			<b-button variant="danger">Danger</b-button>
			<b-button variant="warning">Warning</b-button>
			<b-button variant="info">Info</b-button>
			<b-button variant="light">Light</b-button>
			<b-button variant="dark">Dark</b-button>
		</div>
	</div>
</template>

<script>
export default {
	methods:{
		getList() {
			this.$axios.get("http://localhost:3000/api/board")
			.then((res)=>{
				console.log(res);
			})
			.then((err)=>{
				console.log(err);
			})
		}
	}
}
</script>

<style scoped>

</style>