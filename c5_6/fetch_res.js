const div_id = document.querySelector('#printBlock');
const btn =  document.querySelector('button');
const url = (w, h) => `https://picsum.photos/${w}/${h}`

function useRequest(url) {
    return fetch(url)
    .then((response) => {
     displayResult(response)
    })
    .catch(() => { console.log('fetch error') });
};

function displayResult(data) {

  const card = `
  <div class="card">
      <img
      src="${data.url}"
      class="card-image"
      />
  </div>
  `;

  div_id.innerHTML = card;
};
btn.addEventListener('click', () => {
	const value1 = document.getElementById("width_img").value;
  const value2 = document.getElementById("height_img").value;

	console.log(value1, value2);
	if (value1>=100 && value1<= 300 && value2>=100 && value2<= 300) {
		const data = useRequest(url(value1, value2));
        displayResult(data);
event.preventDefault();  
  		console.log('end');
	} else {
		alert("одно из чисел вне диапазона от 100 до 300");
		div_id.innerHTML = " ";
	}

});
