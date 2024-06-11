<template>
	<div>
		<a-config-provider
			:theme="{
				token: {
					colorPrimary: '#003e6a',
				},
			}"
		>
			<NuxtLayout>
				<NuxtPage />
			</NuxtLayout>
		</a-config-provider>
	</div>
</template>
<style>
.page-enter-active,
.page-leave-active {
	transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
	opacity: 0;
	filter: blur(1rem);
}
</style>
