function search() {
    var search = document.getElementById('search').value;
    var table = document.getElementById('projects');
    var total;
     
    for (var i = 0; i < table.rows.length; i++) {
        var row = '';
         
        if (i == 0) {
            total = table.rows.item(i).cells.length;
            continue;
        }
         
        for (var j = 0; j < total; j++) {
            var text = '';
             
            if (navigator.appName == 'Microsoft Internet Explorer')
                text = table.rows.item(i).cells.item(j).innerText;
            else
                text = table.rows.item(i).cells.item(j).textContent;
                row += text;
        }
         
        row = row.toLowerCase();
        search = search.toLowerCase();
         
        if (row.indexOf(search) == -1)
            table.rows.item(i).style.display = 'none';
        else
            table.rows.item(i).style.display = 'table-row';
    }
}