const recents = (data) => {
    const blog_container = document.querySelector(".recent-updates");

    let truncate = (element, limit, after) => {
        if (!element || !limit) return;
    
        let content = element.innerHTML.trim();
    
        content = content.split(" ").slice(0, limit);
        content = content.join(" ") + (after ? after : "");
    
        element.innerHTML = content;
    };

    for(let j = 0; j < 3; j++) {
        const blog = data.posts[j];
        const blog_title = blog["regular-title"];
        const blog_body = blog["regular-body"];
        const blog_slug = blog["slug"];
        const blog_date = blog["date"];
        const blog_url = blog["url"];

        const blog_items = document.createElement("div");
        blog_items.innerHTML = `
        <a class="flex flex-col p-8 border-t border-gray hover:bg-blueGray-300 recents" href="${blog_url}">
            <div class="text-xl mr-5">
                <div class="font-bold">${blog_date.substring(0, 12)}</div>
            </div>
            <div>
                <h2 class="text-lg font-bold mb-2">${blog_title ? blog_title : blog_slug}</h2>
                <div class="flex-grow is-truncated">
                    ${blog_body}
                </div>
            </div>
        </a>
        `;

        truncate(blog_items.querySelector('.is-truncated'), 15, '...');
        blog_container.appendChild(blog_items);
    }
}