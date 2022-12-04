
console.log("Working on it");
const detect = document.getElementById("detect");

const threshold = 0.8;
var model = undefined;

window.onload = async ()=>{
	await toxicity.load(threshold).then(function (loadedModel){
		model = loadedModel;
		console.log("Model loaded");
		alert("Model has been loaded.")
	});
}

detect.addEventListener("click",()=>{
	let sentences = [document.getElementById("sentence").value];
	//sentences.push(textMessage);
	console.log(sentences);
	model.classify(sentences).then(predictions =>{
		//console.log(predictions);
		for(let i = 0; i < predictions.length; i++){
			//console.log(predictions[i].results);
			let results = [predictions[i].results];
			//console.log(results);
			for(j = 0; j < results.length; j++){
				console.log(results[j][0].match);
				if(results[j][0].match === true){
					alert("How rude! Stop it!");
				}
				else{
					alert("Awwwww that's sweet!")
				}
			}
		}	
	});
})

