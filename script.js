// Lấy danh sách các cánh hoa
const petals = document.querySelectorAll('.petal');

// Hàm để thay đổi kích thước của cánh hoa
function animatePetals() {
    petals.forEach((petal, index) => {
        setTimeout(() => {
            petal.style.transform = 'scaleY(0)';
        }, index * 100);
        setTimeout(() => {
            petal.style.transform = 'scaleY(1)';
        }, index * 100 + 50);
    });
}

// Lặp lại hiệu ứng nở hoa
setInterval(animatePetals, 2000);
