( (d) => {
    const sectionAbout = document.querySelector(".about-me")
    const sectionSkill = document.querySelector(".skills")

    const heightAbout = sectionAbout.getBoundingClientRect().top - 400
    const heightSkill = sectionSkill.getBoundingClientRect().top - 300

    const progressSkillAll = [...d.querySelectorAll(".progress-skill")].forEach((el, i) => el.style.transitionDelay = `${i * 0.2}s` )

    /* scroll bar animation */
    let progress = document.querySelector(".progressBar")
    let totalHeight = document.body.scrollHeight - innerHeight 

    addEventListener("scroll", () => {

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
    }) 
} )(document)