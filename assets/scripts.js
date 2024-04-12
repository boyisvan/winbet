document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    function showSlide(n) {
        slides[currentSlide].classList.remove("active");
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add("active");
    }

    setInterval(function() {
        showSlide(currentSlide + 1);
    }, 4000); // Chuyển đổi ảnh sau mỗi 5 giây
    showSlide(currentSlide);
});





document.addEventListener("DOMContentLoaded", function () {
    const navBtns = document.querySelectorAll('.nav-btn');

    navBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Xóa lớp active khỏi tất cả các nút
            navBtns.forEach(btn => {
                btn.classList.remove('active');
            });

            // Thêm lớp active cho nút hiện tại
            btn.classList.add('active');
        });
    });
});


document.getElementById('showOptionsButton').addEventListener('click', function() {
    var optionsDiv = document.getElementById('optionsDiv');
    optionsDiv.classList.toggle('show');
});



    // Lưu tên và đường dẫn ảnh vào một mảng
document.addEventListener("DOMContentLoaded", function() {
    var nameElement = document.querySelector('.namehl');
    var imgElements = document.querySelectorAll('.hc1img1');
    
    var currentIndex = 0;
    
    function changeContent() {
        // Mảng chứa tên
        var names = ["Wendy", "Filona", "Emily"];
        
        nameElement.textContent = names[currentIndex];
        
        imgElements.forEach(function(imgElement, index) {
            imgElement.style.display = index === currentIndex ? 'block' : 'none';
        });
        
        currentIndex = (currentIndex + 1) % names.length;
    }
    
    setInterval(changeContent, 800);
    changeContent();
});




document.addEventListener("DOMContentLoaded", function() {
    // Lấy tất cả các nút và nội dung
    const navBtns = document.querySelectorAll('.nav-btn');
    const contents = document.querySelectorAll('.content1');

    // Ẩn tất cả nội dung trừ nội dung đầu tiên
    function hideAllContent() {
        contents.forEach(content => {
            content.style.display = 'none';
        });
    }   
    
    // Hiển thị nội dung tương ứng với nút được nhấp
    function showContent(contentId) {
        hideAllContent();
        const targetContent = document.getElementById(contentId);
        if (targetContent) {
            targetContent.style.display = 'block';
        }
    }

    // Gán sự kiện click cho mỗi nút
    navBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const contentId = btn.id.replace('btn', 'Content');
            showContent(contentId);
        });
    });

    // Hiển thị nội dung của nút đầu tiên mặc định khi trang được tải lên
    showContent('hotContent');
});



document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    function showSlide(n) {
        slides[currentSlide].classList.remove("active");
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add("active");
    }

    setInterval(function() {
        showSlide(currentSlide + 1);
    }, 4000); // Chuyển đổi ảnh sau mỗi 5 giây
    showSlide(currentSlide);
});


document.addEventListener("DOMContentLoaded", function () {
  var moneyBtn = document.querySelector(".sodu");
  var popup = document.querySelector(".popup");
  var closeBtn = document.querySelector(".close-btn");

  moneyBtn.addEventListener("click", function () {
    popup.classList.toggle("active");
  });

  closeBtn.addEventListener("click", function () {
    popup.classList.remove("active");
  });
});



document.getElementById('tienrut').addEventListener('input', function() {
        // Lấy giá trị nhập vào
        var inputValue = this.value.trim();

        // Kiểm tra xem giá trị nhập vào có phải là số không
        if (!isNaN(inputValue) && inputValue >= 10 && inputValue <= 1000) {
            // Cập nhật nội dung của phần tử có class 'datathucte' với định dạng dữ liệu yêu cầu
            document.querySelector('.datathucte').textContent = (inputValue * 1000) + ' VND';
        } else {
            // Nếu giá trị không hợp lệ, hiển thị thông báo hoặc thực hiện hành động phù hợp
            console.log('Vui lòng nhập số từ 200 đến 1000.');
        }
});
    



document.addEventListener("DOMContentLoaded", function () {
  var moneyBtn = document.querySelector(".sodu1");
  var popup = document.querySelector(".popup");
  var closeBtn = document.querySelector(".close-btn");

  moneyBtn.addEventListener("click", function () {
    popup.classList.toggle("active");
  });

  closeBtn.addEventListener("click", function () {
    popup.classList.remove("active");
  });
});



function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.querySelectorAll(".openModalBtn1").forEach(function(button) {
    button.addEventListener("click", function() {
        showModal();
    });
    });

    document.querySelectorAll(".close").forEach(function(closeButton) {
    closeButton.addEventListener("click", function() {
        hideModal();
    });
    });

    function showModal() {
    var overlay = document.querySelector(".overlay");
    var modal = document.querySelector(".modal1");
    overlay.style.display = "block";
    modal.style.display = "block";
    }

    function hideModal() {
    var overlay = document.querySelector(".overlay");
    var modal = document.querySelector(".modal1");
    overlay.style.display = "none";
    modal.style.display = "none";
}





document.addEventListener("DOMContentLoaded", function() {
    const inputField = document.getElementById('tienrut');
    const numberButtons = document.querySelectorAll('.number-btn');
    const clearButton = document.getElementById('clear-btn');

    // Xử lý khi người dùng ấn vào các nút số
    numberButtons.forEach(button => {
        button.addEventListener('click', function() {
            inputField.value += button.textContent; // Thêm số vào input
        });
    });

    // Xử lý khi người dùng ấn vào nút Clear
    clearButton.addEventListener('click', function() {
        inputField.value = inputField.value.slice(0, -1); // Xóa ký tự cuối cùng của input
    });
});
