const settings = [
    {
        namesetting: 'Chuyển quỹ',
    },
    {
        namesetting: 'Rút tiền',
    },
    {
        namesetting: 'Hot game',
    },
    {
        namesetting: 'Bệt cầu 27 lô A',
    },
    {
        namesetting: 'Bệt cầu 27 lô B',
    },
    {
        namesetting: 'Bắn cá',
    },
    {
        namesetting: 'Thể thao',
    },
    {
        namesetting: 'Nổ hũ',
    },
    {
        namesetting: 'live',
    },

]



function displayTransactionHistory() {
    const tbody = document.querySelector('.tbodycaidat');
    tbody.innerHTML = '';
    settings.forEach((st, index) => {
        const tr = document.createElement('tr');
        const trContent = `
            <td>${st.namesetting}</td>
            <td>
                <p id="status-${index}">${st.namesetting} đang bật</p>
                <div class="toggle-container">
                    <label class="switch">
                        <input type="checkbox" class="toggle" data-index="${index}" checked>
                        <span class="slider"></span>
                    </label>
                </div>
            </td>
        `;
        tr.innerHTML = trContent;
        tbody.appendChild(tr);

        // Lắng nghe sự kiện thay đổi trạng thái của công tắc
        const toggle = tr.querySelector('.toggle');
        const status = tr.querySelector(`#status-${index}`);
        toggle.addEventListener('change', function() {
            if (this.checked) {
                status.textContent = `${st.namesetting} đang bật`;
            } else {
                status.textContent = `${st.namesetting} đang tắt`;
            }
        });
    });
}


displayTransactionHistory()