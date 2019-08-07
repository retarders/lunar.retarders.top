let endpoint = 'https://www.youtube.com/'

function createURL(data) {
    return `${endpoint}${data.path}?v=${data.videoId}`
}

setTimeout(() => document.location.href = createURL({ path: 'watch', videoId: 'dQw4w9WgXcQ' }), 1000);