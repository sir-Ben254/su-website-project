document.addEventListener("mousemove",(e)=>{
    const flower = document.createElement("div");
    flower.className = "trail";
    flower.style.left = e.pageX + "px";
    flower.style.top = e.pageY + "px";
    flower.innerHTML = '<img src="images/ben1.jpg"width="25">';

    document.body.appendChild(flower);
    setTimeout(() => flower.remove(),1000);
});

window.addEventListener('scroll',() => {
    if (window.innerHeight + window.scrollY>=document.body.offsetHeight){
        const ripple = document.createElement("div");
        ripple.className = "ripple";
        ripple.style.left = window.innerWidth /2 + "px";
        ripple.style.top = window.innerHeight -50 + "px";
        document.body.appendChild(ripple);
        setTimeout(() => ripple.remove(),1000);
    }
});

