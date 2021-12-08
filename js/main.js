const  BUTTON_ASSISTIR_DO_BANNER = document.getElementById('Assistir-banner');
const  BUTTON_MAIS_INFORMAÇOES = document.getElementById('MaisInformacaos-banner');

BUTTON_MAIS_INFORMAÇOES.addEventListener( 'click', () => {

    const BACKGROUND_MODAL = document.getElementsByClassName('banner-modal-container')[0];
    const MODAL = document.getElementsByClassName('banner-modal-flex-itens')[0];
    BACKGROUND_MODAL.style.cssText = `
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width:100%;
        height: 100%;
        z-index: 1100;
        position: fixed;
        top: 0;
        background-color: var(--cor-fora-do-modal-banner);`;
    MODAL.style.cssText = `
        width: 800px;
        min-height: 100vh;

        background-color: var(--modal-banner
        );
        border-radius: 10px;
        z-index: 1100;`;

})