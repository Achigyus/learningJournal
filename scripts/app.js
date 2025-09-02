import { blogs } from './data.js';


const mainWrap = document.getElementById('main_wrap');
const blogsWrap = document.getElementById('blogs_wrap');
const viewMoreBtn = document.getElementById('view_more');

let currentIndex = 0;
const blogsPerPage = 6;

function renderBlogs() {
    let blogsHTML = '';
    const blogsToShow = blogs.slice(0, currentIndex + blogsPerPage);

    blogsHTML = blogsToShow.map(blog => {
        return `
            <div class="blog_card">
                <div class="blog_img_cont">
                    <img src="${blog.image}" alt="#" class="blog_img">
                </div>
                <p class="blog_date">${blog.date}</p>
                <h3 class="blog_title">${blog.title}</h3>
                <p class="blog_desc">${blog.content}</p>
            </div>
        `
    }).join('');

    blogsWrap.innerHTML = blogsHTML;

    // Hide button if all blogs are rendered
    if (blogsToShow.length >= blogs.length) {
        viewMoreBtn.style.display = 'none';
    } else {
        viewMoreBtn.style.display = 'block';
    }
}

viewMoreBtn.addEventListener('click', () => {
    currentIndex += blogsPerPage;
    renderBlogs();
});

// Initial render
renderBlogs();