<template>
	<div class="home-wrap">
		{{ title }}
		{{ data }}
		<ACarousel autoplay>
			<div v-for="it in imgList" :key="it.url">
				<img :src="it.url" class="carousel-img" />
			</div>
		</ACarousel>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

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
// import { useStore } from '@/store/index'
// const store = useStore()
const title = ref('')
useHttps({ url: '/api/hello' }).then(res => {
	console.log('res', res)
	title.value = res
})
</script>

<style scoped lang="scss">
.home-wrap {
	min-height: 60vh;
}
</style>

<style scoped>
/* For demo */
.ant-carousel {
	width: 100vw;
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
</style>
