<template>
	<div>
        <form>
            <input v-model="keyword" v-on:keyup.enter="SearchBenefit(keyword)" type="text" size="30">
            <b-button @click="SearchBenefit(keyword)" variant="secondary">Serch</b-button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            keyword : ""
         };
    },
    methods : {
        SearchBenefit(kw){
            var category = 'all';
            var rank = 'all';
            if(this.$route.query.category)
                category = this.$route.query.category
            if(this.$route.query.category)
                category = this.$route.query.category
            if(this.$route.query.rank)
                rank = this.$route.query.rank
            this.$router.push({path:'/board/listBef',query:{ category:category, rank:rank, keyword:kw }});
            console.log(rank)
        }
    }
}
</script>

<style scoped>
div{width:100%; text-align:center; position:relative; height:70px; border-bottom:1px solid #35495e}
div form {position:absolute; top:15px; right:40%;}
</style>