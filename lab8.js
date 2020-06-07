var currentTopp = [];
var tracker = [];
var price = 0;
var priceTea = 0;
var priceTopping = 0;
var priceMilk = 0;


function addToppings()
{	
	var topping = document.getElementById("toppings");
	var selectedTopp = topping.options[topping.selectedIndex].text;
	var text = "<ul>";
	currentTopp.push(selectedTopp);
	
	
	if(tracker.indexOf(selectedTopp) === -1)
	{
		tracker.push(selectedTopp);
	}
	else
	{
		console.log("This topping already exists");
	}

	
	for(var i = 0; i < tracker.length; i++)
	{
		text+= "<li>" + tracker[i] + "</li>";
	}
	text += "</ul>";
	document.getElementById("displayTopp").innerHTML = text;
}

function removeToppings()
{
	tracker = [];
	text = "";
	priceTopping = 0;
	document.getElementById("displayTopp").innerHTML = text;
}

function calculatePrice()
{
	var tea = document.getElementById("tea");
	var selectedTea = tea.options[tea.selectedIndex].text;
	console.log(selectedTea);
	
	switch (selectedTea)
	{
		case "Black":
			priceTea = 2.50;
			break;
		
		case "Green":
			priceTea = 3.00;
			break;
		
		case "Red":
			priceTea = 3.50;
			break;
	}
	//console.log(price);
	
	var milk = document.getElementById("milktea");
	var milkTea = milk.options[milk.selectedIndex].text;
	console.log(milkTea);
	
	if(milkTea == "Yes")
	{
		priceMilk = 1.00;
	}
	else
	{
		priceMilk = 0.00;
	}
	
	for(var j = 0; j < tracker.length; j++)
	{
		if(tracker[j] == "Grass Jelly")
		{
			priceTopping += 0.50;
		}
		if(tracker[j] == "Coconut")
		{
			priceTopping += 0.75;
		}
		if(tracker[j] == "Peals")
		{
			priceTopping += 0.50;
		}
		if(tracker[j] == "Mango Stars")
		{
			priceTopping += 1.00;
		}
	}
	console.log(priceTopping);
	price = priceTea + priceMilk + priceTopping;
	document.getElementById("cost").innerHTML = "Total Cost $" + price;
	//console.log(price);
}