"use strict";

function getRandomChinese(length) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const sign = Date.now().toLocaleString("zh-Hans-CN-u-nu-hanidec").slice(-5);
            resolve(console.log(sign));
        }, length * 50);
    });    
}

getRandomChinese(4);