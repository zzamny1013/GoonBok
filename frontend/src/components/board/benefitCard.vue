<template>
	<div class="mt-4">
    <b-card img-src="https://placekitten.com/300/300" img-width="200px" img-alt="Card image" img-left class="mb-3">
      <b-card-text>
        <div class="befCom">{{benefitInfo.company}}</div>
        {{benefitInfo.title}}
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
.mt-4 .mb-3 .befCom { font-size: 18px; font-weight: bolder; }
</style>