//criando os objetos dos elementos de texto do form

var nome = document.querySelector("#inputName");
var nomeHelp = document.querySelector("#inputNameHelp");
var ano = document.querySelector("#inputYear");
var anoHelp = document.querySelector("#inputYearHelp");
var email = document.querySelector("#inputEmail");
var emailHelp = document.querySelector("#inputEmailHelp");
var senha = document.querySelector("#inputPassword");
var senhaHelp = document.querySelector("#inputPasswordHelp");
var meter = document.querySelector("#passStrengthMeter");

nome.addEventListener('focusout', () => {
    //declaração da expressão regular para definir o formato de um nome válido
    const regexNome = /^[A-Z][a-z]+ [A-Z][a-z]+$/;
    //tirar (trim) espaços em branco antes e depois da string
    const nomeTrimado = nome.value.trim();

    if(nomeTrimado.match(regexNome)==null || nomeTrimado.length < 7){
        //muda o conteúdo e o estilo do objeto nomeHelp que referencia o elemento html com id=inputNameHelp
        nomeHelp.textContent = "Formato de nome inválido"; 
        nomeHelp.style.color="red";
    }
    else{
        nomeHelp.textContent = "";
    }       
}
);

/*declarando o evento listener para o campos de texto do form. 
Uma vez o foco seja mudado, será chamada a função validarNome*/

//declaração de função de forma anônima usando uma expressão de função de seta =>

ano.addEventListener('focusout', () => {
    //declaração da expressão regular para definir o formato de um ano válido
    const regexAno = /^[0-9]{4}$/;
    //tirar (trim) espaços em branco antes e depois da string
    const anoTrimado = ano.value.trim();
    console.log(ano.value);

    if(anoTrimado.match(regexAno)==null){
        //muda o conteúdo e o estilo do objeto anoHelp que referencia o elemento html com id=inputYearHelp
        anoHelp.textContent = "Formato de ano inválido";
        anoHelp.style.color="red";
    }
    else{
        //objeto Date
        var date = new Date();
        //obtem o ano atual
        console.log(date.getFullYear()); 
        
        if( parseInt(anoTrimado) > parseInt(date.getFullYear()-2) ){
             //muda o conteúdo e o estilo do objeto nomeHelp que referencia o elemento html com id=inputYearHelp
            anoHelp.textContent = `Ano inválido. O ano não pode ser maior que ${date.getFullYear()-2}.`;
            anoHelp.style.color="red";
        }
        else if( parseInt(anoTrimado) < parseInt(date.getFullYear())-124 ){
             //muda o conteúdo e o estilo do objeto nomeHelp que referencia o elemento html com id=inputYearHelp
            anoHelp.textContent = `Ano inválido. O ano não pode ser menor que ${date.getFullYear()-124}.`;
            anoHelp.style.color="red";
        }
        else{
            anoHelp.textContent="";
        }        
        
    }
}
);

email.addEventListener('focusout', () => {
    //declaração da expressão regular para definir o formato de um email válido
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(br|com|net|org)$/;

    //tirar (trim) espaços em branco antes e depois da string
    const emailTrimado = email.value.trim();
    console.log(email.value);

    if(emailTrimado.match(regexEmail)==null){
        //muda o conteúdo e o estilo do objeto emailHelp que referencia o elemento html com id=inputEmailHelp
        emailHelp.textContent = "Formato de email inválido";
        emailHelp.style.color="red";
    }
    else{

        emailHelp.textContent="";        
        
    }
}
);

