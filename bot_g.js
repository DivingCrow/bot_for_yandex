// ==UserScript==
// @name         bot_for_google
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.google.com/*
// @grant        none
// ==/UserScript==

let keywords = ["Гобой","Как звучит флейта","Тромбон","Что такое валторна","Фагот","Скрипка","Виолончель"];
let keyword  = keywords[getRandom(0,keywords.length)];
let btnK = document.getElementsByName("btnK")[1];
function getRandom(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}

function writeKeyword(word){
    let i=0;
    let timerId = setInterval(()=>{
        document.getElementsByName("q")[0].value+=word[i];
        i++;
        if(i==word.length){
            clearInterval(timerId);
            btnK.click();
        }
    },1000);
}

if (btnK != undefined)
    writeKeyword(keyword);
else {
let links = document.links;
    for(let i=0; i<links.length; i++){
        if(links[i].href.indexOf("xn----7sbab5aqcbiddtdj1e1g.xn--p1ai")!=-1){
            links[i].click();
            break;
        }
    }
}
