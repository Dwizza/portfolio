let feed = document.getElementById("feed");
let about = document.getElementById("about");
let content = document.getElementById("content");
let guestbook = document.getElementById("guestbook");

about.addEventListener("click", () => {
    about.setAttribute("class", "text-white border-b-4 border-[#186B46]")
    feed.removeAttribute("class")
    content.removeAttribute("class")    
    guestbook.removeAttribute("class")
});
feed.addEventListener("click", () => {
    feed.setAttribute("class", "text-white border-b-4 border-[#186B46]")
    about.removeAttribute("class")
    content.removeAttribute("class")    
    guestbook.removeAttribute("class")
});
content.addEventListener("click", () => {
    content.setAttribute("class", "text-white border-b-4 border-[#186B46]")
    feed.removeAttribute("class")
    about.removeAttribute("class")    
    guestbook.removeAttribute("class")
});
guestbook.addEventListener("click", () => {
    guestbook.setAttribute("class", "text-white border-b-4 border-[#186B46]")
    feed.removeAttribute("class")
    about.removeAttribute("class")    
    content.removeAttribute("class")
});