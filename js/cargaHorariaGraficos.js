google.charts.load('current', {packages: ['corechart', 'bar']});

//Para os graficos de Carga horária:
google.charts.setOnLoadCallback(cargaHorariaGraficos);

function cargaHorariaGraficos() {
    dados_universidades.sort(function (a, b) {
        if (a.horas > b.horas) {
            return 1;
        }
        if (a.horas < b.horas) {
            return -1;
        }
        return 0;
    });

    var dados = [['Universidades', 'Horas']];
    
    for (var d in dados_universidades) {
        dados.push([dados_universidades[d].codigo,
            dados_universidades[d].horas])
    }
    var data = google.visualization.arrayToDataTable(dados);

    var options = {
        chart: {
            title: 'Comparativo do Estágio nas Universidades',
            subtitle: 'Carga horária no estágio'
        },
        bars: 'horizontal',
        legend: {position: 'in', textStyle: {color: 'blue', fontSize: 1}, alignment: 'center'},
        width: 1024,
        height: 600
    };

    var grafo = new google.charts.Bar(document.getElementById('carga_horaria'));
    grafo.draw(data, options);
}
