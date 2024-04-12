const ThongBaos = [
    {
        tieuDe: 'Siêu ưu đãi ',
        noiDung: 'Khuyễn mại nạp tặng 110% khi nạp thẻ',
        thoiGian: '7:42 03/12/2024 ',
    },
    {
        tieuDe: 'Cảnh báo ',
        noiDung: 'Hiện có nhiều web mạo danh lừa đảo khách hàng',
        thoiGian: '6:10 03/12/2024',
    },
]


function hienThiDanhSachThongBao() {
    const tbody = document.querySelector('.tbodythongbao');
    tbody.innerHTML = '';

    ThongBaos.forEach(thongBao => {
        const tr = document.createElement('tr');
        
        // Tạo và thêm nội dung cho từng ô cột
        tr.innerHTML = `
            <td>${thongBao.tieuDe}</td>
            <td>${thongBao.noiDung}</td>
            <td>${thongBao.thoiGian}</td>
            <td><button class="editThongBaoBtn">Chi tiết</button></td>
        `;
        
        tbody.appendChild(tr);
    });
}


// Mở chi tiết thông báo
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('editThongBaoBtn')) {
        const index = Array.from(event.target.parentNode.parentNode.parentNode.children).indexOf(event.target.parentNode.parentNode);
        const thongBao = ThongBaos[index];
        
        // Điền thông tin thông báo vào các trường trong popup
        document.getElementById('editTieuDe').value = thongBao.tieuDe;
        document.getElementById('editNoiDung').value = thongBao.noiDung;
        document.getElementById('editThoiGian').value = thongBao.thoiGian;
        
        document.getElementById('thongBaoPopupOverlay').style.display = 'block';
        document.getElementById('thongBaoPopup').style.display = 'block';
    }
});


// Thêm thông báo
document.getElementById('addThongBaoForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const tieuDe = document.getElementById('tieuDe').value;
    const noiDung = document.getElementById('noiDung').value;
    const thoiGian = document.getElementById('thoiGian').value;

    // Kiểm tra các trường không được để trống
    if (tieuDe.trim() === '' || noiDung.trim() === '' || thoiGian.trim() === '') {
        alert('Vui lòng điền đầy đủ thông tin');
        return;
    }
    ThongBaos.push({ tieuDe, noiDung, thoiGian });
    hienThiDanhSachThongBao();

    document.getElementById('addThongBaoForm').reset();
    document.getElementById('thongBaoAddPopupOverlay').style.display = 'none';
    document.getElementById('thongBaoAddPopup').style.display = 'none';
    alert('Thêm thông báo thành công !!');
});

// Đóng popup sửa/xóa thông báo
document.getElementById('closeThongBaoPopup').addEventListener('click', function() {
    document.getElementById('thongBaoPopupOverlay').style.display = 'none';
    document.getElementById('thongBaoPopup').style.display = 'none';
});

// Lưu thông tin khi sửa thông báo
document.getElementById('saveThongBaoChanges').addEventListener('click', function() {
    const tieuDeMoi = document.getElementById('editTieuDe').value;
    const noiDungMoi = document.getElementById('editNoiDung').value;
    const thoiGianMoi = document.getElementById('editThoiGian').value;
    const tieuDeSua = document.getElementById('editTieuDe').value;
    const index = ThongBaos.findIndex(thongBao => thongBao.tieuDe === tieuDeSua);
    if (index === -1) {
        console.error('Không tìm thấy thông báo để sửa.');
        return;
    }
    ThongBaos[index].tieuDe = tieuDeMoi;
    ThongBaos[index].noiDung = noiDungMoi;
    ThongBaos[index].thoiGian = thoiGianMoi;
    hienThiDanhSachThongBao();
    document.getElementById('thongBaoPopupOverlay').style.display = 'none';
    document.getElementById('thongBaoPopup').style.display = 'none';
    alert('Lưu thay đổi thành công !!');
});



// Xóa thông báo
document.getElementById('deleteThongBao').addEventListener('click', function () {
    if (confirm('Bạn có muốn xóa thông báo này ? ')) {
        const index = Array.from(document.querySelectorAll('.tbodythongbao tr')).indexOf(document.querySelector('.thongbaoEditActive'));
        ThongBaos.splice(index, 1);
        hienThiDanhSachThongBao();
        document.getElementById('thongBaoPopupOverlay').style.display = 'none';
        document.getElementById('thongBaoPopup').style.display = 'none';
        alert('Xóa thông báo thành công !!');
    }
});


hienThiDanhSachThongBao();