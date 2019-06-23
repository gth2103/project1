var queryURL = "https://api.nal.usda.gov/ndb/reports/?ndbno=45001612&type=b&format=json&api_key=txP1V3zspB7kJrpwR6ack7OIjbhY8BRrfDaF4kjV"

var vanilla;
var brown;
var yellow;
var pink;
var blue;
var green;
var orange;

var flavors = ['vanilla', 'brown', 'yellow', 'pink', 'blue', 'green', 'orange']

var getQueryUrls = function() {

	flavors.forEach(function(flavor){

		if(flavor === 'vanilla')  {
			queryURL = "https://api.nal.usda.gov/ndb/reports/?ndbno=45001612&type=b&format=json&api_key=txP1V3zspB7kJrpwR6ack7OIjbhY8BRrfDaF4kjV";
			request('vanilla');
		}
		else if(flavor === 'brown')  {
			queryURL = "https://api.nal.usda.gov/ndb/reports/?ndbno=45110929&type=b&format=json&api_key=txP1V3zspB7kJrpwR6ack7OIjbhY8BRrfDaF4kjV";
			request('brown');
		}
		else if(flavor === 'yellow')  {
			queryURL = "https://api.nal.usda.gov/ndb/reports/?ndbno=45355867&type=b&format=json&api_key=txP1V3zspB7kJrpwR6ack7OIjbhY8BRrfDaF4kjV";
			request('yellow');

		}
		else if(flavor === 'pink')  {
			queryURL = "https://api.nal.usda.gov/ndb/reports/?ndbno=45285676&type=b&format=json&api_key=txP1V3zspB7kJrpwR6ack7OIjbhY8BRrfDaF4kjV";
			request('pink');
		}
		else if(flavor === 'blue')  {
			queryURL = "https://api.nal.usda.gov/ndb/reports/?ndbno=45086347&type=b&format=json&api_key=txP1V3zspB7kJrpwR6ack7OIjbhY8BRrfDaF4kjV";
			request('blue');
		}
		else if(flavor === 'green')  {
			queryURL = "https://api.nal.usda.gov/ndb/reports/?ndbno=45284859&type=b&format=json&api_key=txP1V3zspB7kJrpwR6ack7OIjbhY8BRrfDaF4kjV";
			request('green');
		}
		else if(flavor === 'orange')  {
			queryURL = "https://api.nal.usda.gov/ndb/reports/?ndbno=45003426&type=b&format=json&api_key=txP1V3zspB7kJrpwR6ack7OIjbhY8BRrfDaF4kjV";
			request('orange');
		}
	})
}

// Here we run our AJAX call to the API

var request = function(flavor){
	$.ajax({
		url: queryURL,
		method: "GET"
	})
	.then(function(response) {

		var info = {

			energy: "Energy: " + response.report.food.nutrients[0].value + response.report.food.nutrients[0].unit,
			protein: "Protein: " + response.report.food.nutrients[1].value + response.report.food.nutrients[1].unit,
			fat: "Fat: " + response.report.food.nutrients[2].value + response.report.food.nutrients[2].unit,
			carb: "Carbohydrate: " + response.report.food.nutrients[3].value + response.report.food.nutrients[3].unit,
			fiber: "Fiber: " + response.report.food.nutrients[4].value + response.report.food.nutrients[4].unit,
			sugar: "Sugar: " + response.report.food.nutrients[5].value + response.report.food.nutrients[5].unit,
			calcium: "Calcium: " + response.report.food.nutrients[6].value + response.report.food.nutrients[6].unit,
			iron: "Iron: " + response.report.food.nutrients[7].value + response.report.food.nutrients[7].unit,
			sodium: "Sodium: " + response.report.food.nutrients[8].value + response.report.food.nutrients[8].unit,
			vitaminC: "Vitamin C: " + response.report.food.nutrients[9].value + response.report.food.nutrients[9].unit,
			vitaminA: "Vitamin A: " + response.report.food.nutrients[10].value + response.report.food.nutrients[10].unit,
			saturated: "Saturated Fat: " + response.report.food.nutrients[11].value + response.report.food.nutrients[11].unit,
			trans: "Trans Fat: " + response.report.food.nutrients[12].value + response.report.food.nutrients[12].unit,
			cholesterol: "Cholesterol: " + response.report.food.nutrients[13].value + response.report.food.nutrients[12].unit,
		}

		if(flavor === 'vanilla')  {
			vanilla = info;
		}
		else if(flavor === 'brown')  {
			brown = info;
		}
		else if(flavor === 'yellow')  {
			yellow = info;
		}
		else if(flavor === 'pink')  {
			pink = info;
		}
		else if(flavor === 'blue')  {
			blue = info;
		}
		else if(flavor === 'green')  {
			green = info;
		}
		else if(flavor === 'orange')  {
			orange = info;
		}
	});
}


