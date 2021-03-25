let buttonData;
let AudioId = [];
let currentPlay = "";
let audio = new Audio();

setAudioContent();

function setAudioContent() {
    fetch("./data/reslist.json")
        .then(res => res.json())
        .then(json => {
            buttonData = json;
            setCard();
        })
}

function setCard() {
    let html = "";
    let groupOrder = 1;
    buttonData.forEach(group => {
        let cardContentHtml = "";
        let title = group.title;
        let content = group.content;
        let contentOrder = 1;
        content.forEach(res => {
            cardContentHtml += 
            `
                <button onclick="play(&quot;audio-${groupOrder}-${contentOrder}&quot;)" id="audio-${groupOrder}-${contentOrder}" class="btn btn-pink">${res}</button>
            `
            contentOrder += 1;
        })
        html += 
        `
            <div class="card text-center">
                <div class="card-header">${title}</div>
                <div class="card-body">${cardContentHtml}</div>
            </div>
        `
        groupOrder += 1;
    });
    document.getElementById("button-container").innerHTML = html;
}

function play(id) {
    if (currentPlay !== "") {
        audio.pause();
        audio = new Audio();
    }
    currentPlay = id;
    let res = document.getElementById(id).innerHTML;
    audio.src = `./data/res/${res}.mp3`;
    audio.play();
}