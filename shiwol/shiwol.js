// 시월축제 설정 상수
const SHIWOL_CONFIG = {
	YEAR: 2025,
	MONTH: 9, // 9월 (0 기반 인덱스로는 8)
	MONTH_INDEX: 8, // JavaScript Date 객체용
	END_DATE: 21, // 9월 21일
};

// 시월축제 데이터
const shiwolData = [
	{
		id: 1,
		category: '고메',
		title: "시월 개막행사 '브런치 온더 브릿지'",
		date: [21],
		description: `바다 위를 걸으며 즐기는 가장 로맨틱한 하루, 브런치 온 더 브릿지! 광안리 바다를 발 아래 두고 광안대교 상판 위를 직접 걸어 올라가는 특별한 도보 개방 체험! 바다 한가운데를 걷는 기분과 감각적인 브런치 타임을 동시에 즐겨보세요. 9월 21일, 단 한 번뿐인 감성 브런치에 당신을 초대합니다.`,

		pageLink: 'https://festivalshiwol.app/event_details/brunch-on-the-bridge',
		buyLink: '',
		region: '수영구/해운대구',
		image: '/shiwol/images/event-01.png',
		position: 'right',
	},
	{
		id: 2,
		category: '고메',
		title: '부산수제맥주마스터스챌린지',
		date: [20, 21, 22, 23, 24],
		description: `부산수제맥주마스터스챌린지는 시민이 직접 참여해 부산 지역의 수제 맥주 브랜드들을 평가하고 부산 최고의 수제맥주를 뽑는 축제로, 수제맥주 품평회, 소상공인 플리마켓, 체험 프로그램 등 다채로운 즐길 거리가 마련됩니다. 모두의 갈증을 시원하게 해소시켜 줄 도심 속 오아시스가 될 특별한 축제에 여러분들을 초대합니다.`,

		pageLink: 'https://www.instagram.com/official_bcmc/',
		buyLink: 'https://event-us.kr/bcmc/event/111854',
		region: '해운대구',
		image: '/shiwol/images/event-02.png',
		position: 'left',
	},
	{
		id: 3,
		category: '고메',
		title: '부산국제음식박람회',
		date: [26, 27, 28],
		description: `「딜리셔스 부산(Delicious Busan)」을 주제로 특별한 미식 축제가 개최됩니다. 오는 9월 26일부터 28일까지 벡스코에서 개최되는 제22회 부산국제음식박람회는 부산만의 독창적인 미식 콘텐츠는 물론, 세계 각국의 다채로운 맛과 문화를 체험할 수 있는 특별한 기회가 될 것입니다.`,

		pageLink: 'http://bife.kr/2025/main/index_kor.asp',
		buyLink: 'http://bife.kr/2025/03_visitor/01_guide.asp',
		region: '해운대구',
		image: '/shiwol/images/event-03.png',
		position: 'right',
	},
	{
		id: 4,
		category: '뮤직',
		title: '페스티벌시월 부산재즈페스타',
		date: [20, 21],
		description:
			'부산의 바다와 가을 바람, 재즈 음악, 와인의 향이 어우러지는 감성적인 테마의 특별한 축제가 열립니다. 부산재즈페스타 2025는 국내외 최정상 재즈 뮤지션부터 대중적 가수까지 풍성한 라인업으로 관객을 재즈의 매력속으로 안내할 예정입니다.',
		pageLink: 'https://www.busanjazzfesta.com/',
		buyLink: 'https://tickets.interpark.com/goods/25010235',
		region: '동구',
		image: '/shiwol/images/event-04.png',
		position: 'left',
	},
	{
		id: 5,
		category: '뮤직',
		title: '부산국제록페스티벌',
		date: [26, 27, 28],
		description:
			'국내 최장수 국제 록 음악 축제인 부산국제록페스티벌이 올해는 삼락생태공원에서 개최됩니다. 2025년 페스티벌에서는 공원 곳곳에 조성된 무대에서 신진 아티스트부터 글로벌 최정상급 헤드라이너까지 취향에 따라 다양한 공연을 관람할 수 있으며, 관람객 체험형 게임 이벤트, 푸트코트 라운지, 캠핑 존 등 다양한 부대 이벤트도 즐길 수 있습니다.',
		pageLink: 'https://busanrockfestival.com/',
		buyLink: 'https://ticket.yes24.com/Perf/53880',
		region: '사상구',
		image: '/shiwol/images/event-05.png',
		position: 'right',
	},
	{
		id: 6,
		category: '무비',
		title: '부산국제영화제',
		date: [17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
		description:
			'아시아뿐 아니라 세계 속에서 많은 영화인들과 관객이 사랑하는 영화 축제로 거듭난 부산국제영화제. 제30회 부산국제영화제에는 총 34개국 241편의 공식 초청작과 커뮤니티비프 상영작 84편, 총 328편의 상영작을 만나볼 수 있으며, 오픈 토크, 스페셜 토크, 액터스 하우스, 아주담담, 야외 무대인사, 마스터 클래스, 씨네 클래스 등 다양한 행사가 여러분을 기다리고 있습니다.',
		pageLink: 'https://www.biff.kr/kor/',
		buyLink: 'https://biff.maketicket.co.kr/',
		region: '해운대구',
		image: '/shiwol/images/event-06.png',
		position: 'left',
	},
	{
		id: 7,
		category: '무비',
		title: '아시아콘텐츠&필름마켓',
		date: [20, 21, 22, 23],
		description:
			'아시아콘텐츠&필름마켓(ACFM)은 영화, 드라마, 애니메이션, 도서, 웹툰, 웹소설, AI콘텐츠 등 다양한 콘텐츠를 선보이고 거래하는 아시아 최고의 종합 콘텐츠 마켓입니다. 매년 부산국제영화제 기간 중 4일간 개최되며, 전 세계의 창작자, 바이어, 제작자, 세일즈사, 투자자들이 한자리에 모여 최신 산업 정보를 공유하고 실질적인 비즈니스와 파트너십을 구축합니다.',
		pageLink: 'https://www.acfm.kr/kor/',
		buyLink: 'https://www.acfm.kr/kor/addon/10000001/page.asp?page_num=4087',
		region: '해운대구',
		image: '/shiwol/images/event-07.png',
		position: 'right',
	},
	{
		id: 8,
		category: '테크',
		title: '시월국제드론라이트닝쇼 경연대회',
		date: [20, 21],
		description:
			'북항 친수공원 밤하늘을 수놓는 드론라이트쇼! 미국, 중국, 일본 3개국이 벌이는 드론라이트쇼 경연대회로 총 투입 드론 5,000대의 국내 최대 규모 드론라이트쇼가 부산 북항에서 펼쳐집니다. 전야제 불꽃드론쇼부터 본행사인 드론경연대회까지, 놀라운 감동을 선사할 시월국제드론라이트닝쇼 경연대회에 여러분을 초대합니다.',
		pageLink: 'https://www.bwdf.co.kr/',
		buyLink: '무료행사',
		region: '동구',
		image: '/shiwol/images/event-08.png',
		position: 'left',
	},
	{
		id: 9,
		category: '컬처',
		title: '부산국제공연예술마켓',
		date: [24, 25, 26, 27, 28],
		description:
			'2025 부산국제공연예술마켓은 연극, 무용, 음악 등 다양한 작품 중 관객이 직접 원하는 공연을 선택해 즐길 수 있는 축제입니다. 쇼케이스 공연, 피칭, 비즈니스 미팅, 컨퍼런스 등을 통해 국내외 공연예술의 현재와 미래를 함께 모색하는 장이 될 것입니다.',
		pageLink: 'https://www.bpam.kr/',
		buyLink: 'https://reservation.qless.ai/ko/01988341-f7e9-7ee4-ae79-0a20bd24a53a/events',
		region: '남구/수영구/동구',
		image: '/shiwol/images/event-09.png',
		position: 'right',
	},
	{
		id: 10,
		category: '컬처',
		title: '부산거리예술축제',
		date: [27, 28],
		description:
			'2025 부산거리예술축제는 9월 27~28일 해운대 해변로에서 열리며, 서커스, 마임, 음악극 등 다양한 장르의 거리예술 공연으로 시민과 도시가 함께 호흡하는 축제입니다. 국내외 초청작과 공모작, 시민 참여 프로그램, 지역 예술인 협업 공연 등 다채로운 무대를 통해 부산을 대표하는 국제 거리예술 축제가 펼쳐집니다.',
		pageLink: 'https://www.instagram.com/street_b_official/',
		buyLink: '무료행사',
		region: '해운대구',
		image: '/shiwol/images/event-10.png',
		position: 'left',
	},
	{
		id: 11,
		category: '컬처',
		title: '부산글로벌웹툰페스티벌',
		date: [25, 26, 27, 28],
		description:
			"'웹툰 시사회' 콘셉트로 열리는 제9회 부산글로벌웹툰페스티벌에서는 아직 공개되지 않은 신작 웹툰을 가장 먼저 만나볼 수 있습니다. 또한 전시, 체험, 세미나, 비즈니스 교류 등 다채로운 프로그램을 통해 웹툰 팬과 창작자, 업계 관계자가 함께 어우러지는 글로벌 교류의 장이 될 것입니다.",
		pageLink: 'https://www.instagram.com/bwebtoon_fest/',
		buyLink: '무료행사',
		region: '해운대구',
		image: '/shiwol/images/event-11.png',
		position: 'right',
	},
	{
		id: 12,
		category: '컬처',
		title: '월드크리에이터페스티벌',
		date: [27, 28],
		description:
			'2025 월드 크리에이터 페스티벌은 9월 27~28일 열리며, 세계 각국의 크리에이터들이 참여하는 글로벌 종합 축제입니다. 콘텐츠 전시, 팬미팅, 공연, 시상식 등 다양한 프로그램을 통해 크리에이터와 팬이 교류하고 최신 트렌드를 경험할 수 있습니다.',
		pageLink: 'https://www.wcfbusan.kr/?fbclid=IwZXh0bgNhZW0CMTAAAR241mmdbGLn532YVJckg7vqHGlS6MgHrZllC7PaUko6r9Z9zdalEV9hem8_aem_m927Fb4O08CrnSSrgdzSwg',
		buyLink: '무료행사',
		region: '부산진구',
		image: '/shiwol/images/event-12.png',
		position: 'left',
	},
	{
		id: 13,
		category: '컬처',
		title: '부산독서문화축제',
		date: [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
		description:
			'가을에 열리는 부산 독서문화축제 <부산바다도서관>은 책과 예술이 어우러진 특별한 야외 독서 경험을 선사합니다. 전시, 체험, 공연, 플리마켓 등 다양한 문화예술 프로그램을 통해 시민들의 교양과 문화적 감수성을 넓히는 자리가 마련됩니다.',
		pageLink: 'https://bscf.or.kr/bb/main.do',
		buyLink: '무료행사',
		region: '사하구',
		image: '/shiwol/images/event-13.png',
		position: 'right',
	},
	{
		id: 14,
		category: '컬처',
		title: '2025바다미술제',
		date: [27, 28, 29, 30],
		description:
			"다대포해수욕장 일대에서 'Undercurrents: 물 위를 걷는 물결들'을 주제로 열리는 바다미술제가 열립니다. 17개국 23팀이 참여해 바다와 육지의 경계에서 순환, 혼종, 생태적 역사 등을 예술로 풀어낸 전시를 즐길 수 있습니다.",
		pageLink: 'https://www.saf2025.org/ko',
		buyLink: '무료행사',
		region: '사하구',
		image: '/shiwol/images/event-14.png',
		position: 'left',
	},
	{
		id: 15,
		category: '컬처',
		title: '부산국제건축제',
		date: [17, 18, 19, 20, 21],
		description:
			'비욘드 한글 & K-컬처 국제 페스티벌은 한글과 한국 문화를 중심으로 한류의 글로벌 확산과 문화 교류를 목표로 하는 대규모 행사입니다. 개막식 공연, 전시, 공모전 등 다양한 프로그램을 통해 한글과 K-컬처의 아름다움과 영향력을 세계에 알리는 장으로 마련됩니다.',
		pageLink: 'http://www.biacf.or.kr/',
		buyLink: 'https://booking.naver.com/booking/12/bizes/598997',
		region: '해운대구',
		image: '/shiwol/images/event-15.png',
		position: 'right',
	},
	{
		id: 16,
		category: '컬처',
		title: '비욘드 한글&K-컬처 국제 페스티벌',
		date: [24, 25, 26],
		description:
			'비욘드 한글 & K-컬쳐 국제 페스티벌은 한글과 한국 문화를 중심으로 한류의 글로벌 확산과 문화 교류를 목표로 하는 대규모 행사입니다. 개막식 공연, 전시, 공모전 등 다양한 프로그램을 통해 한글과 K-컬처의 아름다움과 영향력을 세계에 알리는 장으로 마련됩니다.',
		pageLink: 'http://beyondkculture.com/2024/main/index.asp',
		buyLink: 'http://beyondkculture.com/2024/03_registration/01_registration.asp',
		region: '해운대구',
		image: '/shiwol/images/event-16.png',
		position: 'left',
	},
	{
		id: 17,
		category: '레저',
		title: '세븐브릿지투어',
		date: [21],
		description:
			'팔관회 명상 걷기대회는 전통 불교 행사 팔관회를 앞두고 시민들이 함께 걷고 명상하며 체험할 수 있는 참여형 축제로 개최됩니다. 이번 행사는 팔관회의 전통을 현대적으로 계승·발전시키고자 공연, 명상, 걷기대회 등 다양한 프로그램과 경품 추첨 등 특별한 즐거움을 제공합니다.',
		pageLink:
			'https://busan7bridges.com/?n_media=27758&n_query=%EC%84%B8%EB%B8%90%EB%B8%8C%EB%A6%BF%EC%A7%80%ED%88%AC%EC%96%B4%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80&n_rank=1&n_ad_group=grp-a001-01-000000052536634&n_ad=nad-a001-01-000000398619307&n_campaign_type=1&n_ad_gro',
		buyLink: 'https://busan7bridges.com/bbs/board.php?bo_table=7bridge_reservation',
		region: '해운대구',
		image: '/shiwol/images/event-17.png',
		position: 'right',
	},
	{
		id: 18,
		category: '레저',
		title: '팔관회 명상 걷기 대회',
		date: [27],
		description:
			"아시아 창업 엑스포 'FLY ASIA'는 글로벌 비즈니스 네트워크 구축과 투자 생태계를 선도하기 위해 부산에서 개최되는 아시아 스타트업 페스티벌입니다. 'FLY ASIA'는 개막식, 콘퍼런스, IR, 네트워킹 프로그램, 전시 등 다양한 프로그램을 통해 1만 여명의 국내외 스타트업, 투자자, 창업 생태계 관계자들이 참여하는 아시아 스타트업 페스티벌에 여러분을 초대합니다.",
		pageLink: 'http://www.palgwanhoe.or.kr/sub2_2025_2.php',
		buyLink: '무료행사',
		region: '동구',
		image: '/shiwol/images/event-18.png',
		position: 'left',
	},
	{
		id: 19,
		category: '비즈',
		title: '아시아 창업 엑스포 FLY ASIA 2025',
		date: [22, 23],
		description:
			'디자인 전문전시 "디자인페스티벌 시월"에 여러분을 초대합니다. 이번 행사에서는 디자인 성과전시, 디자인 컨설팅 및 디자인법률상담, 부산브랜드 상품전시, 디자인체험존 운영 등 공급자(디자이너, 디자인 기업)와 수요자(일반 기업, 시민) 간 교류 활성화를 통한 고부가가치 제품 생산 기반을 마련하고 디자인 마인드 함양을 통한 지역 산업의 경쟁력을 강화하는 것을 목표로 합니다.',
		pageLink: 'https://www.fly-asia.org/ko',
		buyLink: 'https://www.fly-asia.org/ko/register',
		region: '해운대구',
		image: '/shiwol/images/event-19.png',
		position: 'right',
	},
	{
		id: 20,
		category: '비즈',
		title: '디자인페스티벌 시월',
		date: [29, 30],
		description:
			'2025 부산국제건축제(BIAF 2025)가 "Busan Style - Culture meets Architecture"를 주제로 개최됩니다. 부산의 도시・건축분야 최대 전시 행사이자 건축전문가와 대중이 소통하는 장이 될 이번 행사는 특별전, 주제전, 참여전 등 다양한 전시와 강연, 이벤트가 준비되어 있습니다.',
		pageLink: 'https://adp.dcb.or.kr/dfs',
		buyLink: '무료행사',
		region: '부산 전역',
		image: '/shiwol/images/event-20.png',
		position: 'left',
	},
	{
		id: 21,
		category: ['컬처', '네트워킹'],
		title: '시월 & 태양의 서커스',
		date: [21, 22, 23, 24, 25, 26, 27, 28],
		description:
			'태양의서커스 한국 투어 역대 최고 흥행작이자 전 세계 800만 관객을 사로잡은 명작, 〈쿠자(Kooza)〉가 7년만에 부산에서 새로운 여정을 시작합니다. 화려한 의상, 매혹적인 음악, 그리고 숨막히는 아크로바틱 퍼포먼스가 어우러진 마법 같은 세계로 여러분을 초대합니다.',
		pageLink: 'https://www.cirquedusoleil.com/korea/busan/kooza/buy-tickets',
		buyLink: 'https://tickets.interpark.com/goods/25003142',
		region: '해운대구',
		image: '/shiwol/images/event-21.png',
		position: 'right',
	},
	{
		id: 22,
		category: '인사이트',
		title: '시월 인사이트',
		date: [22, 23, 24, 25, 26, 27, 28, 29, 30],
		description:
			'시월 인사이트는 학술과 산업, 그리고 미래 비전을 공유하는 지식 교류의 장으로, 부산테크노파크와 함께 기술·산업·문화가 교차하는 심도 깊은 담론이 펼쳐집니다. 연구자, 창작자, 기업가가 한자리에 모여 미래의 가능성을 탐색하고, 도시와 세계를 잇는 새로운 관점을 공유하는 자리에 여러분을 초대합니다.',
		pageLink: '',
		buyLink: '무료행사',
		region: '해운대구',
		image: '/shiwol/images/event-22.png',
		position: 'left',
	},
	{
		id: 23,
		category: '로컬',
		title: '사상강변축제',
		date: [20, 21],
		description:
			'제22회 사상강변축제에서는 지역민과 함께하는 강변음악회와 강변가요제, 공동체 화합을 위한 주민자치 한마당, 청소년의 끼와 열정을 선보이는 청소년 예술제, 다문화 박람회 등 다채로운 프로그램이 진행됩니다. 푸른 강변을 배경으로 남녀노소 누구나 즐길 수 있는 공연과 체험, 교류의 장을 통해 사상구민의 화합과 지역문화의 발전을 함께 만들어가는 특별한 시간이 될 것입니다.',
		pageLink: 'https://www.사상강변축제.com',
		buyLink: '무료행사',
		region: '사상구',
		image: '/shiwol/images/event-23.png',
		position: 'right',
	},
	{
		id: 24,
		category: '로컬',
		title: '낙동강구포나루축제',
		date: [26, 27, 28],
		description:
			'제12회 낙동강 구포나루 축제는 강나루, 친환경, 웰니스를 핵심 키워드로, 전통과 현대가 어우러진 다채로운 프로그램을 선보이며 풍성한 즐길 거리와 볼거리를 제공합니다. 특히 가을 정취가 가득한 화명생태공원의 아름다운 자연 속에서 열리는 이번 축제는 가족, 친구, 연인 모두가 함께 즐길 수 있는 체험과 공연을 통해 금빛 가을의 특별한 추억을 선사할 예정입니다.',
		pageLink: 'https://www.bsbukgu.go.kr/tour/index.bsbukgu?menuCd=DOM_000000402006001000',
		buyLink: '무료행사',
		region: '북구',
		image: '/shiwol/images/event-24.png',
		position: 'left',
	},
	{
		id: 25,
		category: '로컬',
		title: '부산국제공연예술제',
		date: [26, 27, 28],
		description:
			'부산국제공연예술제(B.P.A.F 2025)는 금정구 온천천과 부산대학로를 배경으로, 매년 9월 시민과 예술이 함께 어우러지는 부산의 대표 공연예술 축제입니다. 2025년 이번 축제는 "예술, 사이에 스며들다"라는 주제로 21편의 국내 외 공연예술작품 전시 및 다양한 부대 프로그램, 아트마켓 등이 진행 될 예정입니다.',
		pageLink: 'www.gjfac.org',
		buyLink: '무료행사',
		region: '동래구/금정구',
		image: '/shiwol/images/event-25.png',
		position: 'right',
	},
];

// 상태 관리
function getDefaultDate() {
	const today = new Date();
	const shiwolEndDate = new Date(SHIWOL_CONFIG.YEAR, SHIWOL_CONFIG.MONTH_INDEX, SHIWOL_CONFIG.END_DATE);

	// 시월축제 종료일 이후에는 오늘 날짜, 그 전에는 축제 시작일
	if (today > shiwolEndDate) {
		return today.getDate();
	} else {
		return SHIWOL_CONFIG.END_DATE;
	}
}

let state = {
	date: getDefaultDate(),
	region: '전체',
	category: '전체',
};

// 유틸리티
function isRegionMatch(itemRegion, selectedRegion) {
	if (selectedRegion === '전체') return true;
	if (itemRegion.includes('부산') && itemRegion.includes('전역')) return true;
	if (itemRegion === selectedRegion) return true;
	if (itemRegion.includes('/')) {
		return itemRegion.split('/').some(region => region.trim() === selectedRegion);
	}
	return false;
}

// 아이템이 특정 날짜에 해당하는지 확인하는 함수
function isDateMatch(itemDate, selectedDate) {
	if (Array.isArray(itemDate)) {
		return itemDate.includes(selectedDate);
	}
	return itemDate === selectedDate;
}

function getAvailableCategories() {
	// 모든 카테고리를 항상 표시
	return categories;
}

function getAvailableRegions() {
	// 모든 지역을 항상 표시
	return regions;
}

function getFilteredItems() {
	if (!state.category) return [];
	return shiwolData.filter(item => {
		const dateMatch = isDateMatch(item.date, state.date);
		const regionMatch = isRegionMatch(item.region, state.region);

		// 다중 카테고리 지원
		let categoryMatch = false;
		if (state.category === '전체') {
			categoryMatch = true;
		} else if (Array.isArray(item.category)) {
			// 배열인 경우 해당 카테고리가 포함되어 있는지 확인
			categoryMatch = item.category.includes(state.category);
		} else {
			// 문자열인 경우 기존 로직 유지
			categoryMatch = item.category === state.category;
		}

		return dateMatch && regionMatch && categoryMatch;
	});
}

function hasEventsOnDate(date) {
	return shiwolData.some(item => isDateMatch(item.date, date));
}

// 지역 목록 (수동 정리)
const regions = ['전체', '금정구', '남구', '동구', '동래구', '부산진구', '북구', '사상구', '사하구', '서구', '수영구', '연제구', '영도구', '중구', '해운대구', '기장군'];

// 카테고리 목록 (이미지와 함께)
const categories = [
	{ name: '전체', image: '/shiwol/images/c-all.png' }, // 전체
	{ name: '고메', image: '/shiwol/images/c-gome.png' }, // 시월고메
	{ name: '뮤직', image: '/shiwol/images/c-music.png' }, // 시월뮤직
	{ name: '컬처', image: '/shiwol/images/c-culture.png' }, // 시월컬처
	{ name: '무비', image: '/shiwol/images/c-movie.png' }, // 시월무비
	{ name: '테크', image: '/shiwol/images/c-tech.png' }, // 시월테크
	{ name: '레저', image: '/shiwol/images/c-leisure.png' },
	{ name: '비즈', image: '/shiwol/images/c-biz.png' },
	{ name: '네트워킹', image: '/shiwol/images/c-network.png' },
	{ name: '인사이트', image: '/shiwol/images/c-insight.png' },
	{ name: '로컬', image: '/shiwol/images/c-local.png' },
];

// 달력 생성 함수
function createCalendar() {
	const calendar = document.getElementById('calendar');
	const today = new Date();
	const currentMonth = today.getMonth();
	const currentYear = today.getFullYear();

	// 시월축제 달력 생성
	const firstDay = new Date(currentYear, SHIWOL_CONFIG.MONTH_INDEX, 1).getDay(); // 월 첫날의 요일
	const daysInMonth = new Date(currentYear, SHIWOL_CONFIG.MONTH_INDEX + 1, 0).getDate(); // 월의 총 일수

	let calendarHTML = `
<div class="calendar-weekdays text-md sm:text-xl lg:text-3xl grid grid-cols-7  bg-[#FFF5E5]">
  <div class="text-center font-bold text-red-500 !py-2">일</div>
  <div class="text-center font-bold !py-2">월</div>
  <div class="text-center font-bold !py-2">화</div>
  <div class="text-center font-bold !py-2">수</div>
  <div class="text-center font-bold !py-2">목</div>
  <div class="text-center font-bold !py-2">금</div>
  <div class="text-center font-bold text-blue-500 !py-2">토</div>
</div>
<div class="calendar-days grid grid-cols-7 ">
`;

	// 빈 칸 추가 (첫 주의 빈 날짜들)
	for (let i = 0; i < firstDay; i++) {
		calendarHTML += '<div class="border-r-1 h-full border-b-1 border-[#eee] h-16"></div>';
	}

	// 날짜 추가
	for (let day = 1; day <= daysInMonth; day++) {
		// 해당 날짜에 해당하는 이벤트 개수 계산
		const dayEvents = shiwolData.filter(item => isDateMatch(item.date, day));
		const eventCount = dayEvents.length;
		const hasEvents = eventCount > 0;
		const isToday = day === today.getDate() && currentMonth === SHIWOL_CONFIG.MONTH_INDEX;
		const isSelected = day === state.date;

		const dayClass = `calendar-day !py-3 md:!py-5 !px-1 md:!px-2 flex flex-col items-center justify-center border-r-1 border-b-1 border-[#eee]  transition-all duration-200 ${
			hasEvents ? 'hover:bg-gray-100 cursor-pointer' : 'cursor-not-allowed'
		} ${isToday ? '[&>.calendar-date]:bg-[#B89FFF] [&>.calendar-date]:!text-white' : ''} ${isSelected ? '' : ''}`;

		calendarHTML += `
  <div class="relative ${dayClass} [&.active_.count-point]:hidden [&.active_.calendar-date]:bg-[#613489] [&.active_.calendar-date]:!text-white" data-date="${day}" onclick="selectDate(${day})">
    <span class="calendar-date text-md sm:text-xl lg:text-3xl font-bold aspect-square w-full  max-w-7 sm:max-w-[60%] flex text-center justify-center items-center rounded-full">${day}</span>
    <div class="calendar-count text-xs hidden sm:block md:text-lg !mt-1 md:!mt-3  text-[#666666] !px-1 rounded-full font-regular">
      ${hasEvents ? `${eventCount}개` : ''}
    </div>
     ${hasEvents ? `<div class="w-1.5 h-1.5 bg-[#603389] rounded-full absolute bottom-1 count-point sm:hidden"></div>` : ''}
  </div>
   
`;
	}

	// 빈 칸 추가 (마지막 주의 빈 날짜들)
	for (let i = 0; i < 4; i++) {
		calendarHTML += '<div class="border-r-1 h-full border-b-1 border-[#eee] h-16"></div>';
	}
	calendarHTML += '</div>';
	calendar.innerHTML = calendarHTML;
}

// UI 업데이트
function updateUI(skipCategoryGrid = false) {
	// active 클래스로 처리
	document.querySelectorAll('.calendar-day').forEach(day => day.classList.remove('active'));
	document.querySelector(`[data-date="${state.date}"]`)?.classList.add('active');

	// 지역 탭 업데이트 (해당 날짜에 행사가 있는 지역만 표시)
	createRegionTabs();

	if (!skipCategoryGrid) {
		createCategoryGrid();
	}

	// 카테고리 active 처리
	document.querySelectorAll('.category-item').forEach(item => item.classList.remove('active'));
	document.querySelector(`[onclick="selectCategory('${state.category}')"]`)?.classList.add('active');

	const itemsList = document.getElementById('itemsList');
	const filteredItems = getFilteredItems();

	if (filteredItems.length === 0) {
		itemsList.innerHTML = createEmptyState();
	} else {
		itemsList.innerHTML = filteredItems.map((item, i) => createItemCard(item, i)).join('');
	}
}

// 선택 함수들
function selectDate(date) {
	// 이벤트가 없는 날짜는 선택할 수 없음
	if (!hasEventsOnDate(date)) {
		return;
	}

	state.date = date;
	state.region = '전체'; // 달력 클릭 시 지역을 전체로 리셋
	state.category = '전체'; // 달력 클릭 시 카테고리도 전체로 리셋

	// 지역 탭을 새로 생성
	createRegionTabs();

	updateUI();
}

function selectRegion(region) {
	state.region = region;
	// 카테고리 선택은 유지
	updateUI();
}

function selectCategory(category) {
	state.category = category;
	updateUI(true); // 카테고리 재생성 건너뛰기 (active 처리는 updateUI에서 수행)
}

function shiwolItemImage(index) {
	const items = [
		{ image: '/shiwol/images/shiwol-icon-01.png', position: 'left' },
		{ image: '/shiwol/images/shiwol-icon-02.png', position: 'right' },
		{ image: '/shiwol/images/shiwol-icon-03.png', position: 'left' },
		{ image: '/shiwol/images/shiwol-icon-04.png', position: 'right' },
		{ image: '/shiwol/images/shiwol-icon-05.png', position: 'left' },
		{ image: '/shiwol/images/shiwol-icon-06.png', position: 'right' },
	];
	const safeIndex = index % items.length;
	return {
		image: items[safeIndex].image,
		position: items[safeIndex].position,
	};
}

// 빈 상태 UI 생성 함수
function createEmptyState() {
	return `
<div class="empty-state flex flex-col items-center justify-center min-h-[400px] text-center py-20">
	<div class="empty-icon mb-6">
		<img src="/shiwol/images/shiwol-icon-01.png" alt="빈 상태" class="w-24 h-24 mx-auto " />
	</div>
	<div class="empty-content">
		<h3 class="text-2xl sm:text-3xl font-bold text-[#67308E] mb-4">선택하신 조건에 해당하는<br>행사가 없습니다</h3>
		<p class="text-lg sm:text-xl text-gray-600 mb-6">다른 날짜, 지역 또는 카테고리를<br>선택해보세요</p>
		<div class="empty-actions flex flex-col sm:flex-row gap-3 justify-center">
			<button onclick="resetFilters()" class="px-6 py-3 bg-[#67308E] text-white rounded-full font-bold hover:bg-[#533170] transition-colors">
				전체 보기
			</button>
			<button onclick="goToToday()" class="px-6 py-3 border-2 border-[#67308E] text-[#67308E] rounded-full font-bold hover:bg-[#67308E] hover:text-white transition-colors">
				오늘 행사 보기
			</button>
		</div>
	</div>
</div>
`;
}

// 필터 초기화 함수
function resetFilters() {
	state.region = '전체';
	state.category = '전체';
	updateUI();
}

// 오늘 날짜로 이동 함수
function goToToday() {
	const today = new Date();
	const todayDate = today.getDate();

	if (hasEventsOnDate(todayDate)) {
		selectDate(todayDate);
	} else {
		// 오늘 행사가 없으면 가장 가까운 행사 날짜로 이동
		const eventDates = shiwolData.flatMap(item => (Array.isArray(item.date) ? item.date : [item.date])).filter(date => typeof date === 'number');

		if (eventDates.length > 0) {
			const sortedDates = [...new Set(eventDates)].sort((a, b) => a - b);
			const nearestDate = sortedDates.find(date => date >= todayDate) || sortedDates[sortedDates.length - 1];
			selectDate(nearestDate);
		}
	}
}

// 아이템 카드 생성 함수
function createItemCard(item, i) {
	const itemPosition = item.position;
	const hasLinks = item.pageLink || item.buyLink;

	const linksHTML = hasLinks
		? `
<div class="flex gap-2 justify-content-center">
  ${
		item.pageLink
			? `<a href="${item.pageLink}" target="_blank" class="items-center flex-1 bg-[#613489] text-white flex justify-center rounded-full gap-4 leading-none text-center font-bold transition-colors min-w-max !py-4 !px-5 sm:!px-6 sm:!py-5 text-sm sm:text-md">홈페이지 바로가기<img class="w-4 min-w-4 h-4" src="/shiwol/images/et-link-white.png"> </a>`
			: ''
  }
  ${
		item.buyLink && item.buyLink !== ''
			? item.buyLink === '무료행사'
				? `<div class="items-center flex-1 bg-white text-[#613489] flex justify-center rounded-full gap-4 leading-none border-1 sm:border-2 border-[#603389] text-center font-bold min-w-max !py-4 !px-5 sm:!px-6 sm:!py-5 text-sm sm:text-md cursor-default">무료 행사</div>`
				: `<a href="${item.buyLink}" target="_blank" class="items-center flex-1 bg-green-600 text-[#613489] bg-white flex justify-center rounded-full gap-4 leading-none text-center font-bold transition-colors border-1 sm:border-2 border-[#603389] min-w-max !py-4 !px-5 sm:!px-6 sm:!py-5 text-sm sm:text-md">티켓구매<img class="w-4 min-w-4 h-4" src="/shiwol/images/et-link.png"> </a>`
			: ''
  }
</div>
`
		: '';

	// 고유 ID 생성
	const cardId = `item-card-${i}-${Date.now()}`;

	return `
<div id="${cardId}" class="item-card relative transition-all duration-500 opacity-0 translate-y-4">
  <img src="${item.image}" 
       alt="${item.title}" 
       class="w-full" 
       onload="handleImageLoad('${cardId}')"
       onerror="handleImageError('${cardId}')" />
  <div class="!mt-2 lg:absolute ${itemPosition === 'left' ? 'left-contents' : 'right-contents'}">
    ${linksHTML}
  </div>
  <div class="item-card-deco absolute ${shiwolItemImage(i).position === 'left' ? 'left-[-4%] top-[-10%] sm:bottom-[-10%]' : 'right-[-4%] top-[-10%]'}  w-[16.66667%]">
    <img src="${shiwolItemImage(i).image}" alt="" />
  </div>
</div>
`;
}

// 이미지 로딩 완료 핸들러
function handleImageLoad(cardId) {
	const card = document.getElementById(cardId);
	if (card) {
		// 약간의 지연을 주어 자연스러운 애니메이션 효과
		setTimeout(() => {
			card.classList.remove('opacity-0', 'translate-y-4');
			card.classList.add('opacity-100', 'translate-y-0');
		}, 100);
	}
}

// 이미지 로딩 실패 핸들러
function handleImageError(cardId) {
	const card = document.getElementById(cardId);
	if (card) {
		// 이미지 로딩이 실패해도 카드는 표시
		setTimeout(() => {
			card.classList.remove('opacity-0', 'translate-y-4');
			card.classList.add('opacity-100', 'translate-y-0');
		}, 100);
	}
}

// 지역 탭 생성 함수
function createRegionTabs() {
	const regionTabs = document.getElementById('regionTabs');
	const availableRegions = getAvailableRegions();

	regionTabs.innerHTML = availableRegions
		.map(
			region => `
    <button class="region-tab cursor-pointer px-2 py-2 sm:py-3 md:py-3 rounded-lg border-1 border-[#603389] font-bold text-lg bg-white text-[#67308E] opacity-40
      hover:opacity-100 transition-all duration-200 whitespace-nowrap [&.active]:opacity-100 [&.active]:border-1 [&.active]:outline-1 [&.active]:sm:outline-2 outline-[$603389]"
      data-region="${region}" onclick="selectRegion('${region}')">
      ${region}
    </button>
  `
		)
		.join('');

	// 현재 선택된 지역이 사용 가능한 지역에 없다면 "전체"로 리셋
	if (!availableRegions.includes(state.region)) {
		state.region = '전체';
	}

	// 선택된 지역에 active 클래스 적용
	document.querySelector(`[data-region="${state.region}"]`)?.classList.add('active');
}

// 카테고리 생성
function createCategoryGrid() {
	const categoryGrid = document.getElementById('categoryGrid');
	const availableCategories = getAvailableCategories();

	categoryGrid.innerHTML = availableCategories
		.map(
			(category, index) => `
<div class="category-item-container">
  <div class="category-item ${category.name === state.category ? 'active' : ''} [&.active_.category-item-image]:border-[#67308E] cursor-pointer" onclick="selectCategory('${category.name}')">
    <div class="category-item-image relative aspect-[150/200] overflow-hidden rounded-full border-3 sm:border-4 border-white transition-all duration-200 group">
      <img src="${category.image}" alt="${category.name}" class="object-cover w-full h-full" />
    </div>
    <p class="text-lg sm:text-xl lg:text-2xl font-bold text-[#67308E] text-center mt-2">${category.name}</p>
  </div>
</div>
`
		)
		.join('');
}

// 초기화
document.addEventListener('DOMContentLoaded', function () {
	createCalendar();
	createRegionTabs();

	// state.category는 이미 '전체'로 초기화되어 있음
	updateUI();
});
