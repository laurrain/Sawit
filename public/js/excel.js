$(function(){
    $('export').click(function ExportToExcel(){
       var htmltable= document.getElementById('table');
       var html = htmltable.outerHTML;
       window.open('data:application/vnd.ms-excel,' + encodeURIComponent(html));
    })
})

