var currentTopp = [];
var tracker = [];
var price = 0;
var priceTea = 0;
var priceTopping = 0;
var priceGS = 0, priceC = 0, priceP = 0, priceMS = 0;
var priceMilk = 0;
var totalCost = 0;
var priceList = [];

var order = [];
var tea = document.getElementById("tea");
var milk = document.getElementById("milktea");
var topping = document.getElementById("toppings");
var selectedTopp = topping.options[topping.selectedIndex].text;
var selectedTea = tea.options[tea.selectedIndex].text;
var milkTea = milk.options[milk.selectedIndex].text;

function addToppings()
{	
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
	priceGS = 0;
	priceC = 0;
	priceP = 0;
	priceMS = 0;
	document.getElementById("displayTopp").innerHTML = text;
}

function calculateCost(bbtObject)
{
	var selectedTea = tea.options[tea.selectedIndex].text;
	var milkTea = milk.options[milk.selectedIndex].text;
	
	switch (bbtObject.teaType)
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

	if(bbtObject.milkOption == "Yes")
	{
		priceMilk = 1.00;
	}
	else
	{
		priceMilk = 0.00;
	}
	
	
	for(var j = 0; j < bbtObject.toppingsList.length; j++)
	{
		if(bbtObject.toppingsList[j] == "Grass Jelly")
		{
			priceGS = 0.50;
		}
		if(bbtObject.toppingsList[j] == "Coconut")
		{
			priceC = 0.75;
		}
		if(bbtObject.toppingsList[j] == "Peals")
		{
			priceP = 0.50;
		}
		if(bbtObject.toppingsList[j] == "Mango Stars")
		{
			priceMS= 1.00;
		}
	}
	
	priceTopping = priceGS + priceC + priceP + priceMS;
	price = priceTea + priceMilk + priceTopping;
	
	priceList.push(price);
	
	return price;
}

var count = 1;
function addDrink()
{	
	var drinkNum = "Drink " + count;
	var milkTea = milk.options[milk.selectedIndex].text;
	var selectedTea = tea.options[tea.selectedIndex].text;
	var selectedTopp = topping.options[topping.selectedIndex].text;
	
	var bbt = new drink(selectedTea, tracker, milkTea);
	order.push(bbt);
	
	calculateCost(bbt);
	
	updateDrink(bbt);	
	count++;
}

var rowStart = 1;
function updateDrink(bbt)
{   
	var drinkNum = "Drink " + count;
	
	var table = document.getElementById("order");
	
	if(rowStart ==0)
	{
		rowStart = 1;
	}
	var row = table.insertRow(rowStart);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);
	cell1.innerHTML = drinkNum;
	cell2.innerHTML = bbt.teaType;
	cell3.innerHTML = bbt.milkOption;
	cell4.innerHTML = bbt.toppingsList;
	cell5.innerHTML = "$" + price;
	rowStart ++;
	
	totalCost = totalCost + price;
	document.getElementById("cost").innerHTML = "Total Cost $" + totalCost;
	return rowStart;
}

function removeDrink()
{
	totalCost = 0;
	if(count > 1)
	{
		count --;
	}
	if(rowStart >= 1)
	{
		rowStart --;
	}
	
	order.pop();
	priceList.pop();
	for(var k = 0; k < priceList.length; k++)
	{
		totalCost = totalCost + priceList[k];
	}
	
	if(rowStart >= 1)
	{
		document.getElementById("order").deleteRow(rowStart);
	}
	document.getElementById("cost").innerHTML = "Total Cost $" + totalCost;
	return rowStart;
}

function resetOrder()
{
	delRow = rowStart;
	order = [];
	priceList = [];
	price = 0;
	totalCost = 0;
	removeToppings();
	document.getElementById("cost").innerHTML ="";
	for(var l = delRow - 1; l >= 1; l--)
	{
		document.getElementById("order").deleteRow(l);
	}
	rowStart = 1;
	count = 1;
	return rowStart;
}

function drink(teaType, toppingsList, milkOption)
{
	this.teaType = teaType;
	this.toppingsList = toppingsList.slice();
	this.milkOption = milkOption;
}

