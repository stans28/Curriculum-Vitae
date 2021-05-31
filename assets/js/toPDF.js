const { jsPDF } = window.jspdf;
const { html2canvas } = window.html2canvas;

var doc = new jsPDF({format: 'a4', orientation: 'portrait' });

$('.download-link a').click(function (e) {
    e.preventDefault();
    const content = document.getElementById("principale");

    var elementHandler = {
        '.download-link a': function (element, renderer) {
            return true;
        },
    };

    doc.html(content, {
        'width': 170,
        'elementHandlers': elementHandler,
        callback: function (doc) {
            doc.save("doc.pdf");
        },
    });
});