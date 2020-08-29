"use strict";

function getRandomChinese() {
    const sign = Date.now().toLocaleString("zh-Hans-CN-u-nu-hanidec").slice(-5);
    //const text = String.fromCharCode(sign);
    return sign;
}

//getRandomChinese(4);
console.log(getRandomChinese());