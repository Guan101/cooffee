<template>
	<view class="pb-10 text-gray-800">
		<view class="flex items-end justify-between px-6 mt-4">
			<view class="flex flex-col items-start space-y-2">
				<text class="text-sm text-gray-700">Good Morning</text>
				<text class="leading-none text-2xl font-bold">我的名字</text>
			</view>
			<view class="relative">
				<image
					class="w-12 rounded-xl border"
					src="https://img0.baidu.com/it/u=167442223,473836441&fm=26&fmt=auto"
					mode="widthFix"
				></image>
			</view>
		</view>
		<!-- 品牌轮播图 -->
		<view class="px-6 mt-8">
			<swiper class="h-14" :duration="500">
				<template v-for="(item, index) in banners">
					<swiper-item class="rounded-lg overflow-hidden" :key="index">
						<image class="h-full" :src="item.cover" mode="heightFix"></image>
					</swiper-item>
				</template>
			</swiper>
		</view>
		<!-- 搜索框 -->
		<view class="px-6 mt-8">
			<view class="relative">
				<input
					placeholder-class="text-gray-400 font-light"
					class="w-full h-14 px-4 bg-gray-50 border rounded-full text-sm"
					placeholder="想吃点什么"
					type="text"
				/>
				<view class="absolute top-1v2 right-4 transform -translate-y-1v2 text-gray-400">
					<uni-icons type="search" color="#9CA3AF" size="25"></uni-icons>
				</view>
			</view>
		</view>
		<!-- 今日特惠轮播图 -->
		<view class="mt-8">
			<view class="flex items-center justify-between px-6 "><text class="text-lg font-bold">今日特惠</text></view>
			<swiper class="h-40 mt-3" :duration="500" previous-margin="48rpx" next-margin="80rpx">
				<template v-for="(item, index) in discounts">
					<swiper-item class="pr-6" :key="index">
						<view
							@click="toProductShow(item, index)"
							class="relative flex w-full h-full px-5 py-6 bg-center bg-cover rounded-xl overflow-hidden"
							:style="{ backgroundImage: `url(${item.bg_cover})`, backgroundColor: `${item.bg_color}` }"
						>
							<view class="flex flex-col items-start w-48 text-white">
								<text class="text-lg font-semibold">{{ item.title }}</text>
								<view class="flex items-end space-x-2 mt-4">
									<text class="text-xl leading-none font-bold">￥{{ item.discount_price }}</text>
									<text class="text-base leading-none text-yellow-200 line-through">
										￥{{ item.price }}
									</text>
								</view>
							</view>
							<image class="absolute top-1v2 right-4 w-28" :src="item.thumb" mode="widthFix"></image>
						</view>
					</swiper-item>
				</template>
			</swiper>
		</view>
		<!-- 食谱菜单 -->
		<view class="mt-8">
			<view class="flex items-center justify-between px-6 ">
				<text class="text-lg leading-none font-bold">食谱菜单</text>
			</view>
			<swiper class="h-24 mt-2" :duration="500" previous-margin="48rpx" next-margin="240rpx">
				<template v-for="(item, index) in categories">
					<swiper-item class="py-2 pr-6" :key="index">
						<view
							@click="toProductCategory(item, index)"
							class="flex items-start h-full space-x-3 px-5 py-6 rounded-xl bg-green-700 text-white"
						>
							<image class="w-8 h-8" :src="item.icon" mode="widthFix"></image>
							<view class="flex flex-col items-start space-y-2">
								<text class="leading-none text-base font-bold capitalize">{{ item.name }}</text>
								<text class="text-sm text-yellow-200 capitalize">{{ item.total }} menus</text>
							</view>
						</view>
					</swiper-item>
				</template>
			</swiper>
		</view>

		<view class="mt-8">
			<view class="flex items-center justify-between px-6 ">
				<text class="text-lg leading-none font-bold">今日推荐</text>
			</view>

			<view class="px-6 space-y-5 mt-4">
				<template v-for="(item, index) in products">
					<view
						@click="toProductShow(item, index)"
						class="flex items-start p-2 rounded-xl overflow-hidden bg-gray-100 shadow-lg"
						:key="item.id"
					>
						<view class="relative flex-shrink-0">
							<image class="w-28 rounded-xl" :src="item.cover" mode="widthFix"></image>
						</view>
						<view class="flex flex-col flex-grow items-start px-4 py-2">
							<text class="text-base font-bold">{{ item.title }}</text>
							<view class="flex items-end justify-between w-full mt-4">
								<view class="flex flex-col items-start space-y-2">
									<view class="flex items-end space-x-1 w-full">
										<text class="text-lg text-yellow-600 leading-none font-bold">
											￥{{ item.discount_price }}
										</text>
										<text class="text-sm leading-none line-through text-gray-400">
											￥{{ item.price }}
										</text>
									</view>
									<text class="text-sm leading-none text-gray-400">
										今日已售{{ Math.floor(Math.random() * 100) }}份
									</text>
								</view>
							</view>
						</view>
					</view>
				</template>
			</view>
		</view>
		
		
		<view class="mt-10 px-6">
			<view class="relative rounded-xl overflow-hidden bg-green-700" >
				<!-- 门店配图片 -->
				<image class="w-full" src="https://img2.baidu.com/it/u=2742049502,3632415821&fm=26&fmt=auto" mode="widthFix"></image>
				<view class="flex flex-col px-4 py-5 space-y-2 text-white">
					<text class="text-base">门店名称</text>
					<view class="flex items-end justify-between">
						<view class="flex flex-col items-start space-y-2 text-sm leading-none text-gray-300">
							<text>门店营业时间是：xxxxxxx</text>
							<text>门店电话：13511111111</text>
						</view>
						<view class="">
							<view class="grid place-content-center w-10 h-10 rounded-full bg-white bg-opacity-20">
								<uni-icons type="phone" color="#FFFFFF" size="48" ></uni-icons>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			store: false,
			banners: [
				{
					url: '',
					params: {},
					cover:
						'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-c21a4852-61be-4703-aaf4-fcbe9074012c/1a08135b-32e5-4061-9a9e-81e94d16b3ad.jpg'
				}
			],
			discounts: [
				{
					id: 1,
					title: 'Hot Mocha Cappuccino Latte',
					thumb:
						'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-c21a4852-61be-4703-aaf4-fcbe9074012c/3451fe05-c815-4f48-9e8b-e3de27c984b6.png',
					bg_cover:
						'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-c21a4852-61be-4703-aaf4-fcbe9074012c/ee6a3c7b-0328-4678-847a-334f2bae36cc.png',
					bg_color: '#059669',
					price: 9.9,
					discount_price: 5.8
				},
				{
					id: 2,
					title: 'Hot Sweet Indonesian Tea',
					thumb:
						'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-c21a4852-61be-4703-aaf4-fcbe9074012c/f3fdce24-6d11-4297-bf2a-235c3186fcef.png',
					bg_cover:
						'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-c21a4852-61be-4703-aaf4-fcbe9074012c/ee6a3c7b-0328-4678-847a-334f2bae36cc.png',
					bg_color: '#EF4444',
					price: 14,
					discount_price: 6.5
				},
				{
					id: 3,
					title: 'Mocha Coffee Creamy Milky',
					thumb:
						'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-c21a4852-61be-4703-aaf4-fcbe9074012c/a6c13120-7fe6-421a-ae90-2e25e15c9cd0.png',
					bg_cover:
						'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-c21a4852-61be-4703-aaf4-fcbe9074012c/ee6a3c7b-0328-4678-847a-334f2bae36cc.png',
					bg_color: '#7C3AED',
					price: 12,
					discount_price: 4.8
				}
			],
			categories: [
				{
					id: 1,
					name: '浓情咖啡',
					icon:
						'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-c21a4852-61be-4703-aaf4-fcbe9074012c/b72fe298-1f2a-4a17-93ca-bb8f5e608d12.svg',
					total: 23
				},
				{
					id: 2,
					name: '烘焙轻食',
					icon:
						'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-c21a4852-61be-4703-aaf4-fcbe9074012c/f2488c24-6065-4478-98f8-0946f78c5e69.svg',
					total: 23
				},
				{
					id: 3,
					name: '沁心冰饮',
					icon:
						'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-c21a4852-61be-4703-aaf4-fcbe9074012c/d4f92d44-ce4a-4ead-b3b8-127a357d06e1.svg',
					total: 23
				},
				{
					id: 4,
					name: '甜品小点',
					icon:
						'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-c21a4852-61be-4703-aaf4-fcbe9074012c/9039019d-03f3-45f0-97ed-d68249f96b70.svg',
					total: 23
				}
			],
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
				
			],
			
		};
	},
	// onShow() {
	// 	let store = uni.getStorageSync('store');
	// 	if(store){
	// 		this.store = store;
	// 	}else{
	// 		this.store = this.stores[Math.floor(Math.random()*this.stores.length)];
	// 		uni.setStorageSync('store', this.store);
	// 	}
	// },

	methods: {
		toProductShow(item, index) {
			uni.navigateTo({
				url: `/pages/product/show?id=${item.id}`
			});
		},
		toProductCategory(item) {
			uni.navigateTo({
				url: `/pages/product/category?id=${item.id}`
			});
		}
	}
};
</script>

<style scoped lang="scss"></style>
