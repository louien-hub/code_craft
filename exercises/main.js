var textArea = document.getElementById('act1');
var iframe = document.getElementById('display-act');

textArea.addEventListener('input', function() {
  iframe.contentDocument.body.innerHTML = textArea.value;
});

function result_act1() {
    var textArea = document.getElementById("act1").value;

    var data = 
    `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Page Title</title>
</head>
<body>
</body>
</html>

    `;
    textArea = textArea.replace(/\s/g, '');
    data = data.replace(/\s/g, '');

    if (textArea === data) {
        document.getElementById('show-result').innerHTML = "Correct";
    } else {
        document.getElementById('show-result').innerHTML = "Wrong";
    }
}