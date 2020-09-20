"use strict";

function getRandomText() {
    return new Promise((resolve) => {
        setTimeout(() => {
                const sign = Date.now().toLocaleString("zh-Hans-CN-u-nu-hanidec").slice(-5);
                resolve(sign);
            }, 50);
    });
}

async function getRandomChinese(length) {
    let promiseStartTime = Date.now();
    let i = 0,
        result = "";

    while(i < length) {
        result = await getRandomText();
        i++;
    }

    console.log(`Result ${result} for ${Date.now() - promiseStartTime} ms`);
}

getRandomChinese(4);