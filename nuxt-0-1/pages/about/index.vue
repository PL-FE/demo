<script setup lang="ts">
const list = useCookie('list22', {
	default: () => [],
	watch: 'shallow',
})

function add() {
	list.value?.push(Math.round(Math.random() * 1000))
	// list cookie不会随此更改而更新
}

function save() {
	if (list.value && list.value !== null) {
		list.value = [...list.value]
		// list cookie随此更改而更新
	}
}
</script>

<template>
	<div>
		<h1>列表</h1>
		<pre>{{ list }}</pre>
		<button @click="add">添加</button>
		<br />
		<br />
		<br />
		<br />
		<button @click="save">保存</button>
	</div>
</template>
