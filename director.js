
const director_panel = window.document.getElementById('director_panel');

directors = [{ 'name': 'foo', 'pic': 'https://www.w3schools.com/howto/img_avatar.png'},
{ 'name': 'bar', 'pic': 'https://www.w3schools.com/howto/img_avatar.png' },
{ 'name': 'test', 'pic': 'https://www.w3schools.com/howto/img_avatar.png' },
]

function init() {
    for (let index = 0; index < 3; index++) {
        directors.forEach(director => {
            director_panel.innerHTML += `
            <div class="director" onclick="console.log('/director/${director.name}');">
                <div class="director_pic" style="background-image: url('https://www.w3schools.com/howto/img_avatar.png');"></div>
                <div class="director_name">${director.name}</div>
            </div>`;
        });

    }
}

init();