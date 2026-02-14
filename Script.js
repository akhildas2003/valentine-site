const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

/* YES CLICK */
yesBtn.onclick = () => {

    document.body.innerHTML = `
    <div class="lovePage">
        <h1 class="title">💖 YEAHHH!!! 💖</h1>
        <h2 class="name">Devutty said YES 😍</h2>
        <p class="msg">
            Happy Valentine’s Day 💕 <br>
            Love You Kunjvaavee💋
        </p>
    </div>

    <style>
    body{
        margin:0;
        font-family:Arial;
        overflow:hidden;
    }

    .lovePage{
        height:100vh;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        text-align:center;
        color:Brown;

        background:linear-gradient(270deg,#ff4d6d,#ff758c,#ff7eb3,#ffc2d1);
        background-size:600% 600%;
        animation:bg 8s infinite alternate;
    }

    @keyframes bg{
        0%{background-position:0%}
        100%{background-position:100%}
    }

    .title{
        font-size:50px;
        margin-bottom:10px;
        animation:pop 0.6s ease;
        text-shadow:0 0 20px white;
    }

    .name{
        font-size:40px;
        margin-bottom:10px;
        color:#fff;
        text-shadow:0 0 15px #fff;
    }

    .msg{
        font-size:35px;
        opacity:0.9;
    }

    @keyframes pop{
        0%{transform:scale(0);opacity:0}
        100%{transform:scale(1);opacity:1}
    }

    .heart{
        position:absolute;
        font-size:30px;
        animation:float 5s linear infinite;
    }

    @keyframes float{
        0%{transform:translateY(0);opacity:1}
        100%{transform:translateY(-800px);opacity:0}
    }
    </style>
    `;

    function openNext(){
    window.location.href = "gallery.html"; // change page name if needed
}



    /* floating hearts */
    function heart(){
        const h=document.createElement("div");
        h.classList.add("heart");
        h.innerHTML="💖💋";
        h.style.left=Math.random()*window.innerWidth+"px";
        h.style.bottom="0px";
        document.body.appendChild(h);
        setTimeout(()=>h.remove(),4000);
    }

    setInterval(heart,200);
};

function goNext(){
  window.location.href="Page.html";
}



/* NO BUTTON RUN AWAY */
noBtn.onmouseover = () => {
    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 60);

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

    noBtn.style.background =
      `hsl(${Math.random()*360},100%,60%)`;
};
