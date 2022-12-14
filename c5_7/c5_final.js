const div_id = document.querySelector('#printBlock');
const btn =  document.querySelector('button');

function useRequest(page_req, limit_req, callback) {
  var xhr = new XMLHttpRequest();
  const url =`https://picsum.photos/v2/list?page=${page_req}&limit=${limit_req}`;
  xhr.open('GET',url,true);
  
  xhr.onload = function() {
    if (xhr.status != 200) {
      console.log('Статус ответа: ', xhr.status);
    } else {
      
      
      const result = JSON.parse(xhr.response);
      localStorage.setItem('myJSON27', JSON.stringify(result));
      if (callback) {
        callback(result);
      }
    }
  };
  
  xhr.onerror = function() {
    console.log('Ошибка! Статус ответа: ', xhr.status);
  };
  
  xhr.send();
};

function displayResult(apiData)
{
  let cards ='';
  apiData.forEach(item =>{
    const cardBlock=`
    <div class='card'>
    <img
    src="${item.download_url}" width="50%" height ='50%"
    />
    </div>
    `;
   cards= cards + cardBlock; 
  });
  div_id.innerHTML += cards;
};
btn.addEventListener('click', () => {
  
  const page_value = document.getElementById("page").value;
  const limit_value = document.getElementById("limit").value;
  
  if (((page_value < 1) || (page_value > 10)) && ((limit_value < 1) || (limit_value > 10))){
    div_id.innerHTML += 'Номер страницы и лимит вне диапазона от 1 до 10';
    event.preventDefault();
  } else if (((page_value < 1) || (page_value > 10))){
    div_id.innerHTML += 'Номер страницы вне диапазона от 1 до 10';
    event.preventDefault();    
  } else if (((limit_value < 1) || (limit_value > 10)))  {
    div_id.innerHTML += 'Лимит вне диапазона от 1 до 10';
    event.preventDefault();   
  } else {
    
    const myJSON27 = localStorage.getItem('myJSON27');
    if (myJSON27) 
    {
      
      displayResult(JSON.parse(myJSON27));
      event.preventDefault(); 
    } 
    else 
    {
      
      useRequest(page_value, limit_value, displayResult);
       event.preventDefault();
     }
  } 
   
});