var displayVanilla = function(){
	$('.vanilla').on('mouseover', function(){
		var div = "<h5>Vanilla Bean</h5><hr>" + vanilla.energy + "<br>" + vanilla.protein + "<br>" + vanilla.fat + "<br>" + vanilla.carb + "<br>" + vanilla.fiber + "<br>" + vanilla.sugar + "<br>" + vanilla.calcium + "<br>" + vanilla.iron + "<br>" + vanilla.sodium + "<br>" + vanilla.vitaminC + "<br>" + vanilla.vitaminA + "<br>" + vanilla.saturated + "<br>" + vanilla.trans + "<br>" + vanilla.cholesterol + "<br><br>Ingredients: MILK, SUGAR ,CORN SYRUP, CREAM, TAPIOCA STARCH, WHEY PROTEIN ISOLATE, MONO- AND DI-GLYCERIDES, GUAR GUM, TARA GUM, CELLULOSE GUM, XANTHAN GUM, CARRAGEENAN, DEXTROSE, NATURAL VANILLA FLAVOR, VANILLA BEAN, VITAMIN A PALMITATE.<br><br>"
		$('.vanilla-info').html(div);
		$(".vanilla-toggle").dropdown('toggle');
		
	});$('.vanilla').on('mouseout', function(){
		var div = "<h5>Vanilla Bean</h5><hr>"+ vanilla.energy + "<br>" + vanilla.protein + "<br>" + vanilla.fat + "<br>" + vanilla.carb + "<br>" + vanilla.fiber + "<br>" + vanilla.sugar + "<br>" + vanilla.calcium + "<br>" + vanilla.iron + "<br>" + vanilla.sodium + "<br>" + vanilla.vitaminC + "<br>" + vanilla.vitaminA + "<br>" + vanilla.saturated + "<br>" + vanilla.trans + "<br>" + vanilla.cholesterol + "<br><br>Ingredients: MILK, SUGAR ,CORN SYRUP, CREAM, TAPIOCA STARCH, WHEY PROTEIN ISOLATE, MONO- AND DI-GLYCERIDES, GUAR GUM, TARA GUM, CELLULOSE GUM, XANTHAN GUM, CARRAGEENAN, DEXTROSE, NATURAL VANILLA FLAVOR, VANILLA BEAN, VITAMIN A PALMITATE.<br><br>"
		$('.vanilla-info').html(div);
		$(".vanilla-toggle").dropdown('toggle');
		
	});
}

