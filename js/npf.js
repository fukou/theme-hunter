const data_post = document.querySelectorAll(".article-container  article");
data_post.forEach(function(item, idx) {
    const isPost = item.querySelector(".posts__body .reblog-list > div");

    if(isPost.hasChildNodes()) {
        return;
    } else {
        item.querySelector(".posts__body").remove();
    }
});