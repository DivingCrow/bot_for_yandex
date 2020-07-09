// ==UserScript==
// @name         yanadex_bot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://yandex.ru/*
// ==/UserScript==

let keywords = ["Гобой","Как звучит флейта","Тромбон","Что такое валторна","Фагот","Скрипка","Виолончель"];
let keyword = keywords[getRandom(0,keywords.length)];
let ya_input = document.getElementsByClassName("input__control input__input mini-suggest__input")[0];
let search_b = document.getElementsByTagName("button")[0];
let next_p = document.getElementsByClassName("websearch-button__text")[0];

function getRandom(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}

function writeKeyword(word){
    let i=0;
    let timerId = setInterval(()=>{
        ya_input.value+=word[i];
        i++;
        if(i==word.length){
            clearInterval(timerId);
            search_b.click();
        }
    },100);
}

let links = document.links;

if (next_p == true)
    for(let i=0; i<links.length; i++){
        if(links[i].href.indexOf("xn----7sbab5aqcbiddtdj1e1g.xn--p1ai")!=-1){
            links[i].click();
            break;
            }
        }
    else {
    writeKeyword(keyword);
    }


//document.getElementsByClassName("input__control input__input mini-suggest__input")[0].value = "нечто";
//document.getElementsByTagName("button")[0].click();
