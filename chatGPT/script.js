/* This runs after the page loads */
function applyStyles() {
  let userName = document.querySelector("nav > div.border-t.border-white\\/20.pt-2 > div > button > div:nth-child(2)");
  if (userName !== null){
    [...userName.classList].forEach((className) => {userName.classList.remove(className);});
    userName.classList.add("flex-1","text-ellipsis","max-h-5","overflow-hidden","break-all","relative","text-white");
  }
  const nav = document.querySelector("nav > div.flex-col.flex-1.transition-opacity.duration-500.overflow-y-auto")
  if (nav) nav.classList.remove("-mr-2")

  const newChatText = document.querySelector("nav > a");
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
  const sideButtons = document.querySelectorAll('div.absolute.flex.right-1.z-10.text-gray-300.visible');
  if (sideButtons){
    [...sideButtons].forEach((button) => button.classList.remove("absolute"))
    }
  const tags = document.querySelectorAll("nav > div.flex-col.flex-1.transition-opacity.duration-500.overflow-y-auto > div > div > span > div > div > div")
  if (tags){
    [...tags].forEach((tag)=> tag.classList.add("whitespace-nowrap"))
  }
  const labels = document.querySelectorAll("nav > div.flex-col.flex-1.transition-opacity.duration-500.overflow-y-auto > div > div > span > div > ol > li > a")
  if (labels){
    [...labels].forEach((label) => label.classList.remove("pr-14"))
  }
  const icons = document.querySelectorAll("svg.h-4.w-4")
  if (icons){
  icons.forEach((node)=> node.classList.add("flex-shrink-0"))
  }
}
const observer = new MutationObserver(applyStyles);
observer.observe(document.body, {childList: true, subtree: true});
applyStyles();
