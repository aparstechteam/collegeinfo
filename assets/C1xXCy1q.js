import{o as t,c as a,a as e,F as _,n as r,t as l}from"./WDzhBfXw.js";const n={class:"p-4"},o=e("h2",{class:"text-2xl text-blue-500 font-semibold text-center"}," প্রশ্ন এবং উত্তর ",-1),y={class:"space-y-3 mt-3"},d={class:"font-semibold text-gray-900"},b={class:"text-gray-700"},m={__name:"ReviewDetails",props:{review:Object},setup(c){const i=[{label:"এসএসসিতে লাস্ট কত নম্বর পর্যন্ত এই কলেজে ভর্তি হয়েছিল (অনুমান)",key:"ssc_last_marks"},{label:"কলেজের ক্লাসে পড়াশোনা কেমন হয় (১০-এ রেটিং করবে)",key:"class_study_rating"},{label:"কলেজের ক্লাসে না গেলে জরিমানা বা কোন সমস্যা করে কি?",key:"class_absence_penalty"},{label:"কলেজের স্যারদের কাছে না পড়লে কি কোন সমস্যায় পড়তে হয়?",key:"teacher_study_penalty"},{label:"কলেজে Pactical এর Pressure বেশি না কম?",key:"practical_pressure"},{label:"কলেজে কয়টা শিফট? কোন শিফট এ ক্লাস কয়টা থেকে কয়টা পর্যন্ত হয়?",key:"shift_info"},{label:"প্রতিদিন কয়টা ক্লাস হয়?",key:"daily_classes"},{label:"ক্লাসের ডিউরেশন কত?",key:"class_duration"},{label:"পরীক্ষার চাপ কেমন?",key:"exam_pressure"},{label:"তোমার কলেজ থেকে বিগত বছরে কতজন জিপিএ-৫ পেয়েছে(অনুমান)",key:"gpa_5_last_year"},{label:"কলেজে মোট Student সংখ্যা (Science)",key:"total_students_science"},{label:"Physics, Chemistry, Math, Biology তোমার কলেজের প্রিয় স্যারদের নাম (কমা দিয়ে সবার নাম)",key:"favorite_teachers",inputType:"textarea"},{label:"কলেজ সম্পর্কে তোমার মন্তব্যঃ",key:"college_comments",inputType:"textarea"}];return(k,p)=>(t(),a("div",n,[o,e("div",y,[(t(),a(_,null,r(i,s=>e("div",{key:s.key},[e("div",d,l(s.label),1),e("div",b,l(c.review[s.key]),1)])),64))])]))}};export{m as _};