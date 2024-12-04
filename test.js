// 确保脚本在目标网站加载完成后执行
window.addEventListener("load", () => {
    console.log("页面已加载，开始执行脚本...");

    // 获取目标网站上的元素
    const targetElement1 = document.querySelector(".SlideUp"); // 替换为实际的元素选择器
    const targetElement2 = document.getElementById("Tips_Warn1"); // 替换为实际的元素选择器

    // 检查元素是否存在
    if (targetElement1) {
        console.log(".SlideUp 元素已找到:", targetElement1);
        // 删除元素
        targetElement1.remove();
        console.log(".SlideUp 元素已删除");
    } else {
        console.log("未找到 .SlideUp 元素");
    }

    if (targetElement2) {
        console.log("#Tips_Warn1 元素已找到:", targetElement2);
        // 删除元素
        targetElement2.remove();
        console.log("#Tips_Warn1 元素已删除");
    } else {
        console.log("未找到 #Tips_Warn1 元素");
    }
});
