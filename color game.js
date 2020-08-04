let a = [];
let h;
let k = document.querySelector("#colo");
let b = document.querySelectorAll(".column");
let s = document.querySelector(".t");
let reset = document.querySelector(".b");
let easy = document.querySelectorAll(".e")[0];
let hard = document.querySelectorAll(".e")[1];
let back = document.querySelector(".back")
let diff = 6;
easy.addEventListener("click", function(){
	diff = 3;
	pickColour();
	assignColor();
	changeRgb();
	back.style.backgroundColor = "steelblue";
})
hard.addEventListener("click", function(){
	diff = 6;
	pickColour();
	assignColor();
	changeRgb();
	back.style.backgroundColor = "steelblue";
})
pickColour();
assignColor();
changeRgb();
reset.addEventListener("click", function(){
	pickColour();
	assignColor();
	changeRgb();
	reset.textContent = "new colors";
	s.textContent = "Good luck";
	back.style.backgroundColor = "steelblue";
})
for(let i = 0;i < diff;i++){
	b[i].addEventListener("click",function(){
		if (this.style.backgroundColor === a[h]){
			for(let j = 0;j < diff;j++){
				b[j].style.backgroundColor = a[h];

			}
			s.textContent = "Correct";
			back.style.backgroundColor = a[h];
			reset.textContent = "play again";
		}
		else{
			this.style.backgroundColor = "rgb(40, 40, 35)";
			s.textContent = "Try again";
		}
	})
}
function pickColour(){
	for(let i = 0;i< diff ; i++){
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);
	a[i] = ("rgb("+ r +", " + g + ", " + b +")");
	}
}
function assignColor(){
if(diff === 3){
for(let i = 0;i < diff;i++){
	b[i].style.backgroundColor = a[i];
for (let j = 3;j< 6;j++){
	b[j].style.backgroundColor = "rgb(40, 40, 35)";
}

}}
else {for(let i = 0;i < diff;i++){
	b[i].style.backgroundColor = a[i];}
}
}
function changeRgb(){
	h = Math.floor(Math.random() * diff);
	k.textContent = a[h];
}
