const dtitle =document.querySelector(".dtitle");
const dimg = document.getElementsByTagName("img")[0];
const desc = document.querySelector(".desc");
function getPost(){
	/*dtitle.innerText = localStorage.getItem('title');
	dimg.src= localStorage.getItem('image');
	desc.innerText = localStorage.getItem('desc');*/
	let get =localStorage.getItem("post");
	console.log(JSON.parse(get));
	let post='';
	let jsonPost = JSON.parse(get);
	jsonPost.slice(0,6).map(
		data=>{
			console.log(data.title);
			post +=`
				<div class="display1">
			 			<h1 class="dtitle">${data.title}</h1>
						<img src="${data.img}">
						<p class="desc">${data.desc}</p>
				</div>
			`
		}
	);
	document.querySelector('.display').innerHTML = post;
}
getPost();