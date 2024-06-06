<template>
	<div class="box">hello</div>
	<div class="text-[43px] text-[red]" @click="changeName">{{ store.name }}</div>
	<NuxtIcon name="arrow-right" class="text-[100px]" />
	<AButton>按钮</AButton>
</template>
<script lang="ts" setup>
import { useStore } from '@/store/index'
import { Button as AButton } from 'ant-design-vue'

const store = useStore()
function changeName(): void {
	store.name = 'new Name'
}
</script>
<style lang="scss" scoped>
</style>
