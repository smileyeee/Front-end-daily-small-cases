const circles = document.querySelectorAll('.circle'),
    progress = document.querySelector('.indicator'),
    buttons = document.querySelectorAll('button');

let currentStep = 1;
const update = (e) => {
    // 参数e代表事件的状态，
    // e.target 表示触发事件的对象的引用
    // e.target.id 获取该对象的id，就可以判断点击了哪个按钮了，然后对应地加减进度数
    currentStep = e.target.id === 'next' ? ++currentStep : --currentStep;

    // 更新圆圈样式
    circles.forEach((circle, index) => {
        // 使用了反单引号，判断index与currentStep的大小来选择添加或移除active类名
        // 这句代码比较绕
        circle.classList[`${index < currentStep ? "add" : "remove"}`]("active");
    });

    // 更新进度条样式
    progress.style.width = `${((currentStep - 1) / (circles.length - 1)) * 100}%`;
    

    // 判断按钮是否可用
    if(currentStep === circles.length){
        buttons[1].disabled = true;
    }else if(currentStep === 1){
        buttons[0].disabled = true;
    }else{
        buttons.forEach((button) => (button.disabled = false));
    }
};

buttons.forEach(button => {
    button.addEventListener("click", update);
})
