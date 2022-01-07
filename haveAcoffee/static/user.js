export default {
	state: {
		info: {
			username: 'Kevin Hard',
			avatar: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-c21a4852-61be-4703-aaf4-fcbe9074012c/685be529-dc2e-4a4e-b811-315e24ad505c.jpg',
		},
		addresses: [
			{
				name: '',
				phone: '',
				address: ''
			}
		],
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
	},
	mutations: {
		addOrder(state, order){
			state.orders.unshift(order)
		}
	}
}