// Mock data for posts
const posts = [
    { user: 'John Doe', content: 'Just posted an update!' },
    { user: 'Jane Smith', content: 'Feeling great today!' }
];

// Function to load posts
function loadPosts() {
    const postsContainer = document.getElementById('posts');
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.innerHTML = `<p><strong>${post.user}</strong>: ${post.content}</p>`;
        postsContainer.appendChild(postElement);
    });
}

// Load posts when the page loads
window.onload = function () {
    loadPosts();
};
