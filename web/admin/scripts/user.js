const Users = [
    {
        username: 'admin123',
        password: 'admin',
        phonenumber: '0125566666',
        money: '1,500,000,000',
        role:'admin',
        status:'Hoạt động',
    },
    {
        username: 'conyeume123',
        password: '123456',
        phonenumber: '0376675290',
        money: '1,500,000',
        role:'user',
        status:'Hoạt động',
    },
    {
        username: 'yennhi1994',
        password: 'yennhicute',
        phonenumber: '058289022',
        money: '15,000,000',
        role:'user',
        status:'Bị cấm',
    },
    {
        username: 'kim39',
        password: 'kimkim1',
        phonenumber: '0365888780',
        money: '200,000',
        role:'user',
        status:'Cảnh báo',
    },
    {
        username: '___tnam__',
        password: 'namne1',
        phonenumber: '0786779001',
        money: '450,120,044',
        role:'user',
        status:'Hoạt động',
    },

]






// Thêm người dùng mới
document.getElementById('addUserForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const newUser = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value,
        phonenumber: document.getElementById('phonenumber').value,
        money: document.getElementById('money').value,
        role: document.getElementById('role').value,
        status: document.getElementById('status').value
    };
    if (newUser.username == "" || newUser.password =="" || newUser.phonenumber=="" || newUser.money=="" || newUser.role=="") {
        alert('Không được để trống thông tin')
    }
    else {
        Users.push(newUser);
        alert('Thêm người dùng thành công !')
    }
    displayUsers();
    document.getElementById('addUserForm').reset();
});

// hiển thị dữ liệu
function displayUsers() {
    const tbody = document.querySelector('.tbodynguoidung');
    tbody.innerHTML = '';
    Users.forEach(user => {
        const tr = document.createElement('tr');
        const trContent = `
            <td>${user.username}</td>
            <td>${user.password}</td>
            <td>${user.phonenumber}</td>
            <td>${user.money}</td>
            <td>${user.role}</td>
            <td class="${user.status === 'Bị cấm' ? 'danger' : user.status === 'Cảnh báo' ? 'warning' : 'success'}">${user.status}</td>
            <td class="primary"><button class="editUserBtn">Chi tiết</button></td>
        `;
        tr.innerHTML = trContent;
        tbody.appendChild(tr);
    });
}


// Mở chi tiết người dùng
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('editUserBtn')) {
        const index = Array.from(event.target.parentNode.parentNode.parentNode.children).indexOf(event.target.parentNode.parentNode);
        const user = Users[index];
        document.getElementById('editUsername').value = user.username;
        document.getElementById('editPassword').value = user.password;
        document.getElementById('editPhonenumber').value = user.phonenumber;
        document.getElementById('editMoney').value = user.money;
        document.getElementById('editRole').value = user.role;
        document.getElementById('editStatus').value = user.status;
        document.querySelector('.popup-overlay').style.display = 'block';
        document.querySelector('.popup').style.display = 'block';
    }
});

// Đóng popup
document.getElementById('closePopup').addEventListener('click', function() {
    document.querySelector('.popup-overlay').style.display = 'none';
    document.querySelector('.popup').style.display = 'none';
});

// Lưu dữ liệu khi đóng popup
document.getElementById('saveChanges').addEventListener('click', function() {
    const index = Users.findIndex(user => user.username === document.getElementById('editUsername').value);
    Users[index].password = document.getElementById('editPassword').value;
    Users[index].phonenumber = document.getElementById('editPhonenumber').value;
    Users[index].money = document.getElementById('editMoney').value;
    Users[index].status = document.getElementById('editStatus').value;
    displayUsers();
    document.querySelector('.popup-overlay').style.display = 'none';
    document.querySelector('.popup').style.display = 'none';
    alert('Lưu dữ liệu thành công !!');
});

// Xóa người dùng
document.getElementById('deleteUser').addEventListener('click', function () {
    if (confirm('Bạn có muốn xóa người dùng này ? ')) {
        const index = Users.findIndex(user => user.username === document.getElementById('editUsername').value);
        Users.splice(index, 1);

        displayUsers();
        document.querySelector('.popup-overlay').style.display = 'none';
        document.querySelector('.popup').style.display = 'none';
        // Hiển thị thông báo xóa thành công
        alert('Xóa người dùng thành công !!');
    }
});




displayUsers();