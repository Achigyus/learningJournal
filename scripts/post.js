import { blogs } from './data.js';

function getBlogIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

function renderPost() {
    const postSection = document.getElementById('post_section');
    const blogId = getBlogIdFromUrl();
    const blog = blogs.find(b => String(b.id) === String(blogId));

    if (!blog) {
        postSection.innerHTML = '<p>Blog post not found.</p>';
        return;
    }

    postSection.innerHTML = `
        <div class="blog_post">
            <div class="blog_img_cont">
                <img src="images/${blog.image}" alt="#" class="blog_img">
            </div>
            <p class="blog_date">${blog.date}</p>
            <h2 class="blog_title">${blog.title}</h2>
            <p class="blog_desc">${blog.content}</p>
        </div>

        <div class="about_me_btm">
            <p class="how_i_got_here">
                <span>How I stay committed to learning</span> <br><br>

                I like to think of myself as a lifelong learner. I used to spend hours and hours learning, then try
                to create simple projects using what I learned or work new techniques into existing projects. <br>

                While that was fun, I felt like it would be helpful to share what I was learning and most things
                about my journey with the world. <br> <br>

                <span>How I got started</span> <br> <br>

                I started simple and gradually grew my learning journal site. I would take notes about what I was
                learning. After each learning session, I'd use my notes to not only reflect on what I learned but
                also write short summaries of what I learned using my own words. <br> <br>

                That helped me grow what I was learning, and I realized that posting my learning summaries was also
                helping others learn and stay motivated. <br> <br>
            </p>
        </div>
    `;
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

function renderRecentPosts() {
    const recentPostsCont = document.getElementById('recent_posts_cont');
    if (recentPostsCont) {
        const recentBlogs = blogs.slice(0, 3);
        const recentBlogsHTML = generateBlogHTML(recentBlogs);
        recentPostsCont.innerHTML = recentBlogsHTML;
    }
}

renderPost();
renderRecentPosts();