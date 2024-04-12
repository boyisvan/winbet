const NganHang = [
    {
        tenNganHang: 'Viettinbank',
        logo:'viettinbank.png',
        soTaiKhoan: '123456789',
        chuTaiKhoan: 'NGUYEN VAN A',
        noiDungChuyenKhoan: 'naptien1',
    },
    {
        tenNganHang: 'Momo',
        logo:'momo.png',
        soTaiKhoan: '000123',
        chuTaiKhoan: 'LE VAN B',
        noiDungChuyenKhoan: 'naptienmomo',
    },
]

function hienThiDanhSachNganHang() {
    const tbody = document.querySelector('.bank-body');
    tbody.innerHTML = '';

    NganHang.forEach(nganHang => {
        const tr = document.createElement('tr');
        
        // Tạo và thêm nội dung cho từng ô cột
        tr.innerHTML = `
            <td>${nganHang.tenNganHang}</td>
            <td>${nganHang.soTaiKhoan}</td>
            <td>${nganHang.chuTaiKhoan}</td>
            <td>${nganHang.noiDungChuyenKhoan}</td>
            <td><img src="/web/admin/images/logonganhang/${nganHang.logo}" alt="${nganHang.tenNganHang}" class="logonganhang"></td>
            <td><button class="editBankBtn">Chi tiết</button></td>
        `;
        
        tbody.appendChild(tr);
    });
}



document.getElementById('addBankForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const tenNganHang = document.getElementById('tenNganHang').value;
    const soTaiKhoan = document.getElementById('soTaiKhoan').value;
    const chuTaiKhoan = document.getElementById('chuTaiKhoan').value;
    const noiDungChuyenKhoan = document.getElementById('noiDungChuyenKhoan').value;
    const logo = document.getElementById('logo').value;

    if (tenNganHang == "" || soTaiKhoan=="" || chuTaiKhoan=="" || noiDungChuyenKhoan=="" || logo=="") {
        alert('Không được để trống dữ liệu !')
    }
    else {
        // Tạo một  ngân hàng mới
        const nganHangMoi = {
            tenNganHang: tenNganHang,
            soTaiKhoan: soTaiKhoan,
            chuTaiKhoan: chuTaiKhoan,
            noiDungChuyenKhoan: noiDungChuyenKhoan,
            logo: logo
        };
        NganHang.push(nganHangMoi);
        hienThiDanhSachNganHang();
        document.getElementById('addBankForm').reset();
        alert('Thêm tài khoản ngân hàng mới thành công');
    }
});

// Mở chi tiết ngân hàng
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('editBankBtn')) {
        const index = Array.from(event.target.parentNode.parentNode.parentNode.children).indexOf(event.target.parentNode.parentNode);
        const bank = NganHang[index];
        
        // Điền thông tin ngân hàng vào form
        document.getElementById('editBankName').value = bank.tenNganHang;
        document.getElementById('editBankAccount').value = bank.soTaiKhoan;
        document.getElementById('editBankOwner').value = bank.chuTaiKhoan;
        document.getElementById('editBankTransfer').value = bank.noiDungChuyenKhoan;
        document.getElementById('editBankLogo').value = bank.logo;
        
        document.getElementById('bankPopupOverlay').style.display = 'block';
        document.getElementById('bankPopup').style.display = 'block';
    }
});


// Đóng popup
document.getElementById('closeBankPopup').addEventListener('click', function() {
    document.getElementById('bankPopupOverlay').style.display = 'none';
    document.getElementById('bankPopup').style.display = 'none';
});

// Lưu dữ liệu khi đóng popup
document.getElementById('saveBankChanges').addEventListener('click', function() {
    const bankName = document.getElementById('editBankName').value;
    const index = NganHang.findIndex(bank => bank.tenNganHang === bankName);
    NganHang[index].soTaiKhoan = document.getElementById('editBankAccount').value;
    NganHang[index].chuTaiKhoan = document.getElementById('editBankOwner').value;
    NganHang[index].noiDungChuyenKhoan = document.getElementById('editBankTransfer').value;
    NganHang[index].logo = document.getElementById('editBankLogo').value;
    
    // Cập nhật hiển thị danh sách ngân hàng
    hienThiDanhSachNganHang();
    
    document.getElementById('bankPopupOverlay').style.display = 'none';
    document.getElementById('bankPopup').style.display = 'none';
    alert('Lưu thay đổi thành công !!');
});

// Xóa ngân hàng
document.getElementById('deleteBank').addEventListener('click', function () {
    if (confirm('Bạn có muốn xóa ngân hàng này ? ')) {
        const tenNganHang = document.getElementById('tenNganHang').value;
        const index = NganHang.findIndex(bank => bank.tenNganHang === tenNganHang);
        NganHang.splice(index, 1);
        hienThiDanhSachNganHang();
        document.getElementById('bankPopupOverlay').style.display = 'none';
        document.getElementById('bankPopup').style.display = 'none';
        
        alert('Xóa ngân hàng thành công !!');
    }
});


hienThiDanhSachNganHang();

