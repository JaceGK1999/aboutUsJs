// import functions
import { people } from './data.js';

console.log(people, 'people');
// grab DOM elements
const selectEl = document.querySelector('select');  
const nameEl = document.querySelector('.name');  
const ageEl = document.querySelector('.age');  
const bioEl = document.querySelector('.bio');  
const hobbiesEl = document.querySelector('.hobbies');  
const animalEl = document.querySelector('.animal');  
const locationEl = document.querySelector('.location');  
const container = document.querySelector('.profile');  
console.log(selectEl, nameEl, ageEl, bioEl, hobbiesEl, container);

function renderPerson(index){
    nameEl.textContent = people[index].name;
    ageEl.textContent = people[index].age;
    bioEl.textContent = people[index].bio;
    animalEl.textContent = people[index].animal;
    locationEl.textContent = people[index].location;

    for (const hobby of people[index].hobbies) {
        const li = document.createElement('li');
        li.textContent = hobby;
        hobbiesEl.appendChild(li);


    }
}


console.log(renderPerson(0));
// set event listeners 
selectEl.addEventListener('change', (e) => {
    container.classList.remove('Jace', 'Josh', 'Crypto');
    hobbiesEl.innerHTML = '';
    const selected = e.target.value; 
    
    
    if (selected === 'one') {
        renderPerson(0);
    } else if (selected === 'two') {
        renderPerson(1);
    } else 
    {
        renderPerson(2);
    }
}
);  
// get user input

    // use user input to update state 
    
    // update DOM to reflect the new state
