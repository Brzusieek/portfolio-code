<?php
$nameGallery = $_GET['namegallery'];
$itemCount = $_GET['count'];
$title = $_GET['title'];
$url = 'http://proak.mbrzuchacz.nazwa.pl';
echo "<h3>{$title}</h3>";
for($i = $itemCount; $i > 0; $i--){
    echo "
        <div class='item-gallery loading vbox-item' 
         href='{$url}/wp-content/themes/proak/assets/page-galeria/images/gallery/{$nameGallery}/{$i}-{$nameGallery}.jpg' data-gall='galeria'>
                <img src='{$url}/wp-content/themes/proak/assets/page-galeria/images/gallery/{$nameGallery}/thumb-{$i}-{$nameGallery}.jpg'
                     alt='Miniaturka zdjecia'
                     title='Kliknij, aby powiekszyc'
                     class='loading'>
        </div>
    ";
}
?>

