// Função para rolar até a seção "Sobre Mim" e atualizar o hash na URL
function showAboutMe() {
    // Rola a página até o elemento com id 'about-me'
    document.getElementById('about-me').scrollIntoView();
    // Atualiza o hash na URL para '#about-me'
    window.location.hash = '#about-me';
}

// Função para rolar até a seção "Meus Projetos" e atualizar o hash na URL
function showMyProjects() {
    // Rola a página até o elemento com id 'my-portfolio'
    document.getElementById('my-portfolio').scrollIntoView();
    // Atualiza o hash na URL para '#my-portfolio'
    window.location.hash = '#my-portfolio';
}

// Função para rolar até a seção "Experiências Profissionais" e atualizar o hash na URL
function showProfessionalExperiences() {
    // Rola a página até o elemento com id 'my-professional-experiences'
    document.getElementById('my-professional-experiences').scrollIntoView();
    // Atualiza o hash na URL para '#my-professional-experiences'
    window.location.hash = '#my-professional-experiences';
}

// Função para rolar até a seção "Experiências Acadêmicas" e atualizar o hash na URL
function showAcademicExperiences() {
    // Rola a página até o elemento com id 'my-academic-experiences'
    document.getElementById('my-academic-experiences').scrollIntoView();
    // Atualiza o hash na URL para '#my-academic-experiences'
    window.location.hash = '#my-academic-experiences';
}

// Função para rolar até a seção "Fale Comigo" e atualizar o hash na URL
function showTalkToMe() {
    // Rola a página até o elemento com id 'talk-to-me'
    document.getElementById('talk-to-me').scrollIntoView();
    // Atualiza o hash na URL para '#talk-to-me'
    window.location.hash = '#talk-to-me';
}

// Função para enviar o formulário de contato
function submitForm() {
    // Obtém o formulário com id 'talk-to-me-form'
    var form = document.getElementById('talk-to-me-form');

    // Exibe um alerta de agradecimento
    alert('Agradecido pelo contato! Retomarei contato o mais breve possível.');
    // Reseta o formulário, limpando todos os campos
    form.reset();
}
