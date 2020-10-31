<template>
	<div class="mt-4">
    <b-card v-if="benefitInfo.img_path" :img-src="benefitInfo.img_path" img-width="200px" img-alt="Card image" img-left class="mb-3">
      <b-card-text>
        <div class="befCom">[{{benefitInfo.category}}]{{benefitInfo.company}}</div>
        <h5>{{benefitInfo.title}}</h5>
        <p>{{benefitInfo.detail}}</p>
      </b-card-text>
      <p> 적용대상 : {{benefitInfo.target}} </p>
    </b-card>
    <b-card v-else img-src="https://placekitten.com/300/300" img-width="200px" img-alt="Card image" img-left class="mb-3">
      <b-card-text>
        <div class="befCom">[{{benefitInfo.category}}]{{benefitInfo.company}}</div>
        <h5>{{benefitInfo.title}}</h5>
        <p>{{benefitInfo.detail}}</p>
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