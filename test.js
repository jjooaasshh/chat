// 确保脚本在目标网站加载完成后执行
window.addEventListener("load", () => {
  // 获取目标网站上的元素
  const targetElement1 = document.querySelector(".SlideUp"); // 替换为实际的元素选择器
  const targetElement2 = document.getElementById("Tips_Warn1"); // 替换为实际的元素选择器

  // 检查元素是否存在
  if (targetElement1) {
    // 删除元素
    targetElement1.remove();
    console.log("脚本已加载并执行");
  }

  if (targetElement2) {
    // 删除元素
    targetElement2.remove();
    console.log("脚本已加载并执行");
  }
});
