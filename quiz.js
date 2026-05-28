const questions = [

{
q:"সতীদাহ প্রথা বিলোপে কে গুরুত্বপূর্ণ ভূমিকা পালন করেন?",
options:["বিদ্যাসাগর","রাজা রামমোহন রায়","রবীন্দ্রনাথ","বঙ্কিমচন্দ্র"],
answer:1,
explanation:"রাজা রামমোহন রায় সতীদাহ প্রথা বিলোপে গুরুত্বপূর্ণ ভূমিকা পালন করেন।"
},

{
q:"ভারতের সংবিধান কার্যকর হয় কবে?",
options:["১৫ আগস্ট ১৯৪৭","২৬ জানুয়ারি ১৯৫০","২৬ নভেম্বর ১৯৪৯","১ জানুয়ারি ১৯৫০"],
answer:1,
explanation:"ভারতের সংবিধান ২৬ জানুয়ারি ১৯৫০ কার্যকর হয়।"
},

{
q:"ভারতের জাতীয় পাখি কোনটি?",
options:["ময়ূর","কোকিল","চড়ুই","হাঁস"],
answer:0,
explanation:"ময়ূর ভারতের জাতীয় পাখি।"
},

{
q:"RBI কী?",
options:["ব্যাংক","আদালত","মন্ত্রণালয়","বিশ্ববিদ্যালয়"],
answer:0,
explanation:"RBI ভারতের কেন্দ্রীয় ব্যাংক।"
},

{
q:"সুন্দরবন কী জন্য বিখ্যাত?",
options:["চা","ম্যানগ্রোভ বন","খনি","মরুভূমি"],
answer:1,
explanation:"সুন্দরবন বিশ্বের বৃহত্তম ম্যানগ্রোভ বন।"
}

];

function loadQuiz(){

const box = document.getElementById("quizBox");

questions.forEach((q,index)=>{

let html = `<div class='question-card'>
<h3>${index+1}. ${q.q}</h3>`;

q.options.forEach((opt,i)=>{

html += `
<label class='option'>
<input type='radio' name='q${index}' value='${i}'>
${opt}
</label>`;

});

html += "</div>";

box.innerHTML += html;

});

}

function submitQuiz(){

let score = 0;
let resultHTML = "";

questions.forEach((q,index)=>{

const ans = document.querySelector(`input[name="q${index}"]:checked`);

if(ans && parseInt(ans.value)===q.answer){
score += 1;
}else{
score -= 0.33;
}

resultHTML += `
<div class='solution-box'>
<b>প্রশ্ন ${index+1}:</b> ${q.explanation}
</div>`;

});

document.getElementById("result").innerHTML =
`<div class='score-box'>
<h2>Score: ${score.toFixed(2)} / ${questions.length}</h2>
</div>` + resultHTML;

saveResult(score);

}
