<template>
	<view class="pb-26">
		<template v-if="carts.length">
			<view class="mt-4">
				<view class="px-6 space-y-5 mt-3">
					<template v-for="(item, index) in carts" >
						<view @click="toProductShow(item, index)" class="flex items-start p-2 rounded-xl overflow-hidden bg-gray-100 border-l2-green" :key="item.id">
							<view class="relative flex-shrink-0">
								<image class="w-28 rounded-xl" :src="item.cover" mode="widthFix"></image>
							</view>
							<view class="flex flex-col flex-grow items-start px-4 py-2">
								<text class="text-base font-semibold">{{item.title}}</text>
								<view class="flex items-end justify-between w-full mt-4">
									<view class="flex flex-col items-start space-y-2">
										<view class="flex items-end w-full">
											<text class="text-xl text-yellow-600 leading-none font-bold">￥{{item.isDiscount?item.discount_price:item.price}}</text>
											<text class="text-sm leading-none text-gray-400">/份</text>
										</view>
										<text class="text-sm leading-none text-green-700">已选{{item.count}}份</text>
									</view>
								</view>
							</view>
						</view>
					</template>
				</view>
			</view>
			
			<view class="flex items-center px-6 w-full mt-10">
				<button @click="toPay" class="flex items-center justify-center w-full h-14 space-x-1 rounded-full bg-yellow-400 text-base leading-none">
					<uni-icons type="wallet" color="#1F2937" size="52"></uni-icons>
					<text class="font-bold">立即结算</text>
				</button>
			</view>
		</template>
		
		<template v-else>
			<view class="flex flex-col items-center py-20 mt-10">
				<image class="w-36" src="../../static/empty.png" mode="widthFix"></image>
				<text class="text-sm text-gray-400 mt-3">~暂无记录~</text>
				<button @click="toHome" class="flex items-center justify-center px-10 h-12 mt-6 space-x-1 rounded-full bg-green-700 text-white text-base leading-none">
					<text class="font-semibold">返回首页</text>
				</button>
			</view>
		</template>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				carts: []
			};
		},
		onShow() {
			let carts = uni.getStorageSync('carts');
			if(carts){ this.carts = carts }
		},
		methods: {
			toBack(){
				uni.navigateBack()
			},
			toProductShow(item, index){
				uni.navigateTo({
					url: `/pages/product/show?id=${item.id}`
				})
			},
			toHome(){
				uni.switchTab({
					url: '/pages/home/home'
				})
			},
			// 增加订单记录
			addOrder(){
				// 创建时间
				let now = new Date();
				let created_at = now.getFullYear().toString() + '-' + (now.getMonth()+1).toString() + '-' + now.getDate().toString();
				
				// 总金额
				let amount = 0;
				let histories = [];
				this.carts.map(item=>{
					let price = item.isDiscount?item.discount_price:item.price;
					amount = amount + (item.count * parseInt(price));
					let temp = {
						id: item.id,
						category_id: item.category_id,
						title: item.title,
						cover: item.cover,
						price,
						count: item.count
					}
					histories.push(temp)
				})
				
				let order = {
					created_at,
					amount,
					histories
				}
				this.$store.commit('addOrder', order)
			},
			toPay(){
				let that = this;
				uni.redirectTo({
					url: '/pages/mine/orders',
					success() {
						that.addOrder();
						uni.removeStorageSync('carts');
					}
				})
			}
		}
	}
</script>

<style scoped lang="scss">
</style>

