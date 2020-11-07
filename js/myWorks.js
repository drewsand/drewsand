export const getData = async (  ) => {
    const request = await fetch("./js/works.json")
    const data = await request.json()
    return data
}

export const loadWorks =  (container, datos) => {
   
    let html = ''
 

    datos.forEach(work => {
        html += `

        <div class="works">
            <div class="img-works">
                <img src="${work.img}" alt="" class="responsive-img imgWorks">
            </div>

            <div class="content-work">
                <h5>${work.languages}</h5>
                <a href="${work.link}" target="_blank">${work.name}</a>
                
            </div>
        </div>
            
        `
    });

    container.innerHTML = html
    return datos

}

( async () => {

    const works = document.querySelector(".container-works")

    works.addEventListener("click", (e) => {
        
        const element = e.target
        
        if (e.target.classList.contains("imgWorks")) {
            const srcImg = element.src 
            const contentWork = element.parentElement.nextElementSibling

            const languages = contentWork.querySelector("h5").textContent
            const title = contentWork.querySelector("a").textContent 
            const srcLink = contentWork.querySelector("a").href
            Swal.fire({
                title: `${languages}`,
                text: `${title}`,
                imageUrl: `${srcImg}`,
                footer: `<a href="${srcLink}" target="_blank">Live Demo</a>`,
                showConfirmButton: false
              })
              
        }
    }) 
})()