const post = document.querySelector(".post");
const title = document.querySelector(".title");
const img = document.querySelector(".image");
const desc = document.querySelector(".desc");
let i=1;
function savePost(){
	// localStorage /setItem-> hadgalah , getItem avah/
	/*localStorage.setItem('title',title.value);
	localStorage.setItem('image',img.value);
	localStorage.setItem('desc', desc.value);*/
	let data ={
		id : i++,
		title: title.value,
		img : img.value,
		desc : desc.value
	}
	let sav = JSON.parse(localStorage.getItem("post")) || [];
	sav.push(data);
	// JSON.stringify() --> string/text ruu hurvuleh
	
	localStorage.setItem("post",JSON.stringify(sav));
}
post.addEventListener("click",()=>{
	savePost();
});