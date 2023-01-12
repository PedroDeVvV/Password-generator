import geraSenha from "./geradores";

const senhaGerada = document.querySelector('.senha-gerada')
const qtdCaracteres = document.querySelector('.qtd-caracteres')
const chkMaiusculas = document.querySelector('.chk-maisculas')
const chkMinusculas = document.querySelector('.chk-minusculas')
const chkNumeros = document.querySelector('.chk-numeros')
const chkSimbolos = document.querySelector('.chk-simbolos')
const gerarSenha = document.querySelector('.gerar-senha')
const copiar = document.querySelector('.copiar');

export default () => {
    gerarSenha.addEventListener('click', () => {
        senhaGerada.value = gera();
        gerarSenha.innerHTML = '<i class="fa fa-refresh"></i>';
        gerarSenha.classList.add('repeat')
        gerarSenha.classList.remove('gerar-senha')
    })
}

function gera() {
    const senha = geraSenha(
        qtdCaracteres.value,
        chkMaiusculas.checked,
        chkMinusculas.checked,
        chkNumeros.checked,
        chkSimbolos.checked
    );
    return senha || 'Nada foi selecionado.';
}

copiar.addEventListener('click', () => {
    const copiado = document.querySelector('.senha-gerada') 
    copiado.select();
    copiado.setSelectionRange(0, 9999999);

    document.execCommand("copy");
    alert('Copiado para área de transferência')
})