let budget = +prompt("Ваш бюджет на месяц?"),
	shopName = prompt("Название вашего магазина?"),
	obj = {
		budget,
		shopName,
		shopGoods: [],
		employers: {},
		open
}

obj.shopGoods = [prompt("Какой тип товаров будем продавать?"),
				 prompt("Какой тип товаров будем продавать?"), 
				 prompt("Какой тип товаров будем продавать?")];

alert("Ваш бюджет на один день: " + budget/30);
console.log(obj);