senha.addEventListener('focusout', () => {

    console.log(senha.value);

    //expressão regular para caracteres especiais
    const regexCharEsp = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/g;

    //expressão regular para letras maiúsculas
    const regexMai = /[A-Z]/g;

    //expressão regular para letras minúsculas
    const regexMin = /[a-z]/g;

    //expressão regular para números
    const regexNum = /[0-9]/g;

    //verifica se a senha tem o compriimento adequado
    if(senha.value.length < 6 || senha.value.length > 20) {
        //muda o conteúdo e o estilo do objeto senhaHelp que referencia o elemento html com id=inputPasswordHelp
        //senhaHelp.textContent = "A senha deve ter entre 6 e 20 caracteres";
        senhaHelp.textContent = "Senha inválida";
        senhaHelp.style.color="red";
        meter.value = 0;
    }else if(senha.value.match(regexCharEsp)==null){//testa se a senha contém ao menos um caractere especial
        //muda o conteúdo e o estilo do objeto senhaHelp que referencia o elemento html com id=inputPasswordHelp
        //senhaHelp.textContent = "A senha deve conter no mínimo um caractere especial";
        senhaHelp.textContent = "Senha inválida";
        senhaHelp.style.color="red";
        meter.value = 0;
    }else if(senha.value.match(regexMai)==null){//testa se a senha contém ao menos uma letra maiúscula
        //muda o conteúdo e o estilo do objeto senhaHelp que referencia o elemento html com id=inputPasswordHelp
        //senhaHelp.textContent = "A senha deve conter no mínimo uma letra maiúscula";
        senhaHelp.textContent = "Senha inválida";
        senhaHelp.style.color="red";
        meter.value = 0;
    }else if(senha.value.match(regexMin)==null){//testa se a senha contém ao menos uma letra minúscula
        //muda o conteúdo e o estilo do objeto senhaHelp que referencia o elemento html com id=inputPasswordHelp
        //senhaHelp.textContent = "A senha deve conter no mínimo uma letra minúscula";
        senhaHelp.textContent = "Senha inválida";
        senhaHelp.style.color="red";
        meter.value = 0;
    }else if(senha.value.match(regexNum)==null){//testa se a senha contém ao menos um número
        //muda o conteúdo e o estilo do objeto senhaHelp que referencia o elemento html com id=inputPasswordHelp
        //senhaHelp.textContent = "A senha deve conter no mínimo um número";
        senhaHelp.textContent = "Senha inválida";
        senhaHelp.style.color="red";
        meter.value = 0;
    }else if(senha.value.includes(ano.value.trim())) {//verifica se a senha contém o ano de nascimento

        //muda o conteúdo e o estilo do objeto senhaHelp que referencia o elemento html com id=inputPasswordHelp
        //senhaHelp.textContent = "A senha não deve conter o seu ano de nascimento";
        senhaHelp.textContent = "Senha inválida";
        senhaHelp.style.color="red";
        meter.value = 0;
    }else{
        //separa o nome e sobrenome em um vetor
        const nomes = nome.value.split(' ');
        console.log(nomes);

        //Percorre o vetor verificando se cada um dos elementos está contido na senha
        for(const nome of nomes) {

            //converte as duas strings para lower case pois a função "includes" é case sensitive
            const nomeLowerCase = nome.toLowerCase();
            const senhaLowerCase = senha.value.toLowerCase();

            //verifica se a senha inclui o elemento do vetor "nomes"
            if(senhaLowerCase.includes(nomeLowerCase)) {
                //muda o conteúdo e o estilo do objeto senhaHelp que referencia o elemento html com id=inputPasswordHelp
                //senhaHelp.textContent = "A senha não deve conter o seu nome ou sobrenome";
                senhaHelp.textContent = "Senha inválida";
                senhaHelp.style.color="red";
                meter.value = 0;
            }

        }

        //verifica se a senha cumpre os requisitos para ser uma senha forte, isto é:
        //possuir mais de 12 caracteres
        //possuir mais de 1 caractere especial
        //possuir mais de 1 letra maiúscula
        //possuir mais de 1 número
        if(senha.value.length > 12 
            && (senha.value.match(regexCharEsp || []).length > 1)
            && (senha.value.match(regexMai || []).length > 1)
            && (senha.value.match(regexNum || []).length > 1)) {

                //muda o conteúdo e o estilo do objeto senhaHelp que referencia o elemento html com id=inputPasswordHelp
                senhaHelp.textContent = "Senha forte";
                senhaHelp.style.color="green";
                meter.value = 30;
                meter.style.color = "green";

        //verifica se a senha cumpre os requisitos para ser uma senha moderada, isto é:
        //possuir mais de 8 caracteres
        //possuir pelo menos 1 caractere especial
        //possuir pelo menos 1 letra maiúscula
        //possuir pelo menos 1 número
        }else if(senha.value.length > 8 
            && (senha.value.match(regexCharEsp || []).length >= 1)
            && (senha.value.match(regexMai || []).length >= 1)
            && (senha.value.match(regexNum || []).length >= 1)) {

                //muda o conteúdo e o estilo do objeto senhaHelp que referencia o elemento html com id=inputPasswordHelp
                senhaHelp.textContent = "Senha moderada";
                senhaHelp.style.color="yellow";
                meter.value = 20;
                meter.style.color = "yellow";
            
        //se a senha não cumpre os requisitos para ser Forte nem moderada, automaticamente, só resta a opção de ela ser fraca
        }else {
            //muda o conteúdo e o estilo do objeto senhaHelp que referencia o elemento html com id=inputPasswordHelp
            senhaHelp.textContent = "Senha fraca";
            senhaHelp.style.color="red";
            meter.value = 10;
            meter.style.color = "red";
        }
    }

}
);
