<template>
	<!-- 最外层的大盒子包含所有内容 -->
	<view style="padding-top: 20%; display: flex; flex-direction: column;">
		<view style="display: flex; flex-direction: column; align-items: center;">
			<image
				src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-c21a4852-61be-4703-aaf4-fcbe9074012c/9a0371aa-41f6-4982-a421-3a20a239f726.png"
				mode="widthFix"
				style="width: 20%;"
			></image>
			<text style="font-weight:bold; font-size: 1.4rem;margin-top: 35rpx;">南山咖啡</text>
			<text style="font-size: 0.8rem; color: gray; margin-top: 35rpx;">Coffee Shop App</text>
		</view>
		<view
			style="display: flex; flex-direction: column; align-items: center; justify-content: center;font-size: 1.4rem;"
		>
			<text style="font-weight: bold; margin-top: 10%;">记得爱。记得时光</text>
			<text style="font-weight: bold; margin-top: 30rpx;">每个时刻，都有南山与你为伴</text>
		</view>
		<view style="margin-top: 10%;">
			<button type="primary" @click="gologin" class="click-btn">
				<uni-icons type="phone" color="#FFFFFF" size="20" style="position: relative; left: -10rpx;"></uni-icons>
				<text>手机号登录</text>
			</button>
		</view>
		<!-- 其他登录方式 -->
		<view class="flex flex-col items-center px-8 py-10 mt-8">
			<text class="text-sm text-gray-400">其他登录方式</text>
			<view class="grid grid-cols-4 gap-6 mt-5">
				<button class="flex items-center justify-center w-8 h-8 rounded-full" type="default" style="background-color: #047857;">
					<uni-icons type="weixin" color="#FFFFFF" size="25"></uni-icons>
				</button>
				<button class="flex items-center justify-center w-8 h-8 rounded-full" type="default" style="background-color: #047857;">
					<uni-icons type="weibo" color="#FFFFFF" size="25"></uni-icons>
				</button>
				<button class="flex items-center justify-center w-8 h-8 rounded-full" type="default" style="background-color: #047857;">
					<uni-icons type="qq" color="#FFFFFF" size="25"></uni-icons>
				</button>
				<button @click="goEmail" class="flex items-center justify-center w-8 h-8 rounded-full" type="default" style="background-color: #047857;">
					<uni-icons type="email-filled" color="#FFFFFF" size="25"></uni-icons>
				</button>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		gologin(){
			uni.redirectTo({
				url: '/pages/signin/login'
			});
		}
	}
};
</script>

<style scoped lang="scss">
.click-btn {
	width: 80vw;
	font-weight: bold;
	border-radius: 70rpx;
	background-color: #047857;
	padding-top: 10rpx;
	padding-bottom: 10rpx;
	font-size: 35rpx;
}
</style>
