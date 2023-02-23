window.onload = init;
function init(){
    
}

// 获取了加减两个元素
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const counter = document.querySelector(".counter");
const totalCount = document.querySelector("p");

let positionPlus;
let number = 0;
let timer;

totalCount.innerHTML = number; // 计数器初始值为0

// 为计数器的元素添加鼠标移动的监听事件,效果就是鼠标可以拖动计数器元素
counter.addEventListener("mousemove", (event) => {
    // getBoundingClientRect() 返回一个DOMRect对象，其提供了元素的大小及其相对于视口的位置
    const position = counter.getBoundingClientRect();
    // pageX为相对于整个文档边缘的距离, x计算为counter此时的轴线位置
    const x = event.pageX - position.left - position.width / 2;

    // toFixed()方法使用定点表示法来格式化一个数值，参数表示保留几位小数，返回值是一个字符串
    // 这里就是对x进行了转换，可以通过小数点设置偏移量
    positionPlus = (x * .02).toFixed(2);

    if(number == 0 && positionPlus < 0){
        positionPlus = (x * .01).toFixed(2);
    }

    if(timer) clearTimeout(timer);

    timer = setTimeout(() => {
        if(positionPlus > 0.65){
            number++;
            totalCount.innerHTML = number;
        }else if(positionPlus < -0.65 && number != 0){
            number--;
            totalCount.innerHTML = number;
        }
    }, 30)

    counter.style.transform = `translateX(${positionPlus}em)`;
})

// 鼠标离开时计数器回到原位
counter.addEventListener("mouseout", () => {
    // transform属性是进行一些空间变换，transition属性是设置过渡效果
    counter.style.transform = `translateX(0)`;
    counter.style.transition = ".3s cubic-bezier(0.2, 0.70, 0.1, 1.80)";
})

