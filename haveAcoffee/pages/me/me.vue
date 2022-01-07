<template>
	<view class="relative pb-10">
		<view class="flex flex-col items-center pb-10 bg-green-700">
			<view class="flex items-center w-full h-16 px-6 space-x-3 text-white">
				<text class="text-base font-semibold">个人中心</text>
			</view>
			<view class="user-avatar mt-14">
				<image class="avatar" src="https://img0.baidu.com/it/u=167442223,473836441&fm=26&fmt=auto" mode="aspectFit"></image>
			</view>
			<text class="text-xl font-semibold text-white leading-none mt-14">用户名字</text>
			<view class="grid grid-cols-4 gap-4 w-full px-10 mt-10">
				<button @click="toOrderPage" class="flex items-center justify-center w-14 h-14 bg-white rounded-full">
					<uni-icons type="cart" color="#047857" size="30"></uni-icons>
				</button>
				<button class="flex items-center justify-center w-14 h-14 bg-white rounded-full">
					<uni-icons type="location" color="#047857" size="30"></uni-icons>
				</button>
				<button class="flex items-center justify-center w-14 h-14 bg-white rounded-full">
					<uni-icons type="email" color="#047857" size="30"></uni-icons>
				</button>
				<button class="flex items-center justify-center w-14 h-14 bg-white rounded-full">
					<uni-icons type="gear" color="#047857" size="30"></uni-icons>
				</button>
			</view>
		</view>
		
		<view class="mt-8">
			<view class="flex items-center justify-between px-6 ">
				<text class="text-lg font-bold">猜你喜欢</text>
			</view>
			
			<view class="px-6 space-y-5 mt-3">
				<template v-for="(item, index) in products" >
					<view @click="toProductShow(item, index)" class="flex items-start p-2 rounded-xl overflow-hidden bg-gray-100 shadow-lg" :key="item.id">
						<view class="relative flex-shrink-0">
							<image class="w-28 rounded-xl" :src="item.cover" mode="widthFix"></image>
						</view>
						<view class="flex flex-col flex-grow items-start px-4 py-2">
							<text class="text-base font-semibold">{{item.title}}</text>
							<view class="flex items-end justify-between w-full mt-4">
								<view class="flex flex-col items-start space-y-2">
									<view class="flex items-end space-x-1 w-full">
										<text class="text-lg text-yellow-600 leading-none font-bold">￥{{item.discount_price}}</text>
										<text class="text-sm leading-none line-through text-gray-400">￥{{item.price}}</text>
									</view>
									<text class="text-sm leading-none text-gray-400">今日已售{{Math.floor(Math.random()*100)}}份</text>
								</view>
								
							</view>
						</view>
					</view>
				</template>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				products: [
					{
						id: 1,
						category_id: 4,
						title: '陨石大福',
						cover: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-c21a4852-61be-4703-aaf4-fcbe9074012c/1c544f5a-53c6-43cf-8a1a-e58c526ce153.png',
						picture: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-c21a4852-61be-4703-aaf4-fcbe9074012c/3e91fb69-7028-44f1-bedc-da7438e754c6.jpg',
						norm: false,
						price: 11,
						discount_price: 6.9,
						isDiscount: false,
						isShow_banner: false,
						isShow_home: false
					},
					{
						id: 2,
						category_id: 4,
						title: '提拉米苏风味大福',
						cover: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-c21a4852-61be-4703-aaf4-fcbe9074012c/7309462b-d112-4b2d-b113-3f9044369f3b.png',
						picture: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-c21a4852-61be-4703-aaf4-fcbe9074012c/3e91fb69-7028-44f1-bedc-da7438e754c6.jpg',
						norm: false,
						price: 10,
						discount_price: 6.6,
						isDiscount: false,
						isShow_banner: false,
						isShow_home: true
					},
					{
						id: 3,
						category_id: 4,
						title: '巧克力小司康',
						cover: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-c21a4852-61be-4703-aaf4-fcbe9074012c/410dcae3-8bb2-4a7e-954d-e52cfe1d1f79.png',
						picture: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-c21a4852-61be-4703-aaf4-fcbe9074012c/3e91fb69-7028-44f1-bedc-da7438e754c6.jpg',
						norm: false,
						price: 9,
						discount_price: 5.9,
						isDiscount: false,
						isShow_banner: false,
						isShow_home: false
					},
					{
						id: 4,
						category_id: 4,
						title: '抹茶半熟芝士',
						cover: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-c21a4852-61be-4703-aaf4-fcbe9074012c/7b4c98f2-c94d-433d-ab1a-fd39e87a4455.png',
						picture: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-c21a4852-61be-4703-aaf4-fcbe9074012c/3e91fb69-7028-44f1-bedc-da7438e754c6.jpg',
						price: 11,
						discount_price: 6.9,
						isDiscount: false,
						isShow_banner: false,
						isShow_home: false
					},
					{
						id: 7,
						category_id: 1,
						title: '生椰拿铁',
						cover: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-c21a4852-61be-4703-aaf4-fcbe9074012c/9e75e3d6-18ab-44a7-a6dc-04cb448695b9.png',
						picture: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-c21a4852-61be-4703-aaf4-fcbe9074012c/785d4ea4-1c7d-4c8d-b64e-a9ebd6d6a28c.jpg',
						price: 29,
						discount_price: 18,
						isDiscount: false,
						isShow_banner: false,
						isShow_home: false
					},
					{
						id: 8,
						category_id: 1,
						title: '精粹奥瑞白',
						cover: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-c21a4852-61be-4703-aaf4-fcbe9074012c/82260075-cab7-45b5-bacd-347a39a19cc7.png',
						picture: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-c21a4852-61be-4703-aaf4-fcbe9074012c/785d4ea4-1c7d-4c8d-b64e-a9ebd6d6a28c.jpg',
						price: 20,
						discount_price: 17,
						isDiscount: false,
						isShow_banner: false,
						isShow_home: true
					},
					{
						id: 11,
						category_id: 1,
						title: '焦糖玛奇朵',
						cover: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-c21a4852-61be-4703-aaf4-fcbe9074012c/fd23504a-4bc6-4de2-b7ed-957fda487583.png',
						picture: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-c21a4852-61be-4703-aaf4-fcbe9074012c/785d4ea4-1c7d-4c8d-b64e-a9ebd6d6a28c.jpg',
						price: 29,
						discount_price: 17,
						isDiscount: false,
						isShow_banner: false,
						isShow_home: true
					},
					{
						id: 12,
						category_id: 1,
						title: '卡布奇洛',
						cover: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-c21a4852-61be-4703-aaf4-fcbe9074012c/2f70b47c-cba4-4278-b0eb-ac50e180daa9.png',
						picture: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-c21a4852-61be-4703-aaf4-fcbe9074012c/785d4ea4-1c7d-4c8d-b64e-a9ebd6d6a28c.jpg',
						price: 29,
						discount_price: 17,
						isDiscount: false,
						isShow_banner: false,
						isShow_home: false
					},
					{
						id: 13,
						category_id: 1,
						title: '加浓美式黑咖',
						cover: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-c21a4852-61be-4703-aaf4-fcbe9074012c/cf9aa365-324e-4167-b0e6-db29f3dc5c7e.png',
						picture: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-c21a4852-61be-4703-aaf4-fcbe9074012c/785d4ea4-1c7d-4c8d-b64e-a9ebd6d6a28c.jpg',
						price: 26,
						discount_price: 16,
						isDiscount: false,
						isShow_banner: false,
						isShow_home: false
					},
					{
						id: 14,
						category_id: 2,
						title: '蓝莓芝士软欧包',
						cover: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-c21a4852-61be-4703-aaf4-fcbe9074012c/94f1a0ea-c298-41b2-83a6-074af467a878.png',
						picture: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-c21a4852-61be-4703-aaf4-fcbe9074012c/c54b4cc7-6d31-4d44-a5ca-050ef3b8bbe1.jpg',
						price: 15,
						discount_price: 9.9,
						isDiscount: false,
						isShow_banner: false,
						isShow_home: true
					},
					{
						id: 15,
						category_id: 2,
						title: '烟熏鸡肉蛋香可颂',
						cover: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-c21a4852-61be-4703-aaf4-fcbe9074012c/fa772aff-ea1d-42ba-9c1f-c721feb270fe.png',
						picture: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-c21a4852-61be-4703-aaf4-fcbe9074012c/c54b4cc7-6d31-4d44-a5ca-050ef3b8bbe1.jpg',
						price: 18,
						discount_price: 11.9,
						isDiscount: false,
						isShow_banner: false,
						isShow_home: false
					},
					{
						id: 17,
						category_id: 2,
						title: '火腿芝士蛋香可颂',
						cover: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-c21a4852-61be-4703-aaf4-fcbe9074012c/f7b1f284-ca22-4609-b96f-bcf9ba3fa819.png',
						picture: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-c21a4852-61be-4703-aaf4-fcbe9074012c/c54b4cc7-6d31-4d44-a5ca-050ef3b8bbe1.jpg',
						price: 18,
						discount_price: 11.9,
						isDiscount: false,
						isShow_banner: false,
						isShow_home: false
					},
					{
						id: 18,
						category_id: 2,
						title: '海盐芝士吐司',
						cover: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-c21a4852-61be-4703-aaf4-fcbe9074012c/ef9a12de-b7ed-4829-991e-1c0a129b6c5d.png',
						picture: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-c21a4852-61be-4703-aaf4-fcbe9074012c/c54b4cc7-6d31-4d44-a5ca-050ef3b8bbe1.jpg',
						price: 12,
						discount_price: 7.9,
						isDiscount: false,
						isShow_banner: false,
						isShow_home: true
					},
					{
						id: 19,
						category_id: 3,
						title: '冰摇桃桃乌龙茶',
						cover: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-c21a4852-61be-4703-aaf4-fcbe9074012c/035d8e49-f284-45df-8712-acce60c93354.png',
						picture: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-c21a4852-61be-4703-aaf4-fcbe9074012c/46d6f694-e1ec-4ce7-8e6e-8e83203568ed.jpg',
						price: 5,
						discount_price: 3.5,
						isDiscount: false,
						isShow_banner: false,
						isShow_home: false
					},
					{
						id: 20,
						category_id: 3,
						title: '冷萃冰咖啡',
						cover: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-c21a4852-61be-4703-aaf4-fcbe9074012c/375be260-d9cd-4996-8ecf-a87b2e288fc8.png',
						picture: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-c21a4852-61be-4703-aaf4-fcbe9074012c/46d6f694-e1ec-4ce7-8e6e-8e83203568ed.jpg',
						price: 24,
						discount_price: 12.4,
						isDiscount: false,
						isShow_banner: false,
						isShow_home: false
					}
					
				]
			};
		},
		methods: {
			toOrderPage(){
				uni.navigateTo({
					url: '/pages/my-order/my-order'
				})
			},
			toProductShow(item, index){
				uni.navigateTo({
					url: `/pages/product/show?id=${item.id}`
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.user-avatar{
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		.avatar{
			width: 240rpx;
			height: 240rpx;
			border-radius: 200rpx;
		}
		&::before{
			content: '';
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 400rpx;
			height: 400rpx;
			border: 1px solid rgba(255, 255, 255, 0.1);
			border-radius: 400rpx;
		}
		&::after{
			content: '';
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 320rpx;
			height: 320rpx;
			border: 6px solid #FFCFA7;
			border-radius: 300rpx;
		}
	}
</style>
