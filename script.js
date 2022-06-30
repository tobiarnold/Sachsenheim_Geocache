"use strict";

function generatePDF() {
    var doc = new jsPDF();
    doc.setFontSize(40);
    doc.text("Urkunde Geocache", 35, 25);
    doc.setFontSize(16);
    var input_user=document.getElementById("input1").value;
    doc.text("Herzlichen Glückwunsch "+input_user, 60, 50);
     doc.text("Du hast den Geocache erfolgreich gemeistert", 50, 65);
    var img = document.getElementById('bild');
    doc.addImage(img, 'JPEG', 1, 2);
    doc.save("Urkunde.pdf");
}
           