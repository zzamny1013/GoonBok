<template>
	<div class="mt-4">
    <h4>{{benefitInfo.title}}</h4>
    <b-card img-src="https://placekitten.com/300/300" img-width="200px" img-alt="Card image" img-left class="mb-3">
      <b-card-text>
        {{benefitInfo.content}}
      </b-card-text>
      <p> 적용대상 : {{benefitInfo.target}} </p>
    </b-card>
	</div>
</template>
<script>
export default {
  props:['benefitInfo']
}
</script>

<style scoped>

</style>