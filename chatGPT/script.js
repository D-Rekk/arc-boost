/* This runs after the page loads */
function applyStyles() {
  let userName = document.querySelector("#__next > div > div.dark.hidden.flex-shrink-0.bg-gray-900.md\\:flex.md\\:w-\\[260px\\].md\\:flex-col > div > div > nav > div.border-t.border-white\\/20.pt-2 > div > button > div:nth-child(2)");
  if (userName !== null){
    [...userName.classList].forEach((className) => {userName.classList.remove(className);});
    userName.classList.add("flex-1","text-ellipsis","max-h-5","overflow-hidden","break-all","relative","text-white");
  }

  const newChatText = document.querySelector("#__next > div.overflow-hidden.w-full.h-full.relative.flex > div.dark.hidden.flex-shrink-0.bg-gray-900.md\\:flex.md\\:w-\\[260px\\].md\\:flex-col > div > div > nav > a");
  if (newChatText) {
    for (let i = 0; i < newChatText.childNodes.length; i++) {
      const childNode = newChatText.childNodes[i];
      if (childNode.nodeType === Node.TEXT_NODE) {
        const newDiv = document.createElement("div");
        for (const tag of [..."flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative text-white".split(" "),]) {
          newDiv.classList.add(tag);
        }
        newDiv.innerText = childNode.textContent;
        newChatText.replaceChild(newDiv, childNode);
        newChatText.appendChild(newDiv);
      }
    }
  }
}

const observer = new MutationObserver(applyStyles);
observer.observe(document.body, {childList: true, subtree: true});
applyStyles();
