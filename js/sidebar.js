(()=>{
    const btnBurger = document.querySelector(".menu-burger")

    btnBurger.addEventListener("click", ()=>{
        
        document.querySelector(".navegacion").classList.add("navegacion-open")
    
        document.querySelector(".cerrar-navegacion").addEventListener("click", ()=>{
            document.querySelector(".navegacion").classList.remove("navegacion-open")
        })
        
    })
})()

