"use strict";

function generatePDF() {
    var doc = new jsPDF();
    var today = new Date();
    var date = today.getDate()+'.'+(today.getMonth()+1)+'.'+ today.getFullYear();
    doc.setFontSize(40);
    doc.setFillColor(255, 200, 45);
    doc.rect(0, 0, 250, 500, "F");
    var img = document.getElementById('bild');
    doc.addImage(img, 'JPEG', 90, 25);
    doc.text("Urkunde Geocache", 105, 90, null, null, "center");
    doc.setFontSize(16);
    var input_user=document.getElementById("input1").value;
    doc.text("Herzlichen Glückwunsch "+input_user+", ", 105, 120, null, null, "center");
    doc.text("Du hast den Geocache erfolgreich gemeistert!", 105, 130, null, null, "center");
    doc.text("Sachsenheim, den "+date, 105, 145, null, null, "center");
    doc.setFontSize(14)
    var str = "Wir sind die Initiative „Sachsenheim wird klimaneutral bis 2035“,\n     die den Klimawandel vor Ort mutig angehen und eine\n       nachhaltige Zukunft für uns alle schaffen will.";
    doc.text(str, 105, 165, null, null, "center"); 
    doc.setFontSize(16)
    doc.text("Du möchtest mehr über uns erfahren?", 100, 195, "center");  
    doc.text("Alle Informationen und Kontaktdaten findest du hier:", 100, 205, "center");   
    doc.text("https://sachsenheim-klimaneutral.de", 57, 225);
    doc.textWithLink('', 155, 230, {url: 'https://sachsenheim-klimaneutral.de'});
    doc.save("Urkunde.pdf");
}