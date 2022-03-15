
fetch('https://api.covid19api.com/summary').then(rawdata => rawdata.json()).then(data => {
		 console.log(data)
	let covidData = data.Global;  						// saving api data 
	console.log(covidData);

	document.getElementById("newCases").innerText = "+" + covidData.NewConfirmed;     //inserting api data into html
	document.getElementById("recoveredCases").innerText =  covidData.NewRecovered;
	document.getElementById("newDeaths").innerText = "+" +  covidData.NewDeaths;
	document.getElementById("totalCases").innerText =  covidData.TotalConfirmed;
	document.getElementById("totalRecoveredCases").innerText =  covidData.TotalRecovered;
	document.getElementById("totalDeaths").innerText =  covidData.TotalDeaths;
	document.getElementById("lastUpdated").innerText = new Date(covidData.Date);
	
	
	
});