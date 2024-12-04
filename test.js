console.log("开始获取目标元素...");
const targetElement1 = document.querySelector(".SlideUp");
const targetElement2 = document.getElementById("Tips_Warn");
const targetElement3 = document.getElementById("Tips_Warn1");
const targetElement4 = document.getElementById("Tips_Warn3");
const targetElement5 = document.getElementById("SlideSysInfos");

if (targetElement1) {
  console.log(".SlideUp 元素已找到:", targetElement1);
  targetElement1.remove();
  console.log(".SlideUp 元素已删除");
} else {
  console.log("未找到 .SlideUp 元素");
}

if (targetElement2) {
  console.log("#Tips_Warn 元素已找到:", targetElement2);
  targetElement2.remove();
  console.log("#Tips_Warn 元素已删除");
} else {
  console.log("未找到 #Tips_Warn 元素");
}

if (targetElement3) {
  console.log("#Tips_Warn1 元素已找到:", targetElement3);
  targetElement3.remove();
  console.log("#Tips_Warn1 元素已删除");
} else {
  console.log("未找到 #Tips_Warn1 元素");
}

if (targetElement4) {
  console.log("#Tips_Warn3 元素已找到:", targetElement4);
  targetElement4.remove();
  console.log("#Tips_Warn3 元素已删除");
} else {
  console.log("未找到 #Tips_Warn3 元素");
}

if (targetElement4) {
  console.log("#Tips_Warn3 元素已找到:", targetElement4);
  targetElement4.remove();
  console.log("#Tips_Warn3 元素已删除");
} else {
  console.log("未找到 #Tips_Warn3 元素");
}

if (targetElement5) {
  console.log("#SlideSysInfos 元素已找到:", targetElement5);
  targetElement5.remove();
  console.log("#SlideSysInfos 元素已删除");
} else {
  console.log("未找到 #SlideSysInfos 元素");
}
