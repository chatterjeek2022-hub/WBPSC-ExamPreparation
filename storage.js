function saveResult(score){

const history =
JSON.parse(localStorage.getItem("wbpsc_results") || "[]");

history.push({
score,
date:new Date().toLocaleString()
});

localStorage.setItem(
"wbpsc_results",
JSON.stringify(history)
);

loadHistory();

}

function loadHistory(){

const history =
JSON.parse(localStorage.getItem("wbpsc_results") || "[]");

const box =
document.getElementById("historyBox");

if(!box) return;

box.innerHTML = "";

history.reverse().forEach(item=>{

box.innerHTML += `
<div class='history-card'>
<b>Score:</b> ${item.score}<br>
<b>Date:</b> ${item.date}
</div>`;

});

}

async function loadCurrentAffairs(){

const res =
await fetch("currentaffairs.json");

const data = await res.json();

const box =
document.getElementById("currentAffairs");

data.affairs.forEach(item=>{

box.innerHTML += `
<div class='affair-card'>
• ${item}
</div>`;

});

}
