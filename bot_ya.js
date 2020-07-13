// ==UserScript==
// @name         yanadex_bot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @match        https://yandex.ru/*
// ==/UserScript==

let keywords = ["Гобой","Как звучит флейта","Тромбон","Что такое валторна","Фагот","Скрипка","Виолончель"];
let keyword = keywords[getRandom(0,keywords.length)];
let search_b = document.getElementsByTagName("button")[0];
let links = document.links;
let next_btn = document.getElementsByClassName("pager__item_kind_next");

function getRandom(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}

function writeKeyword(word){
    let i=0;
    let timerId = setInterval(()=>{
        text.value+=word[i];
        i++;
        if(i==word.length){
            clearInterval(timerId);
            search_b.click();
        }
    },100);
}

if (document.getElementById("text") != undefined)
    writeKeyword(keyword);
else if (location.hostname == "https://yandex.ru/"){
    let flag = true;
    for(let i=0; i<links.length; i++){
        if(links[i].href.indexOf("xn----7sbab5aqcbiddtdj1e1g.xn--p1ai")!=-1){
            flag=false;
            links[i].click();
            break;
        }
    }


// вот ниже я и завис. И не могу понять, как вытащить ссылку у Яндекса.
    
    
    if (document.getElementsByClassName("pager__item pager__item_current_yes pager__item_kind_page")[0].textContent > 4){
        flag = false;
        location.href = "https://yandex.ru/";
    }
    if (flag) setTimeout(()=>{next_btn.click()},getRandom(1000,2000));
} else {
    setInterval(()=>{
        if (getRandom(0,101)>=70) location.href = "https://yandex.ru/";
        else{
            let index = getRandom(0,links.length);
            if(links[index].href.indexOf("xn----7sbab5aqcbiddtdj1e1g.xn--p1ai")!=-1)
                links[index].click();
        }
    },getRandom(1000,2000));
}
