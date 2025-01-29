<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "cuestionario_vocacional";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(["status" => "error", "message" => "Error de conexión a la base de datos"]));
}

$sql = "SELECT nombre, email, respuestas, fecha FROM respuestas ORDER BY fecha DESC";
$result = $conn->query($sql);

$responses = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $responses[] = $row;
    }
}

echo json_encode(["status" => "success", "data" => $responses]);

$conn->close();
?>