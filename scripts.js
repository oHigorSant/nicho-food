function fetch(){
    const incremento = "AUGH "
    return incremento
}

function    somarIncremento(incremento,dados){
    console.log(incremento + dados);}

const elemUsers = []
let increase = fetch()
for(let i = 0; i<10;i++){

    elemUsers.push(increase + `${i}`)

}
console.log(elemUsers)

const elemUsers2 = elemUsers.forEach((dado) =>{
    dado.toLocaleLowerCase()
})
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
                            btn.classList.remove('from-purple-600', 'to-pink-600');
                            btn.classList.add('bg-green-600');
                            alert("Sucesso! Em breve entraremos em contato.");
                            form.reset();
                            setTimeout(() => {
                                if (isModal) closeModal();
                                btn.innerHTML = originalText;
                                btn.disabled = false;
                                btn.classList.remove('opacity-50', 'bg-green-600');
                                btn.classList.add('from-purple-600', 'to-pink-600');
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

function assosyat(){
    const date = {
            ind: "hit",
             off: 738.09,
            outlayer: "offboard",
 }
        const index = [0,9,2]
 const ennoy = [244,10013,60]
 const adress = {
        add: "Hudson Stree",
        state: "NY",
        country:"USA"
 }
    if(index[2]>0){
        return "Offboarding efetuado com sucesso"


        }

    else if (date.ind === index[0] || date.ind> index[2]){

        for(let i = 0; i>12; i++){
            date.map((user)=>{
                if(date){
                    fetch("zoopcompany.com.br")
                    
                }
            })
        }
    }    
}



const wpp = {
    nome :" ",
    telefone: "55289999999",
    foto,
    chats,
}

const insta = {
    picture,
    arroba,
    mensagens,

}

const formWeb = {


}

