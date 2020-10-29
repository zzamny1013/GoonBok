<template>
	<div>
		<h2>유저</h2>
		<div>
			{{userInfo.uid}}
		</div>
	</div>
</template>

<script>
export default {
  props:['userInfo']
}
</script>

<style scoped>

</style>