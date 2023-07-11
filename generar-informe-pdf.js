
const fs = require('fs');

const pdfMake = require('pdfmake');


// Leer el contenido del archivo de texto

const contenidoTxt = fs.readFileSync('resultados.txt', 'utf-8');


// Convertir el contenido del archivo de texto a un objeto PDFMake

const pdfContent = { content: contenidoTxt };


// Crear un documento PDF

const printer = new pdfMake();

const pdfDoc = printer.createPdfKitDocument(pdfContent);


// Guardar el documento PDF en un archivo

const nombreArchivoPdf = 'archivo.pdf';

pdfDoc.pipe(fs.createWriteStream(nombreArchivoPdf));

pdfDoc.end();


console.log('Archivo PDF generado correctamente: ' + nombreArchivoPdf);

    // Obtén la fecha actual en el formato deseado
    function obtenerFechaActual() {
    const fecha = new Date();
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1;
    const anio = fecha.getFullYear();
    const fechaActual = dia + '/' + mes + '/' + anio;
    return fechaActual;
    }