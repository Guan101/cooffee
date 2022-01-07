<template>
	<view class="pb-10">
		<template v-if="orders.length">
			<view class="px-6 mt-8">
				<view class="relative">
					<input
						placeholder-class="text-gray-400 font-light"
						class="w-full h-14 px-4 border rounded-full text-sm"
						placeholder="搜索订单记录"
						type="text"
					/>
					<view class="absolute top-1v2 right-4 transform -translate-y-1v2 text-gray-400">
						<uni-icons type="search" color="#9CA3AF" size="24"></uni-icons>
					</view>
				</view>
			</view>
			<view class="mt-10 px-6">
				<template v-for="(order, index) in orders">
					<view class="mb-8" :key="index">
						<view class="flex items-end justify-between">
							<text class="leading-none text-yellow-500 text-xl font-semibold">￥{{ order.amount }}</text>
							<text class="text-sm leading-none text-gray-400">{{ order.created_at }}</text>
						</view>
						<view class="space-y-5 mt-3">
							<template v-for="(item, idx) in order.histories">
								<view
									@click="toProductShow(item, index)"
									class="flex items-start p-2 rounded-xl overflow-hidden bg-gray-100 shadow-lg"
									:key="idx"
								>
									<view class="relative flex-shrink-0">
										<image class="w-16 rounded-xl" :src="item.cover" mode="widthFix"></image>
									</view>
									<view class="flex flex-col flex-grow items-start space-y-2 px-2 py-2">
										<text class="text-base leading-none font-semibold">{{ item.title }}</text>
										<view class="flex items-end space-x-1 w-full">
											<text class="text-lg text-yellow-600 leading-none">￥{{ item.price }}</text>
											<text class="text-sm leading-none text-gray-400">/{{ item.count }}份</text>
										</view>
									</view>
								</view>
							</template>
						</view>
					</view>
				</template>
			</view>
		</template>
		<template v-else>
			<view class="flex flex-col items-center py-20 mt-10">
				<image class="w-36" src="../../static/empty.png" mode="widthFix"></image>
				<text class="text-sm text-gray-400 mt-3">~暂无记录~</text>
				<button
					@click="toMineIndex"
					class="flex items-center justify-center px-10 h-12 mt-6 space-x-1 rounded-full bg-green-700 text-white text-base leading-none"
				>
					<text class="font-semibold">返回个人中心</text>
				</button>
			</view>
		</template>
	</view>
</template>

<script>
export default {
	data() {
		return {
			orders: [
				{
					created_at: '2021-12-04',
					amount: 98.5,
					histories: [
						{
							id: 1,
							category_id: 4,
							title: '陨石大福',
							cover: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-c21a4852-61be-4703-aaf4-fcbe9074012c/1c544f5a-53c6-43cf-8a1a-e58c526ce153.png',
							price: 23.5,
							count: 3
						},
						{
							id: 12,
							category_id: 1,
							title: '卡布奇洛',
							cover: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-c21a4852-61be-4703-aaf4-fcbe9074012c/2f70b47c-cba4-4278-b0eb-ac50e180daa9.png',
							price: 17,
							count: 3
						}
					]
				},
				{
					created_at: '2021-11-20',
					amount: 40.5,
					histories: [
						{
							id: 3,
							category_id: 4,
							title: '巧克力小司康',
							cover: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-c21a4852-61be-4703-aaf4-fcbe9074012c/410dcae3-8bb2-4a7e-954d-e52cfe1d1f79.png',
							price: 23.5,
							count: 1
						},
						{
							id: 20,
							category_id: 3,
							title: '冷萃冰咖啡',
							cover: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-c21a4852-61be-4703-aaf4-fcbe9074012c/375be260-d9cd-4996-8ecf-a87b2e288fc8.png',
							price: 17,
							count: 1
						}
					]
				}
			]
		};
	},
	methods: {
		toMineIndex() {
			uni.switchTab({
				url: '/pages/mine/index'
			});
		}
	}
};
</script>

<style lang="scss"></style>
