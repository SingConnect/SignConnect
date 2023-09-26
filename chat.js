let text = document.querySelector(".textbox");
let chat = document.querySelector(".chat-display");
let send_button = document.querySelector(".send-button");
let replies =
    "Libras - Tradução";

let ScrollToBottomButton = document.querySelector(".circle");
console.log(ScrollToBottomButton);
function send_text() {
    if (text.value.trim() !== "") {
        // chat.innerHTML = `<div class="reply"> <p>${replies}</p> </div> <div class="sent"> <p>${text.value.trim()}</p> </div>` + chat.innerHTML;
        let send_div = document.createElement("div");
        let textnode = document.createElement("P");
        textnode.innerText = text.value.trim();
        send_div.className = "sent";
        send_div.appendChild(textnode);
        chat.prepend(send_div);
        let reply_div = document.createElement("div");
        reply_div.className = "reply";
        textnode = document.createElement("P");
        textnode.innerText = replies;
        reply_div.appendChild(textnode);
        chat.prepend(reply_div);
    }
    text.value = "";
}

send_button.addEventListener("click", send_text);

text.addEventListener("keyup", function (e) {
    if (e.key === "Enter" && !e.shiftKey) {
        send_text();
    }
});
ScrollToBottomButton.addEventListener("click", function () {
    chat.scrollTop = chat.scrollHeight - chat.clientHeight;
    ScrollToBottomButton.style.visibility = "hidden";
});

chat.addEventListener("scroll", function () {
    if (chat.scrollTop <= -200) ScrollToBottomButton.style.visibility = "visible";
    else ScrollToBottomButton.style.visibility = "hidden";
});
