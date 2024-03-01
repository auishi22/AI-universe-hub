const loadHandler = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/ai/tools");
  const data = await res.json();
  const contentData = data.data.tools;
  //   console.log(contentData);
  displayContent(contentData);
};

// display content
const displayContent = (contents) => {
  const contentContainer = document.getElementById("content-container");
  contents.forEach((content) => {
    console.log(content);
    const contentCard = document.createElement("div");
    contentCard.classList = "card w-96 bg-base-100 shadow-xl border-2";
    contentCard.innerHTML = `

        <figure class="p-4">
            <img src="${content.image}" alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body space-y-3">
            <div class="space-y-3">
                 <h2 class="card-title text-2xl font-bold ">Features</h2>
                <ol class="text-[#585858] list-decimal ml-4">
                    <li>${content.features[0]}</li>
                    <li>${content.features[1]}</li>
                    <li>${content.features[2]}</li>
                </ol>
            </div>
            <hr>
            <div class="flex">
                            <div class="flex-1 space-y-5">
                                <h2 class="card-title text-2xl font-bold">${content.name}</h2>
                                <p class="text-[#585858]"><i class="fa-solid fa-calendar-days mr-3"></i>${content.published_in}</p>
                            </div>
                            <div class="pt-6 pr-2">
                                <i class="fa-solid fa-circle-arrow-right text-4xl text-[#ffe3e3]"></i>
                            </div>
                        </div>
        </div>

    `;
    contentContainer.appendChild(contentCard);
  });
};

loadHandler();
