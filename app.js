// import functions
import { people } from './data.js';

console.log(people, 'people');
// grab DOM elements
const selectEl = document.querySelector('select');  
const nameEl = document.querySelector('.name');  
const ageEl = document.querySelector('.age');  
const bioEl = document.querySelector('.bio');  
const hobbiesEl = document.querySelector('.hobbies');  
const container = document.querySelector('.profile');  
console.log(selectEl, nameEl, ageEl, bioEl, hobbiesEl, container);

function renderPerson(list) {
    console.log(people, 'people');
    container.classList.add(`${people[list].name}`);
    
    nameEl.textContent = 'Name: ' + people[list].name;
    ageEl.textContent = 'Age: ' + people[list].age;
    bioEl.textContent = 'Bio: ' + people[list].bio;

    for (const hobby of people[list].hobbies) {
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
    
    if (selected === 'one') 
    { renderPerson(0);
    } else if (selected === 'two') 
    { renderPerson(1);
    }       
    else (selected === 'three');
    { renderPerson(2);}
    
});  
// get user input

    // use user input to update state 
    
    // update DOM to reflect the new state
