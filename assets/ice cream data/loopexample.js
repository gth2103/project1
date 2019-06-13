var queryURL = "https://api.nal.usda.gov/ndb/reports/?ndbno=" + ID + "&type=b&format=json&api_key=txP1V3zspB7kJrpwR6ack7OIjbhY8BRrfDaF4kjV"

var name = ["Butter Pecan", "Fat Free Chocolate", "French Chocolate", "French Vanilla", "Light Vanilla", "Mint Chocolate Chip", "No Sugar Chocolate Caramel", "Vanilla Fudge"]
var ID = ["19880", "19894", "19880", "19881", "19875", "19879", "19895", "19883"]


var obj = {};

for (var i = 0; i < name.length; i++) {
    $.ajax({
        url: "https://api.nal.usda.gov/ndb/reports/?ndbno=" + ID[i] + "&type=b&format=json&api_key=txP1V3zspB7kJrpwR6ack7OIjbhY8BRrfDaF4kjV",
        method: "GET"
    }).then(function(res) {
        obj[name[i]] = {
        water: "Water: " + response.report.food.nutrients[0].value + response.report.food.nutrients[0].unit,
        energy: "Energy: " + response.report.food.nutrients[1].value + response.report.food.nutrients[1].unit,
        protein: "Protein: " + response.report.food.nutrients[2].value + response.report.food.nutrients[2].unit,
        fat: "Fat: " + response.report.food.nutrients[3].value + response.report.food.nutrients[3].unit,
        carb: "Carbohydrate: " + response.report.food.nutrients[4].value + response.report.food.nutrients[4].unit,
        fiber: "Fiber: " + response.report.food.nutrients[5].value + response.report.food.nutrients[5].unit,
        sugar: "Sugar: " + response.report.food.nutrients[6].value + response.report.food.nutrients[6].unit,
        calcium: "Calcium: " + response.report.food.nutrients[7].value + response.report.food.nutrients[7].unit,
        iron: "Iron: " + response.report.food.nutrients[8].value + response.report.food.nutrients[8].unit,
        sodium: "Sodium: " + response.report.food.nutrients[9].value + response.report.food.nutrients[9].unit,
        vitaminC: "Vitamin C: " + response.report.food.nutrients[10].value + response.report.food.nutrients[10].unit,
        vitaminA: "Vitamin A: " + response.report.food.nutrients[11].value + response.report.food.nutrients[11].unit,
        fattyAcid: "Fatty Acid: " + response.report.food.nutrients[12].value + response.report.food.nutrients[12].unit,
        cholesterol: "Cholesterol: " + response.report.food.nutrients[13].value + response.report.food.nutrients[13].unit,
        }
    })
}