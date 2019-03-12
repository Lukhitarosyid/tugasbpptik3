<?php
$obj = json_decode($_POST["myData"]);

echo $obj->arrnam;

$exportdata = fopen("datanilai.txt", "w") or die("File Tidak dapat dibuka!");

for ($i=0; $i < count ($obj->arrnam);$i++){
    $txt = $obj->arrnam[$i] . $obj->arrnil[$i]."\n";
    fwrite($exportdata, $txt);
}
fclose($exportdata);

?>