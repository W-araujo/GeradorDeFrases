let frases = [
    ' “Os problemas são oportunidades para se mostrar o que sabe.” (Duke Ellington)',
    ' “Nossos fracassos, às vezes, são mais frutíferos do que os êxitos.” (Henry Ford)',
    ' “Tente de novo. Fracasse de novo. Mas fracasse melhor”. (Samuel Beckett)',
    ' “É costume de um tolo, quando erra, queixar-se dos outros. É costume de um sábio queixar-se de si mesmo”. (Sócrates)',
    ' “O verdadeiro heroísmo consiste em persistir por mais um momento, quando tudo parece perdido”. (W. F. Grenfel)',
];

let guardaFrase;

function FrasesGenerator() {
    let checkTodas = document.getElementById('todas');
    let checkMotivacionais = document.getElementById('motivacionais');
    let checkinspiradoras = document.getElementById('inspiradoras');
    let frase = document.getElementById('msg');

    if (checkTodas.checked == true) {

        let gerador = Math.floor(Math.random() * frases.length);

        guardaFrase = frases[gerador];

        frase.innerHTML = `${frases[gerador]}`;

    } else if (checkMotivacionais.checked == true) {
        checkTodas.checked = false;
        alert('Motiva marcado');
    } else if (checkinspiradoras.checked == true) {
        alert('insp marcado');
        checkTodas.checked = false;
    }

}

function copiarTexto() {
    
    document.execCommand("Copy");
    alert("Texto Copiado: " + guardaFrase.value);
}


