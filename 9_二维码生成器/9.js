// 获取元素
const container = document.querySelector(".container");
const userInput = document.getElementById("userInput");
const submitBtn = document.getElementById("submit");
const downloadBtn = document.getElementById("download");
const sizeOption = document.querySelector(".sizeOption");
const BGcolor = document.getElementById("BGcolor");
const FGcolor = document.getElementById('FGcolor');

// 定义变量
let QR_code;
let sizeChoice, BGcolorChoice, FGcolorChoice;

// 设置大小
sizeOption.addEventListener("change", ()=>{
    sizeChoice = sizeOption.value;
});

// 设置背景色
BGcolor.addEventListener("input", ()=>{
    BGcolorChoice = BGcolor.value;
});

// 设置前景色
FGcolor.addEventListener('input', ()=>{
    FGcolorChoice = FGcolor.value;
});

// 格式化输入
// 这里inputFormat是一个函数，其被赋值了一个箭头函数，
const inputFormat = (value) => {
    // 这里是将一个正则表达式替换为空，即删除，正则表达式最后的g是使用了全局替换
    // 关于正则表达式的了解暂时较少
    value= value.replace(/[^a-z0-9a-z]+/g,"");
    return value;
};

// async为异步函数的关键字
submitBtn.addEventListener('click', async() => {
    container.innerHTML = "";
    // 生成QRcode（先清除上次的生成）
    /*
    关于异步函数的知识：
    Promise 对象用于表示一个异步操作的最终完成（或失败）及其结果值。
    await 用于等待一个 Promise 兑现并获取它兑现之后的值。
        当一个 Promise 被传递给 await 操作符，
        await 将等待该 Promise 兑现，
        并在兑现后返回该 Promise 兑现的值。
    */
    QR_code = await new QRCode(container, {
        text: userInput.value,
        width: sizeChoice,
        height: sizeChoice,
        colorDark: FGcolorChoice,
        colorLight: BGcolorChoice,
    });

    // 设置下载地址，download URL
    // toDataURL返回一个包含图片展示的data URL，参数设置图片格式
    const src = container.firstChild.toDataURL("img/pmg");
    downloadBtn.href = src;
    let userValue = userInput.value;
    // 这是一个异常抛出语句
    try{// 需要执行的语句
        userValue = new URL(userValue).hostname;
    }
    catch(_){ // try块有异常抛出时执行的语句。小括号中用于保存关联catch子句的异常对象的标识符。这里使用
        userValue = inputFormat(userValue);
        downloadBtn.download = `${userValue}QR`; // 这是一个反单引号的字符串，可以内嵌读取变量值
        downloadBtn.classList.remove("hide"); // 展示
    }
});

userInput.addEventListener("input", ()=>{
    // trim() 方法从字符串的两端清除空格，返回一个新的字符串，而不修改原始字符串
    if(userInput.value.trim().length < 1){
        submitBtn.disabled = true;
        downloadBtn.href = "";
        downloadBtn.classList.add("hide");
    }else{
        submitBtn.disabled = false;
    }
});

window.onload = () =>{
    container.innerHTML = "";
    sizeChoice = 100;
    sizeOption.value = 200;
    userInput.value = "";
    BGcolor.value = BGcolorChoice = "#ffffff";
    FGcolor.value = FGcolorChoice = "#377dff";
    downloadBtn.classList.add("hide");
    submitBtn.disabled = true;
}
