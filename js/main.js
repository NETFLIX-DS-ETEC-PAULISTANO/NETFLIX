const  BUTTON_ASSISTIR_DO_BANNER = document.getElementById('Assistir-banner');
const  BUTTON_MAIS_INFORMAÇOES = document.getElementById('MaisInformacaos-banner');
const ICON_DE_FECHAR_DO_MODAl_BANNER = document.getElementById('exit');
const ITENS_DO_CARROSSEL = document.getElementsByClassName('item');

BUTTON_MAIS_INFORMAÇOES.addEventListener( 'click', () => {

    const BACKGROUND_MODAL = document.getElementsByClassName('banner-modal-container')[0];
    const MODAL = document.getElementsByClassName('banner-modal-flex-itens')[0];
    const BODY_SEGUNDARIA = document.getElementById('body-segundaria');
    BACKGROUND_MODAL.style.cssText = `
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width:100%;
        z-index: 2000;
        position:absolute;
        top: 0;
        background-color: var(--cor-fora-do-modal-banner);
        boder-radius: 40px;
        heght: 1700px;

     
        `;
    MODAL.style.cssText = `
        width: 800px;
        height: 100%;
        background-color: var(--modal-banner
        );
        border-radius: 10px;
        z-index: 1100;
        overflow-y: auto;
            
        `;

    
})

ICON_DE_FECHAR_DO_MODAl_BANNER.addEventListener('click', () =>{
    const BACKGROUND_MODAL = document.getElementsByClassName('banner-modal-container')[0];
    BACKGROUND_MODAL.style.cssText = `
        display: none;
    `
} )

