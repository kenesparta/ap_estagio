var secaoUniv = document.getElementById('secao_univ');
var parentSecaoUniv = secaoUniv.parentNode;
var slides = "";

window.document.onload = function (e) {
    for (var d in dados_universidades) {
        slides += "<section>" +
            "<h2>" + dados_universidades[d].nome + "</h2>" +
            "<p style='margin-top: -15px'> <strong style='font-size: 20px; padding-right: 2.5em; color: #1b91ff'> " +
            dados_universidades[d].municipio + '--' + dados_universidades[d].uf + "</strong>" +
            "<strong style='font-size: 20px;color: red'>" + "CPC : " + dados_universidades[d].cpc + "</strong>" +
            "</p>" +
            "<small style='color: #67b168; width: 600px'>" +
            "<i>Fonte: </i>" + dados_universidades[d].site + "</small>" +
            "</section>";
    }
    parentSecaoUniv.insertBefore(slides, secaoUniv);
}