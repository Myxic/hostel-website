<?php
    echo 'hey';
if (isset($_POST['submit'])) {
    $file = $_FILES['image'];
    print_r($file);
    $fileName = $_FILES['image']['name'];
}elseif(!empty($_POST['file']) && $_POST['file'] != '') {
    print_r($_POST['file']);
}
?>