
<?php
$target_dir = "./ExteriorImgs/";
$target_file = $target_dir . basename($_FILES["image"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

// Check if image file is a actual image or fake image
if(isset($_POST["submit"])) {
  //$check = ($_FILES["image"]["tmp_name"]);
//   if($check !== false) {
//     echo "File is an image - " . $check["mime"] . ".";
//     $uploadOk = 1;
//   } else {
//     echo "File is not an image.";
//     $uploadOk = 0;
//   }
$picname = ($_FILES["image"]["name"]);
$pic_temp = ($_FILES["image"]["tmp_name"]);
$pic_size = ($_FILES["image"]["size"]);
//die("$pic_size,$pic_temp,$picname,$imageFileType");
if($pic_size > 0){
    if( !empty($picname)){
        // if($imageFileType  != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
        // && $imageFileType != "gif" ) { 

        $desc = $target_dir."/".$picname;
        if(move_uploaded_file($pic_temp,$desc)){
            echo "Image uploaded successfully";
            header("Location: ./gallery page/gallery.html" );
       
        }else{
            echo "Image upload failed";
        }
    // }else{
    //     echo "Upload an image with a valid extention";
    // }

    }else{
        echo "Image name is not valid.";
    }

}else{
    echo "Upload a valid image";
}

}


// Check if file already exists
// if (file_exists($target_file)) {
//   echo "Sorry, file already exists.";
//   $uploadOk = 0;
// }

// Check file size
// if ($_FILES["image"]["size"] > 500000) {
//   echo "Sorry, your file is too large.";
//   $uploadOk = 0;
// }

// Allow certain file formats
// if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
// && $imageFileType != "gif" ) {
//   echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
//   $uploadOk = 0;
// }

// Check if $uploadOk is set to 0 by an error
// if ($uploadOk == 0) {
//   echo "Sorry, your file was not uploaded.";
// if everything is ok, try to upload file
// } else {
//   if (move_uploaded_file($_FILES["image"]["tmp_name"], $target_file)) {
//     echo "The file ". htmlspecialchars( basename( $_FILES["image"]["name"])). " has been uploaded.";
//   } else {
//     echo "Sorry, there was an error uploading your file.";
//   }
// }
?>