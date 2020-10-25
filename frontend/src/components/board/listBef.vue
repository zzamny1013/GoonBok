<template>
	<div>
        <benefitCard v-for="item of filteredBenefits" :key="item.company" :benefitInfo="item"></benefitCard><br>
	</div>
</template>

<script>
import benefitCard from './benefitCard';

export default {
    data() {
        return {
            benefits : [
                {
                    company: "VIPS",
                    title: "VIPS 20% 할인(제휴카드 혜택 별도)",
                    detail: "detail 추가 필요",
                    target: ["병사", "간부"],
                    category : "영화"
                },
                {
                    company: "에버랜드",
                    title: "휴가증 지참 시 애버랜드 무료입장",
                    detail: "detail 추가 필요",
                    target: ["병사", "간부"],
                    category : "테마파크"
                },
                {
                    company: "CGV",
                    title: "예비군만 가능한 혜택입니다(테스트용)",
                    detail: "detail 추가필요",
                    target: ["예비군"],
                    category : "영화"
                },
                {
                    company: "아웃백",
                    title: "간부만 가능한 혜택입니다(테스트용)",
                    detail: "detail 추가필요",
                    target: ["간부"],
                    category : "음식"
                },
                {
                    company: "음식점",
                    title: "병사만 가능한 혜택입니다(테스트용)",
                    detail: "detail 추가필요",
                    target: ["병사"],
                    category : "음식"
                },
                {
                    company: "호텔스컴바인",
                    title: "민간인과 예비군만 가능한 혜택입니다(테스트용)",
                    detail: "detail 추가 필요",
                    target: ["민간인", "예비군"],
                    category : "숙박"
                },
                {
                    bid: "1",
                    title: "빕스가 대한민국 군인 여러분을 응원합니다.",
                    company: "VIPS",
                    target: ["병사", "간부"],
                    category: "식당",
                    detail: "스테이크 30%할인",
                    start_date: "2020-10-01",
                    end_date: "2022-09-30",
                    icon_path: "FE에서 수정하십쇼",
                    img_path: "FE에서 수정하십쇼",
                    link: "https://www.ivips.co.kr:7002/event/evtHotEventPrtTpl.asp?eventkey=247&pageseq=1"
                },
                {
                    bid: "2",
                    title: "[자생한방병원] 군인공제회원 보약 특별 이벤트 ('20. 9.9 ~ 10. 28)",
                    company: "자생한방병원",
                    target: ["간부", "병사", "예비군"],
                    category: "복지",
                    detail: "디테일 추가 필요",
                    start_date: "2020-09-09",
                    end_date: "2020-10-28",
                    icon_path: "FE에서 수정하십쇼",
                    img_path: "FE에서 수정하십쇼",
                    link: "https://welfare.mmaa.or.kr/condo/web/notice/event_detail.jsp?board_id=1&titleid=120"
                },
                {
                    bid: "6",
                    title: "국군장병을 위한 시력교정술 혜택",
                    company: "아이리움안과",
                    target: ["간부", "병사"],
                    category: "복지",
                    detail: "",
                    start_date: "2020-10-01",
                    end_date: "2020-10-31",
                    icon_path: "FE에서 수정하십쇼",
                    img_path: "FE에서 수정하십쇼",
                    link: "https://eyereum.com/news/event/view/57"
                },
                {
                    bid: "3",
                    title: "[야나두]군인우대패키지",
                    company: "야나두",
                    target: ["병사"],
                    category: "학습",
                    detail: "전강좌 1년 무제한 기초부터 실전까지 야나두 정규강좌 무제한 수강(총 551강) 구성 : 왕기초 이론 + 기초영어 회화 + 영발음 + 영단어 + 영작문",
                    start_date: "2020-11-01",
                    end_date: "2021-5-31",
                    icon_path: "FE에서 수정하십쇼",
                    img_path: "FE에서 수정하십쇼",
                    link: "https://www.yanadoo.co.kr/freepass/militaryPackage"
                },
                {
                    bid: "4",
                    title: "해커스소방 군인 인증 이벤트",
                    company: "해커스소방",
                    target: ["간부", "병사"],
                    category: "학습",
                    detail: "",
                    start_date: "2020-10-01",
                    end_date: "2021-04-30",
                    icon_path: "FE에서 수정하십쇼",
                    img_path: "FE에서 수정하십쇼",
                    link: "https://fire.hackers.com/views/event/2020/0317/"
                },
                {
                    bid: "5",
                    title: "유알모는 통신비가 반값이군화!",
                    company: "유플러스 알뜰 모바일",
                    target: ["병사"],
                    category: "기타",
                    detail: "",
                    start_date: "2020-10-22",
                    end_date: "2020-10-31",
                    icon_path: "FE에서 수정하십쇼",
                    img_path: "FE에서 수정하십쇼",
                    link: "https://www.uplussave.com/shop/cc/evntDetail.mhp?selectedSn=307#none"
                },
                {
                    bid: "7",
                    title: "출산축하금",
                    company: "군인공제회",
                    target: ["병사", "간부", "예비군"],
                    category: "복지",
                    detail: "출산시 100만원",
                    start_date: "0001-01-01",
                    end_date: "9999-12-31",
                    icon_path: "FE에서 수정하십쇼",
                    img_path: "FE에서 수정하십쇼",
                    link: "https://welfare.mmaa.or.kr/condo/web/welfareNew/WelfareNewGuide.jsp"
                },
                {
                    bid: "8",
                    title: "대명콘도 예약",
                    company: "군인공제회",
                    target: ["병사", "간부", "예비군"],
                    category: "복지",
                    detail: "대명콘도 예약시 10%할인",
                    start_date: "0001-01-01",
                    end_date: "9999-12-31",
                    icon_path: "FE에서 수정하십쇼",
                    img_path: "FE에서 수정하십쇼",
                    link: "https://welfare.mmaa.or.kr/condo/web/welfareNew/WelfareNewGuide.jsp"
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