const monstersUrl = `http://localhost:3000/monsters`;
const monsterContainer = document.getElementById('monster-container');
const monsterForm = document.getElementById('monster-form');


const fetchMonsters = () => {
    fetch(monstersUrl)
    .then(resp => resp.json())
    .then(monsters => {
        renderMonsters(monsters)
    })
}

const renderMonsters = (monsters) => {
    for (monster in monsters) {
        renderMonster(monster)
    }
}

const renderMonster = (monster) => {
    const div = document.createElement('div')
    div.innerText = `${monster.name} - ${monster.age} - ${monster.name}`
    monsterContainer.appendChild(div)
}

monsterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = e.target.name.value
    const age = e.target.age.value
    const description = e.target.description.value
    e.target.reset();
    const formData = {
        name: name,
        age: age,
        description: description
    }
    const reqObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    }

    fetch(monstersUrl, reqObj)
    .then(resp => resp.json())
    .then(monster => {
        renderMonster(monster)
    })
})