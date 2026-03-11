// --- FUNÇÃO QUE ENVIA OS DADOS PARA A SUA API ---
function enviarDados(dados, btn, originalText, form, isModal = false) {
    fetch('https://api.zoopcompany.com.br/api/novo_lead_site', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'sucesso') {
            btn.innerHTML = 'Recebido!';
            btn.classList.remove('from-brand-purple', 'to-brand-pink'); // Cores ajustadas pro Tailwind do HTML
            btn.classList.add('bg-green-600');
            alert("Sucesso! Em breve entraremos em contato.");
            form.reset();
            
            setTimeout(() => {
                if (isModal) closeModal();
                btn.innerHTML = originalText;
                btn.disabled = false;
                btn.classList.remove('opacity-50', 'bg-green-600');
                btn.classList.add('from-brand-purple', 'to-brand-pink');
            }, 2000);
        } else {
            throw new Error(data.error || 'Erro 505');
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        alert("Erro ao enviar. Tente novamente.");
        btn.innerHTML = originalText;
        btn.disabled = false;
        btn.classList.remove('opacity-50');
    });
}

// --- CONFIGURAÇÃO DO FORMULÁRIO QUANDO A PÁGINA CARREGAR ---
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("lead-form");
    const submitBtn = document.getElementById("submit-btn");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault(); // Impede o site de piscar/recarregar

            // 1. Muda o estado do botão
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = "Enviando...";
            submitBtn.disabled = true;
            submitBtn.classList.add("opacity-50");

            // 2. Coleta os dados que o usuário digitou
            const formData = new FormData(form);
            const dadosDoLead = {
                nome: formData.get("nome"),
                email: formData.get("email"),
                telefone: formData.get("telefone"),
                empresa: formData.get("empresa"),
                segmento: formData.get("segmento"),
                faturamento: formData.get("faturamento"),
                origem: "Landing Page - Nicho Food" // Para você identificar na dashboard
            };

            // 3. Chama a função de disparo
            enviarDados(dadosDoLead, submitBtn, originalText, form, false);
        });
    }
});

// --- ANIMAÇÃO DAS LOGOS (Já existia no seu HTML, mantida por garantia) ---
function addAnimation() {
    const scrollers = document.querySelectorAll(".scroller");
    scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);
        const scrollerInner = scroller.querySelector(".scroller__inner");
        if(scrollerInner) {
            const scrollerContent = Array.from(scrollerInner.children);
            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                duplicatedItem.setAttribute("aria-hidden", true);
                scrollerInner.appendChild(duplicatedItem);
            });
        }
    });
}
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.addEventListener("DOMContentLoaded", addAnimation);
}
