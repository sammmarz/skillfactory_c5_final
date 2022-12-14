const div_id = document.querySelector('#printBlock');
const btn =  document.querySelector('button');
function useRequest(value, callback)
{
  xhr = new XMLHttpRequest();
  xhr.open('GET', `https://picsum.photos/v2/list?limit=${value}`,true);
  xhr.onload = function()
  {
    if (xhr.status != 200)
    {  
      console.log('Status request',xhr.status);
    }  
    else 
    {
      const result = JSON.parse(xhr.response);
     
      if (callback) callback(result);
    }
  };
  xhr.onerror = function()
  {
    console.log('Error',xhr.status);
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
    src="${item.download_url}" width ="50%" height = "50%"
    />
    </div>
    `;
   cards= cards + cardBlock; 
  });
  div_id.innerHTML += cards;
};

btn.addEventListener('click', () => {
  const value1 = document.querySelector('input').value;
  if ((value1 < 1) || (value1 > 10))  
  {
    div_id.innerHTML += 'Число вне диапазона от 1 до 10';
  }
  else 
  {
    console.log('Число в диапазоне от 1 до 10');
    
    useRequest(value1,displayResult);
    event.preventDefault(); 
  }  
});