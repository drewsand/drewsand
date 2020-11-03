addEventListener("load", ()=>{ 

    document.querySelector(".preloader").classList.add("hidePreolader")

    setTimeout(() => {
       document.querySelector(".preloader").remove()
    }, 2000);
})