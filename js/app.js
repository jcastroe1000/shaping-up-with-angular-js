
	var app =angular.module('store',[]);
	app.controller('StoreController',function(){
		this.products=gems;
	});
	var gems =[

	{
		name:'Dodecahedron',
		price: 2,
		description:'algo',
		soldOut:true,
		images:[
			{
				full:'1.png',
				thumb:'1.png'
			}
		]
	},
	{
		name:'Pentagonal Gem',
		price: 5.95,
		description:'algo  2',
		soldOut:false,
		images:[
			{
				full:'1.png',
				thumb:'1.png'
			}
		]
	}
	];
