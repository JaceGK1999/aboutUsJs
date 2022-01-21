import { people } from './data.js';



const selectEl = document.querySelector('select');  
const nameEl = document.querySelector('.name');  
const ageEl = document.querySelector('.age');  
const bioEl = document.querySelector('.bio');  
const hobbiesEl = document.querySelector('.hobbies');  
const animalEl = document.querySelector('.animal');  
const locationEl = document.querySelector('.location');  
const container = document.querySelector('.profile');  


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

selectEl.addEventListener('change', (e) => {
    container.classList.remove('Jace', 'Josh', 'Crypto');
    hobbiesEl.innerHTML = '';
    const selected = e.target.value; 
    
    if (selected === 'one') {
        renderPerson(0);
        container.classList.remove('Josh', 'Crypto');
        container.classList.add('Jace');

    } else if (selected === 'two') {
        renderPerson(1);
        container.classList.remove('Jace', 'Crypto');
        container.classList.add('Josh');
    } else 
    {
        renderPerson(2);
        container.classList.remove('Jace', 'Josh');
        container.classList.add('Crypto');
    }
}
);  

