// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "broccoli",
		nutFree: true,
		lacFree: true,
		organic:true,

		price: 1.99
	},
	{
		name: "yogurt",
		nutFree: true,
		lacFree: false,
		organic:false,
		price: 2.35
	},
	{
		name: "salmon",
		nutFree: true,
		lacFree: true,
		organic:false,

		price: 10.00
	},
	{
		name: "egg",
		nutFree: true,
		lacFree: true,
		organic:true,

		price: 6.50
	},
	{
		name: "beef",
		nutFree: true,
		lacFree: true,
		organic:false,
	
		price: 5.25
	},
	{
		name: "milk",
		nutFree: true,
		lacFree: false,
		organic:false,

		price: 4.00
	},
	{
		name: "noodles",
		nutFree: true,
		lacFree: false,
		organic:false,

		price: .50
	},
	{
		name: "almond granola",
		nutFree: false,
		lacFree: true,
		organic:false,

		price: 3.00
	},
	{
		name: "apples",
		nutFree: true,
		lacFree: true,
		organic:true,

		price: 2.00
	},
	{
		name: "chips",
		nutFree: true,
		lacFree: false,
		organic:false,

		price: 3.50
	},
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	var a = document.getElementById("organicSelect");
	var organic = a.value;
	var c = document.getElementById("categorySelect");
	
	for (let i=0; i<prods.length; i+=1) {
		
		if ((restriction == "nutFree") && (prods[i].nutFree == true) ){
				if ((organic == "Organic") && (prods[i].organic == false)){
			}
				else if ((organic == "Non-organic") && (prods[i].organic == true)){
			}
				else {product_names.push(prods[i]); }
			}
		else if ((restriction == "lacFree") && (prods[i].lacFree == true)){
				if ((organic == "Organic") && (prods[i].organic == false)){
			}
				else if ((organic == "Non-organic") && (prods[i].organic == true)){
			}
				else {product_names.push(prods[i]); }
			}
		else if (restriction == "None"){
			if ((organic == "Organic") && (prods[i].organic == false)){
			}
			else if ((organic == "Non-organic") && (prods[i].organic == true)){
			}
			else {product_names.push(prods[i]); }
		    }
		
	}
	
	
 /*
	var len_product_temp = product_names,length;
	var b = document.getElementById("categorySelect");
	var category = b.value;
	for (let i = 0; i<len_product_temp; i+=1) {
		
		
		if ((category == "MeatandSeafood") && (prods[i].category == "meat and seafood")){
			product_names.push(prods[i]);
		}

		else if ((category == "Dairy") && (prods[i].organic == "dairy")){
			product_names.push(prods[i]); 
		}
			
		else if ((category == "Grain") && (prods[i].organic == "grain")){
			product_names.push(prods[i]); 
		}
		
		else if ((category == "FruitsandVegetables") && (prods[i].organic == "fruits and vegetables")){
			product_names.push(prods[i]); 
		}

		else if ((category == "Snack") && (prods[i].organic == "snack")){
			product_names.push(prods[i]); 
		}
	}
	*/

	
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}