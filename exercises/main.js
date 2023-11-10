var textArea = document.getElementById('act1');
var iframe = document.getElementById('display-act');

textArea.addEventListener('input', function() {
  iframe.contentDocument.body.innerHTML = textArea.value;
});

function result_act1() {
    var textArea = document.getElementById("act1").value;

    var data = "<main></main>";
    textArea = textArea.replace(/\s/g, '');

    if (textArea === data) {
        document.getElementById('show-result').innerHTML = "Correct";
    } else {
        document.getElementById('show-result').innerHTML = "Wrong";
    }
}