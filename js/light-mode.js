( (d) => {

    const pathWave = document.getElementById("pathWave")

 
    d.querySelector("#lightMode").addEventListener("click", (e)=>{

        e.preventDefault()
        document.body.classList.toggle("light-mode")
        
        if (document.body.classList.contains("light-mode")) {
            
            pathWave.setAttribute("fill", 'white')
 
 
        }else{
            
            
            pathWave.setAttribute("fill", '#010615')
 
        }
    })
})(document)