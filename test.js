// 确保脚本在目标网站加载完成后执行
window.addEventListener("load", () => {
  // 获取目标网站上的元素
  const targetElement1 = document.querySelector(".SlideUp"); // 替换为实际的元素选择器
  const targetElement2 = document.getElementById("Tips_Warn1"); // 替换为实际的元素选择器

  // 检查元素是否存在
  if (targetElement1) {
    // 对元素进行操作，例如修改内容
    targetElement1.textContent = "内容已被修改1";
    targetElement1.style.backgroundColor = "yellow";
    targetElement1.style.border = "2px solid red";
  }

  if (targetElement2) {
    // 对元素进行操作，例如修改内容
    targetElement2.textContent = "内容已被修改2";
    targetElement2.style.backgroundColor = "yellow";
    targetElement2.style.border = "2px solid red";
  }
});
