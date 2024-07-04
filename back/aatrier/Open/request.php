<?php

$name = $_GET['name'];

header('Content-Type: text/html');
echo('<html>');
echo('<body>Bonjour '.$name.'</body>');
echo('</html>');

?>