var displayBrown = function(){
	$('.brown').on('mouseover', function(){
		var div = "<h5>Mocha Almond Fudge</h5><hr>" + brown.energy + "<br>" + brown.protein + "<br>" + brown.fat + "<br>" + brown.carb + "<br>" + brown.fiber + "<br>" + brown.sugar + "<br>" + brown.calcium + "<br>" + brown.iron + "<br>" + brown.sodium + "<br>" + brown.vitaminC + "<br>" + brown.vitaminA + "<br>" + brown.saturated + "<br>" + brown.trans + "<br>" + brown.cholesterol + "<br><br>Ingredients: ALMONDMILK (FILTERED WATER, ALMONDS), CANE SUGAR, FUDGE SAUCE (CANE SUGAR, WATER, ORGANIC COCOA, TAPIOCA STARCH, NATURAL FLAVOR), ALMONDS (ALMONDS, SUNFLOWER OIL, SALT), COCONUT OIL, NATURAL FLAVOR, ACACIA GUM, COFFEE, CAROB BEAN GUM, BAKING SODA, GUAR GUM, SALT.<br><br>"
		$('.brown-info').html(div);
		$(".brown-toggle").dropdown('toggle');
		
	});$('.brown').on('mouseout', function(){
		var div = "<h5>Mocha Almond Fudge</h5><hr>" + brown.energy + "<br>" + brown.protein + "<br>" + brown.fat + "<br>" + brown.carb + "<br>" + brown.fiber + "<br>" + brown.sugar + "<br>" + brown.calcium + "<br>" + brown.iron + "<br>" + brown.sodium + "<br>" + brown.vitaminC + "<br>" + brown.vitaminA + "<br>" + brown.saturated + "<br>" + brown.trans + "<br>" + brown.cholesterol + "<br><br>Ingredients: ALMONDMILK (FILTERED WATER, ALMONDS), CANE SUGAR, FUDGE SAUCE (CANE SUGAR, WATER, ORGANIC COCOA, TAPIOCA STARCH, NATURAL FLAVOR), ALMONDS (ALMONDS, SUNFLOWER OIL, SALT), COCONUT OIL, NATURAL FLAVOR, ACACIA GUM, COFFEE, CAROB BEAN GUM, BAKING SODA, GUAR GUM, SALT.<br><br>"
		$('.brown-info').html(div);
		$(".brown-toggle").dropdown('toggle');
		
	});
}

