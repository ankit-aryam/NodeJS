let cheerio=require("cheerio");
let html=`<ul id="drinks">
<li class="coffee">Coffee</li>
<li class="tea">Tea</li>
<li class="milk">Milk</li>
</ul>`;

//cheerio stores data in form of object
let selectTool=cheerio.load(html);

let drinkNameArr=selectTool("#drinks");
console.log(drinkNameArr.text());

let drinkName=selectTool(".milk");
console.log(drinkName.text());