"use strict";

function generatePDF() {
    var doc = new jsPDF();
    var today = new Date();
    var date = today.getDate()+'.'+(today.getMonth()+1)+'.'+ today.getFullYear();
    doc.setFontSize(40);
    doc.text("Urkunde Geocache", 105, 25, null, null, "center");
    doc.setFontSize(16);
    var input_user=document.getElementById("input1").value;
    doc.text("Herzlichen Glückwunsch "+input_user, 105, 55, null, null, "center");
    doc.text("Du hast den Geocache erfolgreich gemeistert!", 105, 70, null, null, "center");
    doc.text("Sachsenheim, den "+date, 105, 85, null, null, "center");
    var img = document.getElementById('bild');
    doc.addImage(img, 'JPEG', 1, 2);
    doc.text("https://sachsenheim-klimaneutral.de", 105, 100, null, null, "center");
    doc.textWithLink('', 155, 100, {url: 'https://sachsenheim-klimaneutral.de'});
    doc.save("Urkunde.pdf");
}
           