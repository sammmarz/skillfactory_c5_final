const parser = new DOMParser();

const XML_list=`
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;
    
const XMlparse = parser.parseFromString(XML_list,"text/xml");


const listNode = XMlparse.querySelector('list');
const studentNode = listNode.querySelectorAll('student');

const nameStudent1 = studentNode[0].querySelector('name');
const nameNode1_first = nameStudent1.querySelector('first');
const nameNode1_second = nameStudent1.querySelector('second');


const nameStudent2 = studentNode[1].querySelector('name');
const nameNode2_first = nameStudent2.querySelector('first');
const nameNode2_second = nameStudent2.querySelector('second');

const student1 =
{
  name: `${nameNode1_first.textContent}  ${nameNode1_second.textContent}`,
  age:   studentNode[0].querySelector('age').textContent,
  prof:  studentNode[0].querySelector('prof').textContent,
  lang:  nameStudent1.getAttribute('lang'),
  
}

const student2 =
{
  name: `${nameNode2_first.textContent}  ${nameNode2_second.textContent}`,
  age:   studentNode[1].querySelector('age').textContent,
  prof:  studentNode[1].querySelector('prof').textContent,
  lang:  nameStudent1.getAttribute('lang'),
  
}

//const list_obj = [`name:${student1.name}, age:${student1.age}, prof: ${student1.prof},lang:${student1.lang}`,student2];

const list_obj1 = [student1,student2];

console.log('list: ',list_obj1);
