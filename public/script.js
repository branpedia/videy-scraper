async function scrapeVideo() {
    const url = document.getElementById('videoUrl').value;
    const resultDiv = document.getElementById('result');
    
    try {
        const response = await fetch(`/api/scrape?url=${encodeURIComponent(url)}`);
        const data = await response.json();
        
        if (data.error) {
            resultDiv.innerHTML = `<p style="color: red;">Error: ${data.error}</p>`;
        } else {
            resultDiv.innerHTML = `
                <p>Video URL: <a href="${data.videoUrl}" target="_blank">${data.videoUrl}</a></p>
            `;
        }
    } catch (error) {
        resultDiv.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
    }
}
