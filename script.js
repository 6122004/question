
  function nextPage(current, next) {
    document.getElementById('page' + current).classList.remove('active');
    document.getElementById('page' + next).classList.add('active');
    window.scrollTo(0, 0);
  }

  function respond(answer) {
    const response = document.getElementById('response1');
    if (answer === 'yes') {
      response.textContent = "Aww 🥰 That makes my heart so happy! 💖";
      releaseHearts();
      setTimeout(() => {
        nextPage(1, 2);
      }, 2000);
    } else {
      response.textContent = "It's okay... I still care about you deeply 💔";
    }
  }

  function updateLoveValue(value) {
    document.getElementById('loveValue').textContent = value + "%";
  }

  function showFinalMessage() {
    const value = parseInt(document.getElementById('loveSlider').value);
    const finalMessage = document.getElementById('finalMessage');
    const thankYou = document.getElementById('thankYouMessage');
    const loveNote = document.getElementById('loveNote');

    let message = "";

    if (value >= 90) {
      message = "I love you more than words 🥺🥺 You're my heart, my soul, my everything 💘😭";
      releaseHearts();
    } else if (value >= 70) {
      message = "You mean the world to me! I feel so lucky to have your love 💞✨";
      releaseHearts();
    } else if (value >= 40) {
      message = "shyd aapne kuch glti kri h ek baaar check krlo";
    } else {
      message = "🥺😭😭🥲🥲🙂";
    }

    finalMessage.textContent = message;
    thankYou.textContent = "Thank you for loving me. You have no idea how much i loveee  💌";
    loveNote.textContent = `Ashi, pata hai maine ye sab kyun pucha... aur woh bhi is tarah?
Kyunki aaj kuch aisa mehsoos hua... kuch aisa jo mere dil ko tod gaya.🙂
Jab tune kaha ki "agar jaana hai toh jaa, main kuch nahi bolungi... na rokungi"...🙂
Uss waqt meri saanson ka bharosa chhoot gaya tha.😭

Main gusse mein nahi gaya tha, Ashi...
Main roota hua gaya tha...😭
Dil toot kar reh gaya tha us pal.😭😭

Itna zyada hurt hua tha na... itna ki lafzon mein bayan nahi kar sakta.
Tabhi laga ki puchhna chahiye... ek baar, bas ek baar tere dil ka sach janna chahiye.
Kya tu mujhe waqayi pyaar karti hai... ya sirf main hi tha is sab mein? 💔🙂`;

    nextPage(2, 3);
  }

  function releaseHearts() {
    const heartsContainer = document.getElementById("hearts");
    for (let i = 0; i < 20; i++) {
      const heart = document.createElement("div");
      heart.classList.add("heart");
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.top = Math.random() * 100 + "vh";
      heart.style.animationDuration = (2 + Math.random() * 3) + "s";
      heartsContainer.appendChild(heart);
      setTimeout(() => heart.remove(), 5000);
    }
  }
