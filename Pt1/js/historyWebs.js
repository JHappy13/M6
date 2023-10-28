function viewHistoryOfWebs(){
    let link1 = localStorage.getItem('link1');
    let link2 = localStorage.getItem('link2');
    let link3 = localStorage.getItem('link3');
    let link4 = localStorage.getItem('link4');

    var listHistoryVisits = window.open("","", "width=500 height=500");

    listHistoryVisits.document.write("<h1>Historial de pagines visitades</h1>");
    listHistoryVisits.document.write("<h2>Web numero 1: <a href='"+link1+"'>"+ link1+"</a></h2>");
    listHistoryVisits.document.write("<h2>Web numero 1: <a href='"+link2+"'>"+ link2+"</a></h2>");
    listHistoryVisits.document.write("<h2>Web numero 1: <a href='"+link3+"'>"+ link3+"</a></h2>");
    listHistoryVisits.document.write("<h2>Web numero 1: <a href='"+link4+"'>"+ link4+"</a></h2>");
}