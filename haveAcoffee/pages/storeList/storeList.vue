<template>
	<view class="relative flex flex-col h-screen overflow-hidden">
		<map class="w-full flex-grow" :latitude="latitude" :longitude="longitude" :markers="covers"></map>
		<scroll-view class="h-96 pt-6 bg-green-600 rounded-t-2xl" scroll-y="true">
			<view class="px-6 pb-20" style="border-radius: 40rpx 40rpx 0 0;">
				<view>
					<text class="text-sm leading-none font-semibold text-white">
						全城共有
						<text class="text-lg leading-none text-green-200">0</text>
						家店期待为您提供服务
					</text>
				</view>

				<view class="space-y-6 mt-5">
					<template v-for="(item, index) in stores">
						<view
							@click="toStore(item, index)"
							class="bg-white rounded-xl overflow-hidden shadow-md"
							:key="index"
						>
							<image class="w-full" :src="item.cover" mode="widthFix"></image>
							<view class="flex flex-col items-start py-4 px-5 space-y-2">
								<text class="text-base font-semibold capitalize">{{ item.name }}</text>
								<view class="flex items-end justify-between w-full">
									<view class="flex flex-col items-start space-y-2">
										<text class="text-sm leading-none text-gray-500">
											{{ item.business_hours }}
										</text>
										<text class="text-sm leading-none text-gray-500">{{ item.call }}</text>
									</view>
									<text class="text-xl leading-none font-bold text-green-700">{{ item.score }}</text>
								</view>
							</view>
						</view>
					</template>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			latitude: 34.27,
			longitude: 108.947,
			covers: [
				{
					id: 1,
					latitude: 34.909,
					longitude: 108.39742,
					iconPath: '../../static/map.png'
				},
				{
					id: 2,
					latitude: 34.9,
					longitude: 108.39,
					iconPath: '../../static/map.png'
				}
			],
			stores : [
				{
					name: '南山臻选(王府井百货熙地港店)',
					cover: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-c21a4852-61be-4703-aaf4-fcbe9074012c/be3fa0e6-8f09-44a5-9865-4af00ba082a7.jpg',
					address: '西安市未央区未央路170号熙地港购物中心1号001号店铺王府井百货F1',
					call: '(029)86184270',
					score: 4.8,
					business_hours: '08:00~20:00',
					server: {
						name: '宋先生',
						number: '2356254'
					}
				},
				{
					name: '南山臻选(王府井百货熙地港店)',
					cover: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-c21a4852-61be-4703-aaf4-fcbe9074012c/be3fa0e6-8f09-44a5-9865-4af00ba082a7.jpg',
					address: '西安市未央区未央路170号熙地港购物中心1号001号店铺王府井百货F1',
					call: '(029)86184270',
					score: 4.4,
					business_hours: '08:00~20:00',
					server: {
						name: '王先生',
						number: '2445556'
					}
				},
				{
					name: '南山臻选(世纪金花赛高店)',
					cover: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-c21a4852-61be-4703-aaf4-fcbe9074012c/8bf03ede-1009-49e9-9168-3e1b9db637b5.jpg',
					address: '陕西省西安市未央区未央路150号世纪金花F1',
					call: '(029)86186390',
					score: 3.9,
					business_hours: '08:00~20:00',
					server: {
						name: '吕先生',
						number: '2355514'
					}
				},
				{
					name: '南山臻选(卜蜂中心新天地店)',
					cover: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-c21a4852-61be-4703-aaf4-fcbe9074012c/888d71d6-a499-4467-9047-f2dcb7a0bef7.jpg',
					address: '陕西省西安市未央区凤城八路与渭滨路交汇处西北角卜蜂中心F1',
					call: '(029)89614766',
					score: 4.5,
					business_hours: '08:00~20:00',
					server: {
						name: '董女士',
						number: '2124733'
					}
				},
				{
					name: '南山臻选(汉神购物广场店)',
					cover: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-c21a4852-61be-4703-aaf4-fcbe9074012c/7c3c7342-96ac-4a83-b6b4-624b40fd630a.jpg',
					address: '陕西省西安市未央区凤城八路168号汉神购物广场F1',
					call: '(029)62645856',
					score: 4.5,
					business_hours: '08:00~20:00',
					server: {
						name: '胡女士',
						number: '2128546'
					}
				},
				{
					name: '南山臻选(汉神购物广场店)',
					cover: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-c21a4852-61be-4703-aaf4-fcbe9074012c/7c3c7342-96ac-4a83-b6b4-624b40fd630a.jpg',
					address: '陕西省西安市未央区凤城八路168号汉神购物广场F1',
					call: '(029)62645856',
					score: 4.5,
					business_hours: '08:00~20:00',
					server: {
						name: '胡女士',
						number: '2128546'
					}
				}
			]
		};
	},
	methods: {
		toStore(item, index) {
			uni.setStorage({
				key: 'store',
				data: item,
				success() {
					uni.switchTab({
						url: '/pages/home/home'
					});
				}
			});
		}
	}
};
</script>

<style lang="scss"></style>
