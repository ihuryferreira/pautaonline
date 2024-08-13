const myData = document.querySelector("#minha-data");

function DataScript() {
    let data = new Date().toLocaleDateString('pt-BR');
    myData.textContent = `${data}`;
}

document.addEventListener('DOMContentLoaded', DataScript);

// document.addEventListener('DOMContentLoaded', () => {
//   if (typeof docx === 'undefined') {
//       console.error('A biblioteca docx não está carregada.');
//       return;
//   }

//   document.getElementById('exportButton').addEventListener('click', () => {
//       const { Document, Packer, Table, TableRow, TableCell, Paragraph, TextRun, HeadingLevel, AlignmentType, WidthType } = docx;

//       const getStylesFromElement = (element) => {
//           const styles = {};
//           if (element.style.fontWeight === 'bold') styles.bold = true;
//           if (element.style.fontStyle === 'italic') styles.italic = true;
//           if (element.style.textDecoration === 'underline') styles.underline = true;
//           if (element.style.fontSize) styles.size = parseInt(element.style.fontSize) * 2;
//           if (element.style.textAlign) styles.alignment = element.style.textAlign.toUpperCase();
//           return styles;
//       };

//       const createTableFromHTML = (tableId) => {
//           const table = document.getElementById(tableId);
//           const rows = Array.from(table.querySelectorAll('tr'));

//           return new Table({
//               rows: rows.map(row => {
//                   const cells = Array.from(row.querySelectorAll('td, th'));
//                   return new TableRow({
//                       children: cells.map(cell => new TableCell({
//                           children: [new Paragraph({
//                               children: [new TextRun(cell.innerText)],
//                               ...getStylesFromElement(cell),
//                           })],
//                       })),
//                   });
//               }),
//           });
//       };

//       const createParagraphFromHTML = (html) => {
//           const container = document.createElement('div');
//           container.innerHTML = html;
//           const elements = Array.from(container.querySelectorAll('p, h1, h2, h3, h4, h5, h6'));
//           return elements.map(el => {
//               let level;
//               let text = el.innerText;
//               switch (el.tagName.toLowerCase()) {
//                   case 'h1': level = HeadingLevel.HEADING_1; break;
//                   case 'h2': level = HeadingLevel.HEADING_2; break;
//                   case 'h3': level = HeadingLevel.HEADING_3; break;
//                   case 'h4': level = HeadingLevel.HEADING_4; break;
//                   case 'h5': level = HeadingLevel.HEADING_5; break;
//                   case 'h6': level = HeadingLevel.HEADING_6; break;
//                   default: level = undefined;
//               }
//               return new Paragraph({
//                   children: [new TextRun({
//                       text,
//                       ...getStylesFromElement(el),
//                   })],
//                   heading: level,
//                   alignment: el.style.textAlign ? el.style.textAlign.toUpperCase() : undefined,
//               });
//           });
//       };

//       const htmlContent = document.querySelector('.box').innerHTML;
//       const paragraphs = createParagraphFromHTML(htmlContent);

//       const doc = new Document({
//           sections: [
//               {
//                   properties: {},
//                   children: [
//                       ...paragraphs,
//                       createTableFromHTML('concluidosTable'),
//                       createTableFromHTML('pendentesTable'),
//                   ],
//               },
//           ],
//       });

//       Packer.toBlob(doc).then(blob => {
//           const url = URL.createObjectURL(blob);
//           const a = document.createElement('a');
//           a.href = url;
//           a.download = 'Pauta_do_dia.docx';
//           a.click();
//           URL.revokeObjectURL(url);
//       }).catch(err => console.error('Erro ao criar o arquivo Word:', err));
//   });
// });