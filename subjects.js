const subjects = {

history:`বাংলার নবজাগরণ:
• রাজা রামমোহন রায়
• বিদ্যাসাগর
• বঙ্গভঙ্গ
• স্বদেশি আন্দোলন

মুঘল সাম্রাজ্য:
• বাবর
• আকবর
• শাহজাহান`,

geography:`ভারতের ভূগোল:
• হিমালয়
• গঙ্গা
• দাক্ষিণাত্য মালভূমি
• সুন্দরবন`,

constitution:`ভারতের সংবিধান:
• মৌলিক অধিকার
• মৌলিক কর্তব্য
• রাষ্ট্রপতি
• প্রধানমন্ত্রী`,

economics:`ভারতীয় অর্থনীতি:
• RBI
• GST
• NITI Aayog
• মুদ্রাস্ফীতি`,

science:`বিজ্ঞান:
• নিউটনের সূত্র
• DNA
• সালোকসংশ্লেষ`,

math:`অঙ্ক:
• শতকরা
• সময় ও কাজ
• সরল সুদ`
};

function loadSubject(){
const sub = document.getElementById("subjectSelect").value;
document.getElementById("studyContent").value = subjects[sub];
}
