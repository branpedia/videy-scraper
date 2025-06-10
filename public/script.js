// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
});

// Load theme preference
if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark');
}

// Donate Modal
function showDonate() {
    document.getElementById('donateModal').classList.remove('hidden');
}

function closeDonate() {
    document.getElementById('donateModal').classList.add('hidden');
}

// Scrape Video
async function scrapeVideo() {
    const url = document.getElementById('videoUrl').value;
    const resultDiv = document.getElementById('result');
    
    try {
        const response = await fetch(`/api/videy?url=${encodeURIComponent(url)}`);
        const data = await response.json();
        
        if (data.error) {
            resultDiv.innerHTML = `<p class="text-red-500">Error: ${data.error}</p>`;
        } else {
            resultDiv.innerHTML = `
                <p>Video URL: <a href="${data.videoUrl}" target="_blank" class="text-blue-500 hover:underline">${data.videoUrl}</a></p>
            `;
        }
    } catch (error) {
        resultDiv.innerHTML = `<p class="text-red-500">Error: ${error.message}</p>`;
    }
}

// Pagination Logic
const prevPage = document.getElementById('prevPage');
const nextPage = document.getElementById('nextPage');
const pageInfo = document.getElementById('pageInfo');
let currentPage = 1;
const totalPages = 2; // Sesuaikan dengan jumlah total halaman

prevPage.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        updatePagination();
    }
});

nextPage.addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        updatePagination();
    }
});

function updatePagination() {
    pageInfo.textContent = `${currentPage} / ${totalPages}`;
    prevPage.disabled = currentPage === 1;
    nextPage.disabled = currentPage === totalPages;
    // Tambahkan logika untuk memuat data tabel berdasarkan halaman
}

// Mobile Menu
const menuButton = document.getElementById('menuButton');
menuButton.addEventListener('click', () => {
    // Tambahkan logika untuk toggle menu mobile
});
