//Para os graficos de Carga horária:
google.charts.setOnLoadCallback(semestreGraficos);

function semestreGraficos() {
    dados_universidades.sort(function (a, b) {
        if (a.periodo > b.periodo) {
            return 1;
        }
        if (a.periodo < b.periodo) {
            return 0;
        }
    });

    var dados = [['Universidades', 'Semestre']];

    for (var d in dados_universidades) {
        dados.push([dados_universidades[d].codigo,
            dados_universidades[d].periodo])
    }
    var data = google.visualization.arrayToDataTable(dados);

    var options = {
        chart: {
            title: 'Comparativo do Estágio nas Universidades',
            subtitle: 'Periodo que começa o estágio'
        },
        bars: 'horizontal',
        legend: {position: 'in', textStyle: {color: 'blue', fontSize: 1}, alignment: 'center'},
        width: 1024,
        height: 600,
        colors: '#1b9e77'
    };

    var grafo = new google.charts.Bar(document.getElementById('semestre'));
    grafo.draw(data, options);
}
