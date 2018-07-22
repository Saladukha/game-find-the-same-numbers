var firstCell = null;
var secondCell = null;

function cellClick(obj){
	if (firstCell!=null&&secondCell!=null)
		return;
	obj.children[0].classList.remove("hidden");
	if(firstCell==null){
		firstCell=obj;
	} else {
		if (obj==firstCell)
			return;
		secondCell=obj;
		var a = secondCell.children[0].innerHTML;
		var b = firstCell.children[0].innerHTML;
		console.log(a,b);
		if (a!=b){
			setTimeout(function(){
				firstCell.children[0].classList.add("hidden");
				secondCell.children[0].classList.add("hidden");
				firstCell = null;
				secondCell=null;
			}, 1000);
		} else {
			firstCell.classList.add("hidden");
			secondCell.classList.add("hidden");
			firstCell = null;
			secondCell = null;
		}

	}

	obj.children[0].classList.remove("hidden");
	console.log(obj.children[0].innerHTML);

}

var listOfItems = document.getElementsByClassName("item");
var i;
for (i = 0; i < 18; i++) {
	var a;
	var b;
	do {
		a = Math.round(Math.random() * 35);
		b = Math.round(Math.random() * 35);
	} while(a == b || listOfItems[a].innerHTML!="" || listOfItems[b].innerHTML!="");

	var value = 10 + Math.round(Math.random()*89);
	listOfItems[a].innerHTML = value;
	listOfItems[b].innerHTML = value;

	listOfItems[a].classList.add("hidden");
	listOfItems[b].classList.add("hidden");
}


var listOFTd = document.getElementsByTagName("td");
var i;
for (i = 0; i < listOFTd.length; i++){
	listOFTd[i].onclick = function(){
		cellClick(this);
	}
}