var displayYellow = function(){
	$('.yellow').on('mouseover', function(){
		var div = "<h5>Banana Split</h5><hr>" + yellow.energy + "<br>" + yellow.protein + "<br>" + yellow.fat + "<br>" + yellow.carb + "<br>" + yellow.fiber + "<br>" + yellow.sugar + "<br>" + yellow.calcium + "<br>" + yellow.iron + "<br>" + yellow.sodium + "<br>" + yellow.vitaminC + "<br>" + yellow.vitaminA + "<br>" + yellow.saturated + "<br>" + yellow.trans + "<br>" + yellow.cholesterol + "<br><br>Ingredients: MILK, SKIM MILK, CREAM, STRAWBERRY BANANA RIBBON (STRAWBERRIES, LIQUID MALTITOL (MALTITOL, WATER), LIQUID POLYDEXTROSE (POLYDEXTROSE, WATER), BANANA PUREE (BANANAS, CITRIC ACID, ASCORBIC ACID), WATER, FOOD STARCH-MODIFIED, NATURAL FLAVOR, PECTIN (PECTIN, DEXTROSE, SODIUM CITRATE), FOOD ACIDS (PHOSPHORIC, CITRIC, MALIC, AND TARTARIC ACIDS), RED 40, SUCRALOSE, ACESULFAME POTASSIUM), MALTODEXTRIN, POLYDEXTROSE, CHOCOLATE RIBBON {LIQUID SORBITOL, POLYDEXTROSE, WATER, MALITOL, COCOA PROCESSED WITH ALKALI, COCOA, SALT, ARTIFICIAL & NATURAL FLAVOR, TRICALCIUM PHOSPHATE, ACESULFAME POTASSIUM, SUCRALOSE, FOOD STARCH-MODIFIED}, SORBITOL, PINEAPPLE CHUNKS AND CHERRIES {PINEAPPLE, CHERRIES, WATER, SORBITOL, MALTODEXTRIN, FOOD STARCH-MODIFIED, CITRIC ACID, NATURAL AND ARTIFICIAL FLAVORS, TURMERIC FOR COLOR, RED 40, SUCRALOSE, ACESULFAME POTASSIUM}, MIXED NUTS (ALMONDS, CASHEWS, PARTIALLY HYDROGENATED SOYBEAN OIL, SALT), CONTAINS LESS THAN 1% OF GLYCERIN, PROPYLENE GLYCOL MONOESTERS, MONO & DIGLYCERIDES, GUAR GUM, CAROB BEAN GUM, CELLULOSE GEL, CELLULOSE GUM, VANILLA EXTRACT AND ARTIFICIAL VANILLA FLAVOR, CARRAGEENAN, ACESULFAME POTASSIUM, SUCRALOSE, VITAMIN A PALMITATE.<br><br>"
		$('.yellow-info').html(div);
		$(".yellow-toggle").dropdown('toggle');
		
	});$('.yellow').on('mouseout', function(){
		var div = "<h5>Banana Split</h5><hr>" + yellow.energy + "<br>" + yellow.protein + "<br>" + yellow.fat + "<br>" + yellow.carb + "<br>" + yellow.fiber + "<br>" + yellow.sugar + "<br>" + yellow.calcium + "<br>" + yellow.iron + "<br>" + yellow.sodium + "<br>" + yellow.vitaminC + "<br>" + yellow.vitaminA + "<br>" + yellow.saturated + "<br>" + yellow.trans + "<br>" + yellow.cholesterol + "<br><br>Ingredients: MILK, SKIM MILK, CREAM, STRAWBERRY BANANA RIBBON (STRAWBERRIES, LIQUID MALTITOL (MALTITOL, WATER), LIQUID POLYDEXTROSE (POLYDEXTROSE, WATER), BANANA PUREE (BANANAS, CITRIC ACID, ASCORBIC ACID), WATER, FOOD STARCH-MODIFIED, NATURAL FLAVOR, PECTIN (PECTIN, DEXTROSE, SODIUM CITRATE), FOOD ACIDS (PHOSPHORIC, CITRIC, MALIC, AND TARTARIC ACIDS), RED 40, SUCRALOSE, ACESULFAME POTASSIUM), MALTODEXTRIN, POLYDEXTROSE, CHOCOLATE RIBBON {LIQUID SORBITOL, POLYDEXTROSE, WATER, MALITOL, COCOA PROCESSED WITH ALKALI, COCOA, SALT, ARTIFICIAL & NATURAL FLAVOR, TRICALCIUM PHOSPHATE, ACESULFAME POTASSIUM, SUCRALOSE, FOOD STARCH-MODIFIED}, SORBITOL, PINEAPPLE CHUNKS AND CHERRIES {PINEAPPLE, CHERRIES, WATER, SORBITOL, MALTODEXTRIN, FOOD STARCH-MODIFIED, CITRIC ACID, NATURAL AND ARTIFICIAL FLAVORS, TURMERIC FOR COLOR, RED 40, SUCRALOSE, ACESULFAME POTASSIUM}, MIXED NUTS (ALMONDS, CASHEWS, PARTIALLY HYDROGENATED SOYBEAN OIL, SALT), CONTAINS LESS THAN 1% OF GLYCERIN, PROPYLENE GLYCOL MONOESTERS, MONO & DIGLYCERIDES, GUAR GUM, CAROB BEAN GUM, CELLULOSE GEL, CELLULOSE GUM, VANILLA EXTRACT AND ARTIFICIAL VANILLA FLAVOR, CARRAGEENAN, ACESULFAME POTASSIUM, SUCRALOSE, VITAMIN A PALMITATE.<br><br>"
		$('.yellow-info').html(div);
		$(".yellow-toggle").dropdown('toggle');
		
	});
}

