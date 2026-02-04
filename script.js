document.addEventListener("DOMContentLoaded", () => {
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const msg = document.getElementById("msg");
  const hearts = document.getElementById("hearts");

  // If something missing, show error
  if (!yesBtn || !noBtn || !msg || !hearts) {
    alert("index.html ထဲက id တွေမမှန်သေးဘူး 😅");
    return;
  }

  let yesScale = 1;

  function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "💖";

    heart.style.left = Math.random() * 100 + "vw";

    const size = Math.random() * 20 + 10;
    heart.style.fontSize = size + "px";

    hearts.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 4000);
  }

  setInterval(createHeart, 300);

  yesBtn.addEventListener("click", () => {
    msg.textContent = "Yayyy 💖 I knew it 😍";
    msg.style.color = "hotpink";
  });

  noBtn.addEventListener("click", () => {
    yesScale += 0.2;
    yesBtn.style.transform = `scale(${yesScale})`;

    msg.textContent = "No မပြောနဲ့ 😤 Yes ကိုပဲနှိပ် 😆";
    msg.style.color = "red";
  });
});