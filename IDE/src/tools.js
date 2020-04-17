function refresh() {
    let code = document.querySelector('#codeEditor').value;
    document.querySelector('#view').srcdoc = code;
}

function codeStructure() {
    let structure = '<!DOCTYPE html>_<html>_<head>_<meta charset="UTF-8">_<meta name="viewport" content="width=device-width, initial-scale=1.0">_<title>Document</title>_<style>_<style>_</head>_<body>_<script>_<script>_</body>_</html>'.split('_');
    document.querySelector('#codeEditor').value = structure.join('\n');
}