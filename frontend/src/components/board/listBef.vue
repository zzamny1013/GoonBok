<template>
	<div>
        <benefitCard v-for="item of filteredBenefits" :key="item.title" :benefitInfo="item"></benefitCard><br>
	</div>
</template>

<script>
import benefitCard from './benefitCard';

export default {
    data() {
        return {
            benefits : [
                {
                    title: "VIPS 할인",
                    content: "VIPS 20% 할인(제휴카드 혜택 별도)",
                    target: ["병사", "간부"],
                    category : "영화"
                },
                {
                    title: "에버랜드 무료입장",
                    content: "휴가증 지참 시 애버랜드 무료입장",
                    target: ["병사", "간부"],
                    category : "테마파크"
                },
                {
                    title: "개굴개굴",
                    content: "예비군만 가능한 혜택입니다(테스트용)",
                    target: ["예비군"],
                    category : "영화"
                },
                {
                    title: "간부 Only",
                    content: "간부만 가능한 혜택입니다(테스트용)",
                    target: ["간부"],
                    category : "음식"
                },
                {
                    title: "병사 Only",
                    content: "병사만 가능한 혜택입니다(테스트용)",
                    target: ["병사"],
                    category : "음식"
                },
                {
                    title: "No 현역",
                    content: "민간인과 예비군만 가능한 혜택입니다(테스트용)",
                    target: ["민간인", "예비군"],
                    category : "숙박"
                }
            ]
        }
    },
    computed : {
        filteredBenefits(){
            var arr = [];
            for(var item of this.benefits)
            {
                var flag1 = (this.$route.query.category=='all') || (item.category == this.$route.query.category);
                var flag2 = (this.$route.query.rank=='all') || (item.target.indexOf(this.$route.query.rank) != -1);
                if(flag1 && flag2)
                    arr.push(item);
            }
            return arr;
        }
    },
    components : {
        benefitCard
    }
}
</script>

<style scoped>

</style>