var displayPink = function(){
	$('.pink').on('mouseover', function(){
		var div = "<h5>Strawberry Cheescake</h5><hr>" + pink.energy + "<br>" + pink.protein + "<br>" + pink.fat + "<br>" + pink.carb + "<br>" + pink.fiber + "<br>" + pink.sugar + "<br>" + pink.calcium + "<br>" + pink.iron + "<br>" + pink.sodium + "<br>" + pink.vitaminC + "<br>" + pink.vitaminA + "<br>" + pink.saturated + "<br>" + pink.trans + "<br>" + pink.cholesterol + "<br><br>Ingredients: CREAM, MILK, CANE SUGAR, SKIM MILK, GRAHAM PIECES (SUGAR, ENRICHED FLOUR, (WHEAT FLOUR, NIACIN, REDUCED IRON, THIAMINE MONONITRATE, RIBOFLAVIN, FOLIC ACID), WHOLE WHEAT FLOUR, PALM OIL, HONEY, MOLASSES, BUTTER, RICE SYRUP, NATURAL FLAVORS, SALT, BAKING SODA, SOY LECITHIN), STRAWBERRIES, EGGS, CHEESE CULTURE, SALT, CAROB BEAN GUM, GUAR GUM, NATURAL FLAVORS.<br><br>"
		$('.pink-info').html(div);
		$(".pink-toggle").dropdown('toggle');
		
	});$('.pink').on('mouseout', function(){
		var div = "<h5>Strawberry Cheescake</h5><hr>" + pink.energy + "<br>" + pink.protein + "<br>" + pink.fat + "<br>" + pink.carb + "<br>" + pink.fiber + "<br>" + pink.sugar + "<br>" + pink.calcium + "<br>" + pink.iron + "<br>" + pink.sodium + "<br>" + pink.vitaminC + "<br>" + pink.vitaminA + "<br>" + pink.saturated + "<br>" + pink.trans + "<br>" + pink.cholesterol + "<br><br>Ingredients: CREAM, MILK, CANE SUGAR, SKIM MILK, GRAHAM PIECES (SUGAR, ENRICHED FLOUR, (WHEAT FLOUR, NIACIN, REDUCED IRON, THIAMINE MONONITRATE, RIBOFLAVIN, FOLIC ACID), WHOLE WHEAT FLOUR, PALM OIL, HONEY, MOLASSES, BUTTER, RICE SYRUP, NATURAL FLAVORS, SALT, BAKING SODA, SOY LECITHIN), STRAWBERRIES, EGGS, CHEESE CULTURE, SALT, CAROB BEAN GUM, GUAR GUM, NATURAL FLAVORS.<br><br>"
		$('.pink-info').html(div);
		$(".pink-toggle").dropdown('toggle');
		
	});
}

var displayBlue = function(){
	$('.blue').on('mouseover', function(){
		var div = "<h5>Lavender Blueberry Pie</h5><hr>" + blue.energy + "<br>" + blue.protein + "<br>" + blue.fat + "<br>" + blue.carb + "<br>" + blue.fiber + "<br>" + blue.sugar + "<br>" + blue.calcium + "<br>" + blue.iron + "<br>" + blue.sodium + "<br>" + blue.vitaminC + "<br>" + blue.vitaminA + "<br>" + blue.saturated + "<br>" + blue.trans + "<br>" + blue.cholesterol + "<br><br>Ingredients: FRESH MILK, FRESH CREAM, SUGAR, CORN SYRUP SOLIDS, POMEGRANATE BLUEBERRY RIPPLE (CORN SYRUP, WATER, BLUEBERRIES, MODIFIED CORN STARCH, POMEGRANATE JUICE CONCENTRATE, SUGAR, NATURAL FLAVOR, CITRIC ACID, GUAR GUM, FD&C RED #40), BLUEBERRY PUREE (CORN SYRUP, BLUEBERRIES, SUGAR, WATER, MODIFIED CORN STARCH, CITRIC ACID, NATURAL FLAVOR, FD&C RED #40, FD&C BLUE #1), PIE CHIPS (UNENRICHED WHEAT FLOUR, SUGAR, PARTIALLY HYDROGENATED SOYBEAN OIL, BUTTER (CREAM, SALT), PASTEURIZED EGGS, WATER, SALT), CHOCOLATE COATING FLAKES (SUGAR, COCONUT OIL, COCOA {PROCESSED WITH ALKALI}, PARTIALLY HYDROGENATED COCONUT OIL, COCOA, SALT, SOY LECITHIN, NATURAL FLAVOR), NONFAT MILK, MONO AND DIGLYCERIDES, CELLULOSE GEL, CELLULOSE GUM, LOCUST BEAN GUM, CARRAGEENAN.<br><br>"
		$('.blue-info').html(div);
		$(".blue-toggle").dropdown('toggle');
		
	});$('.blue').on('mouseout', function(){
		var div = "<h5>Lavender Blueberry Pie</h5><hr>" + blue.energy + "<br>" + blue.protein + "<br>" + blue.fat + "<br>" + blue.carb + "<br>" + blue.fiber + "<br>" + blue.sugar + "<br>" + blue.calcium + "<br>" + blue.iron + "<br>" + blue.sodium + "<br>" + blue.vitaminC + "<br>" + blue.vitaminA + "<br>" + blue.saturated + "<br>" + blue.trans + "<br>" + blue.cholesterol + "<br><br>Ingredients: FRESH MILK, FRESH CREAM, SUGAR, CORN SYRUP SOLIDS, POMEGRANATE BLUEBERRY RIPPLE (CORN SYRUP, WATER, BLUEBERRIES, MODIFIED CORN STARCH, POMEGRANATE JUICE CONCENTRATE, SUGAR, NATURAL FLAVOR, CITRIC ACID, GUAR GUM, FD&C RED #40), BLUEBERRY PUREE (CORN SYRUP, BLUEBERRIES, SUGAR, WATER, MODIFIED CORN STARCH, CITRIC ACID, NATURAL FLAVOR, FD&C RED #40, FD&C BLUE #1), PIE CHIPS (UNENRICHED WHEAT FLOUR, SUGAR, PARTIALLY HYDROGENATED SOYBEAN OIL, BUTTER (CREAM, SALT), PASTEURIZED EGGS, WATER, SALT), CHOCOLATE COATING FLAKES (SUGAR, COCONUT OIL, COCOA {PROCESSED WITH ALKALI}, PARTIALLY HYDROGENATED COCONUT OIL, COCOA, SALT, SOY LECITHIN, NATURAL FLAVOR), NONFAT MILK, MONO AND DIGLYCERIDES, CELLULOSE GEL, CELLULOSE GUM, LOCUST BEAN GUM, CARRAGEENAN.<br><br>"
		$('.blue-info').html(div);
		$(".blue-toggle").dropdown('toggle');
		
	});
}

