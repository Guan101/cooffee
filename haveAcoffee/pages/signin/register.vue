<template>
	<view class="relative container">
		<view class="relative z-10 min-h-screen pt-20 pb-10 text-white bg-green-700 bg-opacity-75 backdrop-filter backdrop-blur-sm">
			<view class="px-7">
				<view class="flex items-end">
					<image class="w-16" mode="widthFix" :src="logo"></image>
					<view class="flex flex-col items-start space-y-2">
						<text class="text-2xl leading-none font-medium">新建账户</text>
						<text class="text-sm leading-none text-gray-300">南山咖啡，让美好与你更近一步</text>
					</view>
				</view>
				
				<form class="block mt-10" @submit="loginSubmit" @reset="loginReset">
					<view class="flex flex-col items-start space-y-2">
						<text class="capitalize text-gray-100">昵称</text>
						<input class="form-input w-full text-sm" name="nickname" placeholder="请输入您的昵称" />
					</view>
					<view class="flex flex-col items-start space-y-2 mt-7">
						<text class="capitalize text-gray-100">电子邮箱</text>
						<input class="form-input w-full text-sm" name="email" placeholder="请输入您的邮箱地址" />
					</view>
					<view class="flex flex-col items-start space-y-2 mt-7">
						<text class="capitalize text-gray-100">密码</text>
						<input class="form-input w-full text-sm" name="username" placeholder="请输入您的账户密码" />
					</view>
					<view class="flex items-center justify-between mt-8">
						<button form-type="submit" class="flex items-center justify-center h-14 w-full space-x-2 rounded-full bg-yellow-500 text-white">
							<text class="text-base font-bold uppercase">注册</text>
							<uni-icons name="arrow-rightward" color="#FFFFFF" size="36"></uni-icons>
						</button>
					</view>
				</form>
			</view>
			
			<view class="flex flex-col items-center px-7 mt-5">
				<view @click="goto" class="text-sm text-gray-300">已有账户？<text class="text-gray-100">立即登录</text></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				logo: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-c21a4852-61be-4703-aaf4-fcbe9074012c/9a0371aa-41f6-4982-a421-3a20a239f726.png",
				email: '',
				username: '',
				password: ''
			}
		},
		methods: {
			loginSubmit(){
				uni.switchTab({
					url: '/pages/store/list'
				})
			},
			loginReset(){
				
			},
			goto(){
				uni.navigateTo({
					url: '/pages/signin/login'
				})
			}
		}
	}
</script>

<style  scoped lang="scss">
	.container::after{
		position: fixed;
		z-index: 0;
		top: 0;
		left: 0;
		content: '';
		width: 100vw;
		height: 100vh;
		background-image: url(https://vkceyugu.cdn.bspapp.com/VKCEYUGU-c21a4852-61be-4703-aaf4-fcbe9074012c/cb8bb1e7-af42-4cf1-be15-47c9858bc74f.jpg);
		background-repeat: no-repeat;
		background-size: cover;
	}
	::v-deep .uni-input-placeholder{
		--tw-placeholder-opacity: 1;
		color: rgba(209, 213, 219, var(--tw-placeholder-opacity));
	}
	.form-input{
		height: 80rpx;
		border-bottom: 1px solid #059669;
	}
</style>
