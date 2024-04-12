const Lsgd = [
    {
        usernamegd: 'admin123',
        loaigiaodich:"Nạp tiền",
        biendong: '1,000',
        status:'Hoàn thành',
    },
    {
        usernamegd: 'tuanhuy12',
        loaigiaodich:"Rút tiền",
        biendong: '6,500,000',
        status:'Hoàn thành',
    },
    {
        usernamegd: 'anhtu',
        loaigiaodich:"Rút tiền",
        biendong: '2,000,000',
        status:'Đang xử lí',
    },

]


//điền dữ liệu vào table
function displayTransactionHistory() {
    const tbody = document.querySelector('.tbodylsgd');
    tbody.innerHTML = '';
    Lsgd.forEach(transaction => {
        const tr = document.createElement('tr');
        const trContent = `
            <td>${transaction.usernamegd}</td>
            <td>${transaction.loaigiaodich}</td>
            <td class="${transaction.loaigiaodich === 'Rút tiền' ? 'danger' : 'success'}">${transaction.biendong}</td>
            <td class="${transaction.status === 'Thất bại' ? 'danger' : transaction.status === 'Đang xử lí' ? 'warning' : 'success'}">${transaction.status}</td>
            <td><button class="editTransactionBtn">Chi tiết</button></td>
            `;
            tr.innerHTML = trContent;
            tbody.appendChild(tr);
        });
    }
    
//thêm giao dịch mới
document.getElementById('addTransactionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const newTransaction = {
        usernamegd: document.getElementById('usernamegd').value,
        biendong: document.getElementById('biendong').value,
        status: document.getElementById('status').value
    };
    if (newTransaction.usernamegd == "" || newTransaction.biendong == "" ) {
        alert('Không được để trống thông tin')
    }
    else {
        Lsgd.push(newTransaction);
        alert('Thêm giao dịch thành công !')
        displayTransactionHistory(); 
        document.getElementById('addTransactionForm').reset(); 
    }
});



document.addEventListener('click', function(event) {
    if (event.target.classList.contains('editTransactionBtn')) {
        const index = Array.from(event.target.parentNode.parentNode.parentNode.children).indexOf(event.target.parentNode.parentNode);
        const transaction = Lsgd[index];
        document.getElementById('editTransactionUsername').value = transaction.usernamegd;
        document.getElementById('editTransactionType').value = transaction.loaigiaodich;
        document.getElementById('editBiendong').value = transaction.biendong;
        document.getElementById('editTransactionStatus').value = transaction.status;
        document.querySelector('.popup-overlay').style.display = 'block';
        document.querySelector('.popup').style.display = 'block';

        document.getElementById('saveChangesTransaction').dataset.index = index;
    }
});

// đóng popup
document.getElementById('closePopupTransaction').addEventListener('click', function() {
    document.querySelector('.popup-overlay').style.display = 'none';
    document.querySelector('.popup').style.display = 'none';
});

document.getElementById('saveChangesTransaction').addEventListener('click', function() {
    const index = parseInt(this.dataset.index);
    Lsgd[index].biendong = document.getElementById('editBiendong').value;
    Lsgd[index].status = document.getElementById('editTransactionStatus').value;
    displayTransactionHistory();
    document.querySelector('.popup-overlay').style.display = 'none';
    document.querySelector('.popup').style.display = 'none';
});

// xóa giao dịch
document.getElementById('deleteTransaction').addEventListener('click', function() {
    if (confirm('Có chắc muốn xóa giao dịch này ? ')) {
        const index = parseInt(document.getElementById('saveChangesTransaction').dataset.index);
        Lsgd.splice(index, 1);
        displayTransactionHistory();
        document.querySelector('.popup-overlay').style.display = 'none';
        document.querySelector('.popup').style.display = 'none';
        alert('Xóa thành công !')
    }
});


displayTransactionHistory();