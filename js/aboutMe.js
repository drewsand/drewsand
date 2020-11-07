import { loadWorks, getData } from './myWorks.js'

( (d) => {

    const works = document.querySelector(".container-works")
    const heightWork = works.getBoundingClientRect().top - 1000
   
    const sectionAbout = document.querySelector(".about-me")
    const sectionSkill = document.querySelector(".skills") 

    const heightAbout = sectionAbout.getBoundingClientRect().top - 550
    const heightSkill = sectionSkill.getBoundingClientRect().top - 300
    const heightkillRocket = sectionSkill.getBoundingClientRect().top 
 

    const progressSkillAll = [...d.querySelectorAll(".progress-skill")].forEach((el, i) => el.style.transitionDelay = `${i * 0.2}s` )

    /* scroll bar animation */
    let progress = document.querySelector(".progressBar")
    let totalHeight = document.body.scrollHeight - innerHeight 

    const rocket = document.querySelector(".rocket")

    //VARIABLE QUE VALIDA LA PRIMER ENTRADA A LA SECTIONDE TRABAJOS
    let entrada = true

    addEventListener("scroll", async () => {

        let progressHeight = (pageYOffset / totalHeight) * 100  
        progress.style.height = `${progressHeight}%`


        if (scrollY >= heightAbout) {

            document.querySelector(".circle-1").classList.add("animateCircle-1")
            document.querySelector(".circle-2").classList.add("animateCircle-2")
            document.querySelector(".about-me_text").classList.add("animateText") 

        } 

        if (scrollY >= heightSkill) {
            
            d.querySelector(".skill-html").style.width = '70%'
            d.querySelector(".skill-css").style.width = '70%'
            d.querySelector(".skill-bootstrap").style.width = '70%'
            d.querySelector(".skill-materialize").style.width = '55%'
            d.querySelector(".skill-js").style.width = '65%'
            d.querySelector(".skill-react").style.width = '12%'
            d.querySelector(".skill-node").style.width = '8%'
            d.querySelector(".skill-php").style.width = '57%'
            d.querySelector(".skill-sql").style.width = '59%'
            d.querySelector(".skill-wp").style.width = '55%'

            
 
        } 

        //ADDED ANIMATION FOR ROTATE THE ROCKET
        if (scrollY >= heightkillRocket) {

            rocket.classList.remove("rocketUp")
            rocket.classList.add("rocketDown")

        }else {

            rocket.classList.remove("rocketDown")
            rocket.classList.add("rocketUp")
            
        } 


        
        //LAZY LOADING TO THE IMAGES 
        if (scrollY >= heightWork && entrada) {

            
            
            if (localStorage.getItem("works") == null) {

                const datos = await getData()
                localStorage.setItem("works", JSON.stringify(datos) )
             
                const loadImages = loadWorks(works, datos)

                console.log(localStorage.getItem("works"))
 
                
            }else{
                const datosLS = JSON.parse(localStorage.getItem("works"))
                
                const loadImages = loadWorks(works, datosLS)
                
            }
            


            entrada = false
        }

        //SVG
        if (scrollY > 50 && scrollY < 1000) {
            document.querySelector(".cajas img").style.width = `${scrollY + 200}px`


        }
 
 
    }) 

} )(document)