var displayGreen = function(){
	$('.green').on('mouseover', function(){
		var div = "<h5>Matcha Green Tea</h5><hr>" + green.energy + "<br>" + green.protein + "<br>" + green.fat + "<br>" + green.carb + "<br>" + green.fiber + "<br>" + green.sugar + "<br>" + green.calcium + "<br>" + green.iron + "<br>" + green.sodium + "<br>" + green.vitaminC + "<br>" + green.vitaminA + "<br>" + green.saturated + "<br>" + green.trans + "<br>" + green.cholesterol + "<br><br>Ingredients: FRESH MILK, FRESH CREAM, SUGAR, CORN SYRUP SOLIDS, POMEGRANATE BLUEBERRY RIPPLE (CORN SYRUP, WATER, BLUEBERRIES, MODIFIED CORN STARCH, POMEGRANATE JUICE CONCENTRATE, SUGAR, NATURAL FLAVOR, CITRIC ACID, GUAR GUM, FD&C RED #40), BLUEBERRY PUREE (CORN SYRUP, BLUEBERRIES, SUGAR, WATER, MODIFIED CORN STARCH, CITRIC ACID, NATURAL FLAVOR, FD&C RED #40, FD&C BLUE #1), PIE CHIPS (UNENRICHED WHEAT FLOUR, SUGAR, PARTIALLY HYDROGENATED SOYBEAN OIL, BUTTER (CREAM, SALT), PASTEURIZED EGGS, WATER, SALT), CHOCOLATE COATING FLAKES (SUGAR, COCONUT OIL, COCOA {PROCESSED WITH ALKALI}, PARTIALLY HYDROGENATED COCONUT OIL, COCOA, SALT, SOY LECITHIN, NATURAL FLAVOR), NONFAT MILK, MONO AND DIGLYCERIDES, CELLULOSE GEL, CELLULOSE GUM, LOCUST BEAN GUM, CARRAGEENAN.<br><br>"
		$('.green-info').html(div);
		$(".green-toggle").dropdown('toggle');
		
	});$('.green').on('mouseout', function(){
		var div = "<h5>Matcha Green Tea</h5><hr>" + green.energy + "<br>" + green.protein + "<br>" + green.fat + "<br>" + green.carb + "<br>" + green.fiber + "<br>" + green.sugar + "<br>" + green.calcium + "<br>" + green.iron + "<br>" + green.sodium + "<br>" + green.vitaminC + "<br>" + green.vitaminA + "<br>" + green.saturated + "<br>" + green.trans + "<br>" + green.cholesterol + "<br><br>Ingredients: FRESH MILK, FRESH CREAM, SUGAR, CORN SYRUP SOLIDS, POMEGRANATE BLUEBERRY RIPPLE (CORN SYRUP, WATER, BLUEBERRIES, MODIFIED CORN STARCH, POMEGRANATE JUICE CONCENTRATE, SUGAR, NATURAL FLAVOR, CITRIC ACID, GUAR GUM, FD&C RED #40), BLUEBERRY PUREE (CORN SYRUP, BLUEBERRIES, SUGAR, WATER, MODIFIED CORN STARCH, CITRIC ACID, NATURAL FLAVOR, FD&C RED #40, FD&C BLUE #1), PIE CHIPS (UNENRICHED WHEAT FLOUR, SUGAR, PARTIALLY HYDROGENATED SOYBEAN OIL, BUTTER (CREAM, SALT), PASTEURIZED EGGS, WATER, SALT), CHOCOLATE COATING FLAKES (SUGAR, COCONUT OIL, COCOA {PROCESSED WITH ALKALI}, PARTIALLY HYDROGENATED COCONUT OIL, COCOA, SALT, SOY LECITHIN, NATURAL FLAVOR), NONFAT MILK, MONO AND DIGLYCERIDES, CELLULOSE GEL, CELLULOSE GUM, LOCUST BEAN GUM, CARRAGEENAN.<br><br>"
		$('.green-info').html(div);
		$(".green-toggle").dropdown('toggle');
		
	});
}

