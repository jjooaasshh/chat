
        console.log("开始获取目标元素...");
        const targetElement1 = document.querySelector(".SlideUp");
        const targetElement2 = document.getElementById("Tips_Warn1");

        if (targetElement1) {
            console.log(".SlideUp 元素已找到:", targetElement1);
            targetElement1.remove();
            console.log(".SlideUp 元素已删除");
        } else {
            console.log("未找到 .SlideUp 元素");
        }

        if (targetElement2) {
            console.log("#Tips_Warn1 元素已找到:", targetElement2);
            targetElement2.remove();
            console.log("#Tips_Warn1 元素已删除");
        } else {
            console.log("未找到 #Tips_Warn1 元素");
        }
