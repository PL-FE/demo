<template>
	<div class="box absolute">{{ store.name }}</div>
	<NuxtIcon name="arrow-right" class="text-[100px]" />
	<AButton>按钮</AButton>
</template>

<script lang="ts" setup>
import { useStore } from '@/store/index'
const store = useStore()
await https({
	url: 'xxx/getList',
})
</script>

<style></style>
