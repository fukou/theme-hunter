// truncate script
let truncate = (element, limit, after) => {
   if (!element || !limit) return;

   let content = element.innerHTML.trim();

   content = content.split(" ").slice(0, limit);
   content = content.join(" ") + (after ? after : "");

   element.innerHTML = content;
};

const container = document.querySelector(".monthly_picks");
const postLength = tumblr_api_read["posts-total"];

// console.log(container.innerHTML.trim() !== '');

for (let k = 0; k < 1; k++) {
   const post = tumblr_api_read.posts[k];

  //  const caption = post["photo-caption"];
  //  const body = post["regular-body"];
   const date = post["date"];
   const maker = post["reblogged-from-name"];
   const orig = post["reblogged-from-url"];
   const orig_img = post["reblogged_from_avatar_url_96"];
   const notes = post["note-count"];
   const img = post["photo-url-1280"];

   const url = post["url"];
   const type = post["type"];
   const tags = post["tags"];
   const tags_data = tags.slice(1).map(function (item) {
    return `<li class="mb-5 mr-2"> <a href="/tagged/${item}" class="text-sm bg-blue-lighter rounded-full p-2 px-4">${item}</a></li>`;
  }).join('');

   const card = document.createElement("div");
   card.className = "card";

   if (type === "photo") {
      card.innerHTML = `
              <a href="${url}" class="block">
                <div class="relative aspect-w-16 aspect-h-9">
                  <img src="${img}" alt="">
                </div>
              </a>
              <div class="flex-auto flex flex-col">
                  <div class="p-8 flex-grow">
                    <h2 class="text-xl font-bold mb-2"><a href="${orig}" class="flex items-center"><img src="${orig_img}" class="w-9 h-9 mr-3 rounded-full" alt="${maker}"> Theme by ${maker}</a></h2>
                    <ul class="flex flex-wrap mt-6 mb-2 text-white">
                    ${tags_data}
                    </ul>
                    <p>Posted on ${date.substring(0, 16)} with ${notes} notes</p>
                </div>
                <a href="${url}" class="p-4 border-t-2 border-gray-light text-center hover:bg-gray-light transition duration-150 ease-in-out focus:outline-none focus:ring focus:border-blue-300">View post</a>
              </div>
            
              `;
      // truncate(card.querySelector(".caption"), 35, "...");
   }
   container.appendChild(card);
}
