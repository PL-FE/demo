<template>
	<div class="home-wrap">
		{{ store.name }}
		<AButton>按钮</AButton>
	</div>
</template>

<script lang="ts" setup>
import { useStore } from '@/store/index'
const store = useStore()
await https({
	url: 'xxx/getList',
})
</script>

<style scoped lang="scss">
.home-wrap {
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 60vh;
}
</style>
