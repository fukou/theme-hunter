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

for (let k = 0; k < postLength; k++) {
   const post = tumblr_api_read.posts[k];

   const caption = post["photo-caption"];
   const body = post["regular-body"];
   const date = post["date"];

   const img = post["photo-url-1280"];

   const question = post["question"];
   const quote = post["quote-text"];
   const quote_source = post["quote-source"];

   const chat = post["conversation-text"];
   const album = post["id3-album"];
   const artist = post["id3-artist"];
   const title_album = post["id3-title"];

   const url = post["url"];
   const type = post["type"];

   const card = document.createElement("div");
   card.className = "card";

   if (type === "photo") {
      card.innerHTML = `
            <div class="flex flex-col rounded-lg overflow-hidden bg-white">
            <div class="relative w-full h-0 pb-96">
              <img class="absolute inset-0 w-full h-full object-cover" src="${img}" alt="">
            </div>
            <div class="flex-auto flex flex-col">
                <div class="p-8 flex-grow">
                  <h2 class="text-2xl font-bold mb-2">Heading title</h2>
                  <ul class="flex my-6 text-white">
                    <li class="mr-3">
                      <a href="#" class="text-sm bg-blue-lighter rounded-full p-2 px-4">grid</a>
                    </li>
                    <li class="mr-3">
                      <a href="#" class="text-sm bg-blue-lighter rounded-full p-2 px-4">featured</a>
                    </li>
                  </ul>
              </div>
              <a href="${url}" class="p-4 border-t-2 border-gray-light text-center hover:bg-gray-light transition duration-150 ease-in-out focus:outline-none focus:ring focus:border-blue-300">View post</a>
            </div>
          </div>
              `;
      truncate(card.querySelector(".caption"), 35, "...");
   }
   container.appendChild(card);
}
