const FLASH_FILME = document.getElementById('flash');

FLASH_FILME.addEventListener("mouseenter", () => {
    FLASH_FILME.style.cssText = `
    widht: 350px;
    height: 430px;
    padding: 5px;
    background: #FFF;
    max-widht: 500px;
    z-index: 1000;
    `
})
FLASH_FILME.addEventListener("mouseout", ()=>{
    FLASH_FILME.style.cssText = `
    background: #141414;
    height: 0px;
    z-index: none;
    
    `;
})


