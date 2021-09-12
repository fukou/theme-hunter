const article = document.querySelectorAll(".article > .article-container");

article.forEach(function(post, idx) {
    const avatar = post.querySelector(".sticky img");
    const profile = post.querySelector(".article-profile");

    avatar.addEventListener("mouseenter", function(e) {
        profile.style.opacity = 1;
        profile.style.visibility = "visible"; 
    });

    avatar.addEventListener("mouseleave", function(e) {
        profile.style.opacity = 0;
        profile.style.visibility = "hidden"; 
    });
});