var displayOrange = function(){
	$('.orange').on('mouseover', function(){
		var div = "<h5>Peaches 'N Cream</h5><hr>" + orange.energy + "<br>" + orange.protein + "<br>" + orange.fat + "<br>" + orange.carb + "<br>" + orange.fiber + "<br>" + orange.sugar + "<br>" + orange.calcium + "<br>" + orange.iron + "<br>" + orange.sodium + "<br>" + orange.vitaminC + "<br>" + orange.vitaminA + "<br>" + orange.saturated + "<br>" + orange.trans + "<br>" + orange.cholesterol + "<br><br>Ingredients: ORGANIC MILK AND CREAM, ORGANIC CANE SUGAR, ORGANIC PEACHES, ORGANIC TAPIOCA SYRUP, ORGANIC TAPIOCA STARCH, ORGANIC VANILLA EXTRACT, NATURAL FLAVORS, CITRIC ACID, NON-GMO SOY LECITHIN, GUAR GUM, LOCUST BEAN GUM, XANTHAN GUM, ORGANIC RED BEE CONCENTRATE (COLOR), ANNATTO (COLOR).<br><br>"
		$('.orange-info').html(div);
		$(".orange-toggle").dropdown('toggle');		
	});
	$('.orange').on('mouseout', function(){
		var div = "<h5>Peaches 'N Cream</h5><hr>" + orange.energy + "<br>" + orange.protein + "<br>" + orange.fat + "<br>" + orange.carb + "<br>" + orange.fiber + "<br>" + orange.sugar + "<br>" + orange.calcium + "<br>" + orange.iron + "<br>" + orange.sodium + "<br>" + orange.vitaminC + "<br>" + orange.vitaminA + "<br>" + orange.saturated + "<br>" + orange.trans + "<br>" + orange.cholesterol + "<br><br>Ingredients: ORGANIC MILK AND CREAM, ORGANIC CANE SUGAR, ORGANIC PEACHES, ORGANIC TAPIOCA SYRUP, ORGANIC TAPIOCA STARCH, ORGANIC VANILLA EXTRACT, NATURAL FLAVORS, CITRIC ACID, NON-GMO SOY LECITHIN, GUAR GUM, LOCUST BEAN GUM, XANTHAN GUM, ORGANIC RED BEE CONCENTRATE (COLOR), ANNATTO (COLOR).<br><br>"
		$('.orange-info').html(div);
		$(".orange-toggle").dropdown('toggle');		
	});
}

$('document').ready(function() {

	getQueryUrls();

	displayVanilla();
	displayBrown();
	displayYellow();
	displayPink();
	displayBlue();
	displayGreen();
	displayOrange();

});
 
