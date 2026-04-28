// Sample video data
const videos = [
    { id: 1, title: 'Sample Video 1', duration: '5:30', url: 'https://example.com/video1.mp4' },
    { id: 2, title: 'Sample Video 2', duration: '3:45', url: 'https://example.com/video2.mp4' },
    { id: 3, title: 'Sample Video 3', duration: '7:12', url: 'https://example.com/video3.mp4' },
];

function displayVideos() {
    const videoGrid = document.getElementById('videoGrid');
    videoGrid.innerHTML = '';

    videos.forEach(video => {
        const videoCard = document.createElement('div');
        videoCard.className = 'video-card';
        videoCard.innerHTML = `
            <div class="video-thumbnail">▶️</div>
            <div class="video-info">
                <div class="video-title">${video.title}</div>
                <div class="video-duration">${video.duration}</div>
            </div>
        `;
        videoCard.addEventListener('click', () => playVideo(video.url));
        videoGrid.appendChild(videoCard);
    });
}

function playVideo(url) {
    const modal = document.getElementById('videoModal');
    const videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.src = url;
    modal.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
    displayVideos();

    // Modal close functionality
    const modal = document.getElementById('videoModal');
    if (!modal) {
        const newModal = document.createElement('div');
        newModal.id = 'videoModal';
        newModal.className = 'modal';
        newModal.innerHTML = `
            <div class="modal-content">
                <span class="close">&times;</span>
                <video id="videoPlayer" controls></video>
            </div>
        `;
        document.body.appendChild(newModal);

        newModal.querySelector('.close').addEventListener('click', () => {
            newModal.style.display = 'none';
            document.getElementById('videoPlayer').pause();
        });

        window.addEventListener('click', (e) => {
            if (e.target === newModal) {
                newModal.style.display = 'none';
                document.getElementById('videoPlayer').pause();
            }
        });
    }
});