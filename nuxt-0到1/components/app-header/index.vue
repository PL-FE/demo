<template>
	<header class="flex items-center justify-between h-[70px] px-6 bg-gray-800 text-white">
		<div class="flex items-center">
			<img src="https://aliyuncdn.antdv.com/logo.png" alt="Logo" class="h-10 w-10 mr-2" />
			<span class="text-lg font-bold">Your Website</span>
		</div>
		<nav class="">
			<ul class="flex space-x-4 !mb-0">
				<li><NuxtLink to="/" class="hover:text-gray-300">首页</NuxtLink></li>
				<li><NuxtLink to="/about" class="hover:text-gray-300">关于</NuxtLink></li>
				<li><a href="#" class="hover:text-gray-300">Services</a></li>
				<li><a href="#" class="hover:text-gray-300">Contact</a></li>
			</ul>
		</nav>
	</header>
</template>

<script>
export default {
	name: 'Header',
}
</script>

<style lang="scss">
/* Custom styles can be added here */
</style>
