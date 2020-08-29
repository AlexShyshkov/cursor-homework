"use strict";

function getRandomChinese(length) {
    let promiseStartTime = Date.now();
    return new Promise((resolve, reject) => {
        if(length <= 0) {
            reject("Length less then 0");
        } else {
            setTimeout(() => {
                const sign = Date.now().toLocaleString("zh-Hans-CN-u-nu-hanidec").slice(-5);
                resolve(sign);
            }, length * 50);
        }
    }).then(sign => {
            console.log(`Result ${sign} for ${Date.now() - promiseStartTime} ms`);
        }        
    );
}

getRandomChinese(0);
getRandomChinese(4);