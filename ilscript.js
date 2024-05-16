document.addEventListener('DOMContentLoaded', function () {
    const fetchButton = document.getElementById('fetchButton');
    const imageElement = document.getElementById('image');
    const apiKey = 'Client-ID XnltkxbGWMu9faq7RXUgBRslj3rUUM5a9cP0_k5_0zo';

    fetchButton.addEventListener('click', function () {
        fetchRandomImage();
    });

    function fetchRandomImage() {
        const xhr = new XMLHttpRequest();
        const url = 'https://api.unsplash.com/photos/random';

        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    const data = JSON.parse(xhr.responseText);
                    const imageUrl = data.urls.regular;
                    const imageAlt = data.alt_description || 'Unsplash Image';
                    imageElement.src = imageUrl;
                    imageElement.alt = imageAlt;
                }
            }
        };

        xhr.open('GET', url);
        xhr.setRequestHeader('Authorization', apiKey);
        xhr.send();
    }
});