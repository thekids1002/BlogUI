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


// Lắng nghe sự kiện cuộn trang
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
    
    // Hiển thị nút khi người dùng cuộn xuống dưới
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

// Xử lý sự kiện khi nút "Nổi lên đầu trang" được nhấn
document.getElementById("scrollToTopBtn").addEventListener("click", function() {
    scrollToTop();
});

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}




// Lắng nghe sự kiện cuộn trang
window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");

    // Hiển thị nút khi người dùng cuộn xuống dưới
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}
