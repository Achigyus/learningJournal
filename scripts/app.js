import { blogs } from './data.js';


const mainWrap = document.getElementById('main_wrap');
const blogsWrap = document.getElementById('blogs_wrap');
const viewMoreBtn = document.getElementById('view_more');
const recentPostsCont = document.getElementById('recent_posts_cont');

let currentIndex = 0;
const blogsPerPage = 6;

function renderBlogs() {
    let blogsHTML = '';
    // Exclude 'hero' blog from the rendered list
    const filteredBlogs = blogs.filter(blog => blog.id !== 'hero');
    const blogsToShow = filteredBlogs.slice(0, currentIndex + blogsPerPage);
    if (blogsWrap) {
        blogsHTML = generateBlogHTML(blogsToShow);
        blogsWrap.innerHTML = blogsHTML;

        if (blogsToShow.length >= filteredBlogs.length) {
            viewMoreBtn.style.display = 'none';
        } else {
            viewMoreBtn.style.display = 'block';
        }
    }

    if (recentPostsCont) {
        const recentBlogs = filteredBlogs.slice(0, 3);
        const recentBlogsHTML = generateBlogHTML(recentBlogs);
        recentPostsCont.innerHTML = recentBlogsHTML;
    }


    // Hide button if all blogs are rendered
}

function generateBlogHTML(blogArray) {
    return blogArray.map(blog => {
        return `
            <a href="post.html?id=${blog.id}" class="blog_card_link">
                <div class="blog_card" data-id="${blog.id}">
                    <div class="blog_img_cont">
                        <img src="images/${blog.image}" alt="#" class="blog_img">
                    </div>
                    <p class="blog_date">${blog.date}</p>
                    <h3 class="blog_title">${blog.title}</h3>
                    <p class="blog_desc">${blog.content}</p>
                </div>
            </a>
        `
    }).join('');
}

viewMoreBtn?.addEventListener('click', () => {
    currentIndex += blogsPerPage;
    renderBlogs();
});

// document.querySelector('.hero_section')?.addEventListener('click', () => {
//     window.location.href = 'post.html?id=hero';
// });

// Initial render
renderBlogs();