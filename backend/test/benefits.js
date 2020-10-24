/*
{
            "bid": "혜택 id값",
            "title": "혜택 이름",
            "company": "제공하는 회사 or 기관(ex.에버랜드, 롯데시네마, 군인공제회, 경기도청)",
            "goon_type": "1=육군만 해당, 2=해군만 해당, 3=공군만 해당, 4=국방부 부대만 해당, 5=전군 해당",
            "is_soldier": "1=병사, 0=간부, 2=둘다",
            "category": "movie/eat/park/welfare(복지)/hotel/etc 등등",
            "detail": "혜택내용 설명",
            "start_date": "이벤트 시작날짜",
            "end_date": "이벤트 종료날짜",
            "icon_path": "card의 icon 저장 위치",
            "img_path": "내용 안의 이미지 저장 위치",
            "link": "관련 페이지 링크"
        }
*/

const benefits = {
    "benefits": [
        {
            "bid": "1",
            "title": "빕스가 대한민국 군인 여러분을 응원합니다.",
            "company": "VIPS",
            "goon_type": "5",
            "is_soldier": "2",
            "category": "eat",
            "detail": "스테이크 30%할인",
            "start_date": "2020-10-01",
            "end_date": "2022-09-30",
            "icon_path": "FE에서 수정하십쇼",
            "img_path": "FE에서 수정하십쇼",
            "link": "https://www.ivips.co.kr:7002/event/evtHotEventPrtTpl.asp?eventkey=247&pageseq=1"
        },
        {
            "bid": "2",
            "title": "[자생한방병원] 군인공제회원 보약 특별 이벤트 ('20. 9.9 ~ 10. 28)",
            "company": "자생한방병원",
            "goon_type": "5",
            "is_soldier": "0",
            "category": "welfare",
            "detail": "",
            "start_date": "2020-09-09",
            "end_date": "2020-10-28",
            "icon_path": "FE에서 수정하십쇼",
            "img_path": "FE에서 수정하십쇼",
            "link": "https://welfare.mmaa.or.kr/condo/web/notice/event_detail.jsp?board_id=1&titleid=120"
        },
        {
            "bid": "6",
            "title": "국군장병을 위한 시력교정술 혜택",
            "company": "아이리움안과",
            "goon_type": "1",
            "is_soldier": "0",
            "category": "welfare",
            "detail": "",
            "start_date": "2020-10-01",
            "end_date": "2020-10-31",
            "icon_path": "FE에서 수정하십쇼",
            "img_path": "FE에서 수정하십쇼",
            "link": "https://eyereum.com/news/event/view/57"
        },
        {
            "bid": "3",
            "title": "[야나두]군인우대패키지",
            "company": "야나두",
            "goon_type": "5",
            "is_soldier": "0",
            "category": "study",
            "detail": "전강좌 1년 무제한 기초부터 실전까지 야나두 정규강좌 무제한 수강(총 551강) 구성 : 왕기초 이론 + 기초영어 회화 + 영발음 + 영단어 + 영작문",
            "start_date": "2020-11-01",
            "end_date": "2021-5-31",
            "icon_path": "FE에서 수정하십쇼",
            "img_path": "FE에서 수정하십쇼",
            "link": "https://www.yanadoo.co.kr/freepass/militaryPackage"
        },
        {
            "bid": "4",
            "title": "해커스소방 군인 인증 이벤트",
            "company": "해커스소방",
            "goon_type": "5",
            "is_soldier": "1",
            "category": "study",
            "detail": "",
            "start_date": "2020-10-01",
            "end_date": "2021-04-30",
            "icon_path": "FE에서 수정하십쇼",
            "img_path": "FE에서 수정하십쇼",
            "link": "https://fire.hackers.com/views/event/2020/0317/"
        },
        {
            "bid": "5",
            "title": "유알모는 통신비가 반값이군화!",
            "company": "유플러스 알뜰 모바일",
            "goon_type": "1",
            "is_soldier": "1",
            "category": "etc",
            "detail": "",
            "start_date": "2020-10-22",
            "end_date": "2020-10-31",
            "icon_path": "FE에서 수정하십쇼",
            "img_path": "FE에서 수정하십쇼",
            "link": "https://www.uplussave.com/shop/cc/evntDetail.mhp?selectedSn=307#none"
        },
        {
            "bid": "7",
            "title": "출산축하금",
            "company": "군인공제회",
            "goon_type": "5",
            "is_soldier": "0",
            "category": "welfare",
            "detail": "출산시 100만원",
            "start_date": "0001-01-01",
            "end_date": "9999-12-31",
            "icon_path": "FE에서 수정하십쇼",
            "img_path": "FE에서 수정하십쇼",
            "link": "https://welfare.mmaa.or.kr/condo/web/welfareNew/WelfareNewGuide.jsp"
        },
        {
            "bid": "8",
            "title": "대명콘도 예약",
            "company": "군인공제회",
            "goon_type": "2",
            "is_soldier": "0",
            "category": "welfare",
            "detail": "대명콘도 예약시 10%할인",
            "start_date": "0001-01-01",
            "end_date": "9999-12-31",
            "icon_path": "FE에서 수정하십쇼",
            "img_path": "FE에서 수정하십쇼",
            "link": "https://welfare.mmaa.or.kr/condo/web/welfareNew/WelfareNewGuide.jsp"
        },
    ]
}

export default benefits;