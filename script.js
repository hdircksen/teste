function showInfo(photoId) {
    let message = '';

    switch(photoId) {
        case 1:
            message = 'Informações extras da Foto 1: Pôr do sol nas montanhas douradas. Um cenário deslumbrante.';
            break;
        case 2:
            message = 'Informações extras da Foto 2: Cidade vibrante iluminada à noite. As luzes destacam a arquitetura moderna.';
            break;
        case 3:
            message = 'Informações extras da Foto 3: Retrato expressivo capturado com detalhes em preto e branco, mostrando emoções.';
            break;
        case 4:
            message = 'Informações extras da Foto 4: Praia tranquila ao amanhecer, onde as ondas e o céu se misturam num cenário sereno.';
            break;
        case 5:
            message = 'Informações extras da Foto 5: Floresta envolta em névoa, oferecendo uma visão misteriosa e bela.';
            break;
        case 6:
            message = 'Informações extras da Foto 6: Arquitetura histórica ao pôr do sol, com cores vibrantes que destacam a estrutura.';
            break;
        default:
            message = 'Informação não disponível.';
    }

    alert(message);
}
function showSection(section) {
    const sections = document.querySelectorAll('#content > section');
    sections.forEach(s => {
        s.style.display = 'none';
    });
    document.getElementById(section).style.display = 'block';
}
