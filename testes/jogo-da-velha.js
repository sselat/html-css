let jogadorAtual = 'X';
let tabuleiro = ['', '', '', '', '', '', '', '', '', ''] //representa o estado inicial do jogo, onde todas as posições do tabuleiro estão vazias.
// Obtém elementos do DOM
const quadrados = document.querySelectorAll('.quadrado');
const jogadorVez = document.querySelector('.jogador-vez');
const botaoReiniciar = document.querySelector('.botao-reiniciar');

// Função que verifica se houve vencedor
function verificarVencedor() {
    const combinacoesVencedoras = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let combinacao of combinacoesVencedoras) {
        const posicao1 = combinacao[0];
        const posicao2 = combinacao[1];
        const posicao3 = combinacao[2];
        if (tabuleiro[posicao1] === jogadorAtual && tabuleiro[posicao2] === jogadorAtual && tabuleiro[posicao3] === jogadorAtual) {
            return true;
        }
    }

    return false;
}
// Função que atualiza o jogador da vez
function atualizarJogadorVez() {
    jogadorVez.innerHTML = `Jogador da vez: ${ jogadorAtual }`;
}

// Função que atualiza o tabuleiro
function atualizarTabuleiro() {
    for (let i = 0; i < tabuleiro.length; i++) {
        quadrados[i].innerHTML = tabuleiro[i];
    }
}

// Função que reinicia o jogo
function reiniciarJogo() {
    jogadorAtual = 'X';
    tabuleiro = ['', '', '', '', '', '', '', '', ''];
    atualizarTabuleiro();
    atualizarJogadorVez();
}

// Evento de clique em um quadrado
for (let i = 0; i < quadrados.length; i++) {
    quadrados[i].addEventListener('click', function () {
        if (tabuleiro[i] === '' && !verificarVencedor()) {
            tabuleiro[i] = jogadorAtual;
            atualizarTabuleiro();
            if (verificarVencedor()) {
                alert(`O jogador ${jogadorAtual} venceu!`);
            } else {
                jogadorAtual = jogadorAtual === 'X' ? 'O' : 'X';
                atualizarJogadorVez();
            }
        }
    });
}
// Evento de clique no botão reiniciar
botaoReiniciar.addEventListener('click', reiniciarJogo);

// Inicia o jogo
atualizarTabuleiro();
atualizarJogadorVez();