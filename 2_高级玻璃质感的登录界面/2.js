// let flag = 0;
// function bgChange() {
//     if(flag % 2 == 0){
//         document.querySelector('.other-login').style.backgroundColor = 'rgb(248, 182, 217)';
//     }
//     else{
//         document.querySelector('.other-login').style.backgroundColor = 'rgb(182, 211, 248)';
//     }

//     if(flag == 7){
//         flag = 1;
//     }else{
//         flag ++;
//     }
//     // 下面语句中，使用的是反单引号，在反单引号最后使用 ${变量名} 的形式在字符串最后拼接了变量值。
//     document.querySelector('.content').style.background = `url(./img/bg${flag}.webp)`;
//     return bgChange;
// }

// setInterval(bgChange(), 5000);


// 在使用以上js代码时切换图片会发生闪烁，
// 网上查到说主要原因是：图片没有预先加载，然后就调用了图片的动态效果，造成有闪屏的现象
// 解决办法是： 先进行图片的预加载
// 后面测试时发现好像只有第一次会存在图片加载不及时的情况，后面即使不写预加载的语句也不会发生切换时闪屏的情况了。

var images = new Array()  
function preload() {  
    for (i = 0; i < preload.arguments.length; i++) {  
        images[i] = new Image()  
        images[i].src = preload.arguments[i]  
    }  
}  

preload(  
    "./img/bg1.webp",  
    "./img/bg2.webp",
    "./img/bg3.webp",
    "./img/bg4.webp",
    "./img/bg5.webp",
    "./img/bg6.webp",
    "./img/bg7.webp",
) 

let flag = 0;
var img = new Image();
function bgChange() {
    if(flag % 2 == 0){
        document.querySelector('.other-login').style.backgroundColor = 'rgb(248, 182, 217)';
    }
    else{
        document.querySelector('.other-login').style.backgroundColor = 'rgb(182, 211, 248)';
    }

    if(flag == 7){
        flag = 1;
    }else{
        flag ++;
    }

    // 下面语句中，使用的是反单引号，在反单引号最后使用 ${变量名} 的形式在字符串最后拼接了变量值。
    document.querySelector('.content').style.backgroundImage = `url(./img/bg${flag}.webp)`;

    return bgChange;
}

setInterval(bgChange(), 5000);

