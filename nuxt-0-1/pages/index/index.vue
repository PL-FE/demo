<template>
	<div class="home-wrap">
		<section class="culture">
			<ACarousel autoplay>
				<div v-for="it in imgList" :key="it.url">
					<img :src="it.url" class="carousel-img" />
				</div>
			</ACarousel>

			<div class="leading-8 box-width">
				<h3 class="title-head text-primary">公司简介</h3>
				<p>
					重庆智飞生物制品股份有限公司成立于2002年，是一家集疫苗、生物制品研发、生产、销售、推广、配送及进出口为一体的国际化、全产业链生物高科技企业，注册资金24亿元，2010年9月在深交所挂牌上市，为第一家在创业板上市的民营疫苗企业，旗下五家全资子公司及两家参股公司，其中北京智飞绿竹生物制药有限公司（简称“北京智飞绿竹”）及安徽智飞龙科马生物制药有限公司（简称“安徽智飞龙科马”）为高新技术企业。公司总资产535.69亿元，2023年度营业收入529.18亿元，全口径纳税76.92亿元；2024年第一季度营业收入113.96亿元，缴纳税金23.49亿元，现有员工超7000人。公司始终本着“社会效益第一，企业效益第二”的企业宗旨及“六个第一，六个第二”的核心价值观，以防未病治已病，守护人类健康为使命，致力于打造世界一流的生物制药企业。
				</p>
				<p>
					智飞生物系一家集疫苗、生物制品研发、生产、销售、配送及进出口为一体的国际化、全产业链高科技生物制药企业，主营的人用疫苗为国家七大战略性新兴产业，发展前景广阔。现在售产品包括重组新型冠状病毒蛋白疫苗（CHO细胞）（智克威得）、重组结核杆菌融合蛋白(EC，宜卡）、ACYW135群脑膜炎球菌多糖疫苗（盟威克）、A群C群脑膜炎球菌多糖结合疫苗（盟纳康）、b型流感嗜血杆菌结合疫苗（喜菲贝）、注射用母牛分枝杆菌（微卡）等自主产品及统一销售默沙东的四价人乳头瘤病毒疫苗（酿酒酵母）、九价人乳头瘤病毒疫苗（酿酒酵母）、口服五价重配轮状病毒减毒活疫苗（Vero细胞）、23价肺炎球菌多糖疫苗、甲型肝炎灭活疫苗（人二倍体细胞）、葛兰素史克的重组带状疱疹疫苗（CHO细胞）等进口疫苗。
				</p>
				<p>公司通过“技术&市场”的双轮驱动模式，形成了市场、研发相互促进、互相转化的良好循环机制，加速了疫苗产品从研发到实现市场价值转换的进程，逐步形成了独具特色、领先市场的核心竞争力。</p>
			</div>

			<div class="btn text-center">
				<a-button size="large" type="primary" class="mx-4 px-8">
					<span class="flex items-center">
						观看视频
						<PlayCircleOutlined />
					</span>
				</a-button>
				<a-button size="large" class="mx-4 px-8">查看更多</a-button>
			</div>
		</section>

		<section class="stock">
			<h3 class="title-head text-primary">智飞生物</h3>
			<p class="font-bold text-center text-xl">
				股票代码：300122
				<span class="text-red-600 ml-4">沪深300指数、深证100指数、明晟（MSCI）指数</span>
			</p>
			<div class="stock-details pt-8">
				<div class="flex justify-center">
					<div v-for="it in stockDataConfig" :key="it.valueKey" class="text-center px-10">
						<div v-if="stockData.quote" class="text-4xl mb-4" :style="{ color: it.color }">
							{{ it.format ? it.format(stockData.quote[it.valueKey]) : stockData.quote[it.valueKey] }}
						</div>
						<div>{{ it.label }}</div>
					</div>
				</div>
			</div>
			<div class="soure mt-10 leading-3 flex justify-center text-tertiary">
				<div>
					<p>数据截止：{{ formatTimestamp(stockData?.quote?.timestamp) }}（北京时间 *报价有十五分钟或以上延迟）</p>
					<p>资料来源： 雪球</p>
				</div>
			</div>
		</section>
	</div>
</template>

<script lang="ts" setup>
import { PlayCircleOutlined } from '@ant-design/icons-vue'
import { ref, computed } from 'vue'
const stockData = ref<stockType>({})
const imgList = [
	{
		url: 'https://www.zhifeishengwu.com/skin/default/images/banner12.jpg',
	},
	{
		url: 'https://www.zhifeishengwu.com/skin/default/images/pic06.jpg',
	},
	{
		url: 'https://www.zhifeishengwu.com/skin/default/images/pic07.jpg',
	},
	{
		url: 'https://www.zhifeishengwu.com/skin/default/images/pic153.jpg',
	},
]

useHttps({ url: '/api/stock' }).then(res => {
	stockData.value = <stockType>res?.data
})

const stockDataConfig = [
	{
		label: '市值（亿元）',
		valueKey: 'market_capital',
		color: '#e41b23',
		format: (value: number) => convertToHundredMillion(value),
	},
	{
		label: '当前价格（元）',
		valueKey: 'current',
		color: '#e41b23',
	},
	{
		label: '全日最高（元）',
		valueKey: 'high',
		color: '#e41b23',
	},
	{
		label: '全日最低（元）',
		valueKey: 'low',
		color: '#258841',
	},
	{
		label: '成交量（万手）',
		valueKey: 'volume',
		format: (value: number) => convertToTenThousand(value),
	},
	{
		label: '成交额（亿元）',
		valueKey: 'amount',
		format: (value: number) => convertToHundredMillion(value),
	},
]
</script>

<style scoped lang="scss">
.home-wrap {
	min-height: 60vh;
}
section {
	margin-bottom: 60px;
}
</style>

<style scoped>
/* For demo */
.ant-carousel {
	width: 100%;
}
.ant-carousel :deep(.slick-slide) {
	text-align: center;
	height: calc(100vh - 70px);
	line-height: calc(100vh - 70px);
	/* background: #364d79; */
	overflow: hidden;
}
.carousel-img {
	height: calc(100vh - 70px);
	width: 100%;
	object-fit: cover;
}

.ant-carousel :deep(.slick-slide h3) {
	color: #fff;
}

.title-head {
	font-weight: bold;
	font-size: 1.875rem /* 30px */;
	line-height: 3rem /* 36px */;
	text-align: center;
}

.box-width {
	width: 1260px;
	margin: 60px auto;
}
</style>
