// 创建一个 MutationObserver 实例
const observer = new MutationObserver((mutations) => {
    const targetElement1 = document.querySelector(".SlideUp");
    const targetElement2 = document.getElementById("Tips_Warn1");

    if (targetElement1) {
        console.log(".SlideUp 元素已找到:", targetElement1);
        targetElement1.remove();
        console.log(".SlideUp 元素已删除");
        observer.disconnect(); // 找到后停止观察
    }

    if (targetElement2) {
        console.log("#Tips_Warn1 元素已找到:", targetElement2);
        targetElement2.remove();
        console.log("#Tips_Warn1 元素已删除");
        observer.disconnect(); // 找到后停止观察
    }
});

// 配置观察选项
observer.observe(document.body, { childList: true, subtree: true });

console.log("正在监听 DOM 变化...");
