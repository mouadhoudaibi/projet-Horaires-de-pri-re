<?php

$city = "Casablanca";
$country = "Morocco";
$date = 'today';
$apiurl = "https://api.aladhan.com/v1/timingsByCity/$date?city=$city&country=$country";

$response =file_get_contents($apiurl);
$data = json_decode($response, false);

$Fajr = $data->data->timings->Fajr;
$Dhuhr = $data->data->timings->Dhuhr;
$Asr = $data->data->timings->Asr;
// $Asr = date("H:i", strtotime('+1 minutes'));
$Maghrib = $data->data->timings->Maghrib;
$Isha = $data->data->timings->Isha;


echo json_encode([
    
    'Fajr' => $Fajr,
    'Dhuhr' => $Dhuhr,
    'Asr' => $Asr,
    'Maghrib' => $Maghrib,
    'Isha' => $Isha
]);

// echo "In $city, $country, ";

// switch ($country) {
//     case "Morocco":
//         echo "you can pray in Ramadan.";
//         break;
//     case "Egypt":
//         echo "you can pray in Eid al-Adha.";
//         break;
//     default:
//         echo "you can pray anywhere.";
// }

?>