let numeroLike = 0;
document.getElementById('curtir').addEventListener('click', function contador() {
    document.getElementById('curtidas').innerHTML = numeroLike++;
})

function descutir() {
    document.getElementById('curtidas').innerHTML = numeroLike--;
}
