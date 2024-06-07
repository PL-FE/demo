<template>
	<div class="box">{{ store.name }}</div>
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
