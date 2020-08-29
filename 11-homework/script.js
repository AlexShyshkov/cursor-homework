"use strict";

function getRandomChinese(length) {
    return new Promise((resolve, reject) => {
        if(length <= 0) {
            reject("Length less then 0");
        } else {
            setTimeout(() => {
                const sign = Date.now().toLocaleString("zh-Hans-CN-u-nu-hanidec").slice(-5);
                resolve(console.log(sign));
            }, length * 50);
        }
    });    
}

getRandomChinese(0);
getRandomChinese(4);