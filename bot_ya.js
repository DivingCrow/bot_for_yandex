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
let ya_input = document.getElementsByClassName("input__control input__input mini-suggest__input")[0]; //заменить на id text
let search_b = document.getElementsByTagName("button")[0];

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

if (ya_input != undefined)
    writeKeyword(keyword);
else {
let links = document.links;
    for(let i=0; i<links.length; i++){
        if(links[i].href.indexOf("xn----7sbab5aqcbiddtdj1e1g.xn--p1ai")!=-1){
            links[i].setAttribute("target", "_self"); //заменить на remove
            links[i].click();
            break;
        }
    }
}

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

if (ya_input != undefined)
    writeKeyword(keyword);
else {
let links = document.links;
    for(let i=0; i<links.length; i++){
        if(links[i].href.indexOf("xn----7sbab5aqcbiddtdj1e1g.xn--p1ai")!=-1){
            links[i].setAttribute("target", "_self");
            links[i].click();
            break;
        }
    }
}
