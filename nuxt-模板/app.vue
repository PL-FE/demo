<template>
	<NuxtPage />
	<h1>{{ $t('name') }}</h1>
	<button @click="$i18n.locale = 'zh'">中文</button>
	<button @click="$i18n.locale = 'en'">英文</button>
</template>
<script lang="ts" setup>
import { APIs } from './service/apiList'
import type AxiosRequestError from './service/error'
import $api from './service/webRequest'

$api.get(APIs.login)
	.then(() => {
		//
	})
	.catch((err: AxiosRequestError) => {
		console.dir(err)
	})
</script>
<style>
@import url('ant-design-vue/dist/reset.css');
</style>
