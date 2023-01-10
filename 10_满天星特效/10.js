// 创建100个span作为小球
for(let i = 0; i < 200;i++){
    let el = document.createElement('span');
    el.style = `--i:${Math.random()*50 + 1}`;
    balls.append(el);
}
