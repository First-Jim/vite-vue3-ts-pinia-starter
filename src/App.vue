<template>
	<el-config-provider :locale="lang">
		<router-view></router-view>
	</el-config-provider>
</template>
<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';
import { setTitleFromRoute } from '@/utils/common';
import { useConfig } from '@/stores/config';

const config = useConfig();
const route = useRoute();

// 初始化 element 的语言包
const { getLocaleMessage } = useI18n();
const lang = getLocaleMessage(config.lang.defaultLang) as any;

// 监听路由变化时更新浏览器标题
watch(
	() => route.path,
	() => {
		setTitleFromRoute();
	},
);
</script>
