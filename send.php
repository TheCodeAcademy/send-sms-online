<?php

$sender_name = $_POST['name'];
$number = $_POST['number'];
$carrier = $_POST['carrier'];
$message = $_POST['message'];
$rateDisclaimer = "Data rates may apply";

$subject = $sender_name . " says hi";

mail($number.$carrier, $subject, "\r\n\n".$message."\r\n\n".$rateDisclaimer);

echo "Message sent";

?>
