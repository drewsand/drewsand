(()=>{
    const links = document.querySelectorAll("header .navegacion a");

    const clickHandler = (e) => {
        e.preventDefault()
        const href = e.target.getAttribute("href")
        const offsetTop = document.querySelector(href).offsetTop

        scroll({
            top : offsetTop,
            behavior : "smooth"
        })
    }

    links.forEach(el=>{
        el.addEventListener("click", clickHandler)
    }) 
})()