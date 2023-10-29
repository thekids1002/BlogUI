var dynamicTextElement = document.getElementById("dynamicText");
var texts = ["Social Blogger", "Võ Hoàng Kiệt"];
var currentIndex = 0;

function updateText() {
    dynamicTextElement.textContent = texts[currentIndex];
    currentIndex = (currentIndex + 1) % texts.length;
}

// Cập nhật nội dung mỗi 2 giây
setInterval(updateText, 2000);

// Gọi hàm cập nhật nội dung lần đầu
updateText();