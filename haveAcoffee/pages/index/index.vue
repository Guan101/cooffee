<template>
	<view class="bigbox">
		<swiper
			class="swiper"
			:indicator-dots="indicatorDots"
			:interval="interval"
			:duration="duration"
			indicator-color="#D1D5DB"
			indicator-active-color="#047857"
			@change="onChange"
		>
			<swiper-item v-for="(item, index) in swipers" :key="index">
				<view><image mode="widthFix" :src="item.cover"></image></view>
				<view class="text-content">
					<view class="zdy_title">
						<text>{{ item.title }}</text>
					</view>
					<view class="zdy_content">
						<text>{{ item.desc }}</text>
					</view>
				</view>
			</swiper-item>
		</swiper>
		<transition>
			<button type="primary" class="click-btn" @click="gonext" :class="c_name">开启浓香之旅</button>
		</transition>
	</view>
</template>

<script>
export default {
	data() {
		return {
			c_name:'btn_current',
			indicatorDots: true,
			interval: 2000,
			duration: 500,
			swipers: [
				{
					title: "Let's meet our summer coffee drinks",
					cover:
						'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-c21a4852-61be-4703-aaf4-fcbe9074012c/870dec53-8152-4001-8d70-40f01e4161cf.svg',
					desc:
						'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
				},
				{
					title: 'Start your morning with great coffee',
					cover:
						'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-c21a4852-61be-4703-aaf4-fcbe9074012c/012fac6a-95f1-44dc-8dff-87a796c3818b.svg',
					desc:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.'
				},
				{
					title: 'Best coffee shop in this town',
					cover:
						'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-c21a4852-61be-4703-aaf4-fcbe9074012c/4ca0e1c6-9948-4fc0-a9e9-4c18aaa7faa6.svg',
					desc:
						'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
				}
			]
		};
	},
	methods: {
		onChange(e) {
			console.log(e.detail.current);
			if (e.detail.current == 2) {
				this.c_name = 'btn_active';
			} else {
				this.c_name = 'btn_current';
			}
		},
		gonext() {
			uni.redirectTo({
				url: '/pages/signin/welcome'
			});
		}
	}
};
</script>

<style scoped lang="scss">
	.bigbox{
		padding-top: 12vh;
	}
// 轮播图高度
/deep/.uni-swiper-wrapper {
	height: 72vh;
	width: 90vw;
	text-align: center;
	margin: 0 auto;
	image {
		display: block;
		width: 100%;
		margin: 0 auto;
		height: 35vh !important;
	}
	.text-content {
		margin-top: 8%;
		height: 35%;
	}
	.zdy_title {
		font-weight: bold;
		font-size: 48rpx;
	}
	.zdy_content {
		margin-top: 6%;
		font-size: 30rpx;
	}
}
// 轮播图指示器样式
/deep/.uni-swiper-dot {
	width: 20rpx;
	height: 20rpx;
	border-radius: 20rpx;
	transition-property: all;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	transition-duration: 500ms;
	&.uni-swiper-dot-active {
		width: 50rpx;
	}
}
.click-btn {
	position: fixed;
	bottom: 5vh;
	left: 0;
	right: 0;
	width: 80vw;
	font-weight: bold;
	border-radius: 70rpx;
	background-color: #047857;
	padding-top: 12rpx;
	padding-bottom: 12rpx;
	font-size: 40rpx;
	transition: all 1s;
}
.btn_current{
	opacity: 0;
}
.btn_active{
	opacity: 1;
}
</style>
