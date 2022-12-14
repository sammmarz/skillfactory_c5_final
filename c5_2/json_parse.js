const jsonString = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`;

const data = JSON.parse(jsonString);
const list_json1 = data.list[0];
const list_json2 = data.list[1];

const result1 = {
  name: list_json1.name,
  age: list_json1.age,
  prof: list_json1.prof,
}

const result2 = {
  name: list_json2.name,
  age: list_json2.age,
  prof: list_json2.prof,
  
}


console.log('list',[result1,result2]);
