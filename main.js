import { pokemons } from './pokemons.js';

const a1 = document.getElementById('a1');
const inp = document.getElementById('inp');

function rend(l1) {
    if (!a1) return;

    if (l1.length === 0) {
        a1.innerHTML = '<div class="notresult">Not Found</div>';
        return;
    }

    a1.innerHTML = l1.map(nimadr => `
        <div class="card">
            <div class="raqam">
                <span class="s1">${nimadr.num}</span>
            </div>
            <h3>${nimadr.name}</h3>
            <img class="i1" src="${nimadr.img}" alt="">
            <h3 class="bg">${nimadr.type}</h3>
            <p>Candy count: ${nimadr.candy_count}</p>
            <p>${nimadr.weight}</p>
            <p class="col">${nimadr.weaknesses}</p>
            <div class="start">
                <span class="s2">${nimadr.spawn_time}</span>
            </div>
        </div>
    `).join('');
}

if (inp) {
    inp.addEventListener('input', (e1) => {
        const t1 = e1.target.value.toLowerCase().trim();

        const toza = pokemons.filter(nimadr => 
            (nimadr.name && nimadr.name.toLowerCase().includes(t1)) 
        );

        rend(toza);
    });
}

rend(pokemons);