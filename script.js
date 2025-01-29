let textarea = document.querySelectorAll('textarea')
let select = document.querySelectorAll('select')
let button = document.querySelector('button')
let spak = document.querySelectorAll('#spek')

button.addEventListener('click' , async () => {
    console.log("Ishladimi");
    
    const url = 'https://google-translate113.p.rapidapi.com/api/v1/translator/html';
const options = {
	method: 'POST',
	headers: {
		'x-rapidapi-key': 'd59dbd9747msh950a0d4f46aaf4bp188c12jsn11cf69907a27',
		'x-rapidapi-host': 'google-translate113.p.rapidapi.com',
		'Content-Type': 'application/json'
	},
	body: JSON.stringify({
		from: select[0].value,
		to: select[1].value,
		html: textarea[0].value,
	}),
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
    textarea[1].value = result.trans;

    

	console.log(result);
} catch (error) {
	console.error(error);
}
})

spak[0].addEventListener('click' , () => {
	let voices = new SpeechSynthesisUtterance(textarea[0].value)
    speechSynthesis.speak(voices)
})
spak[1].addEventListener('click' , () => {
	let voices2 = new SpeechSynthesisUtterance(textarea[1].value)
    speechSynthesis.speak(voices2)
})