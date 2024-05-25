if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $username = htmlspecialchars(trim($_POST['username']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));
    if (empty($username) || empty($email) || empty($message)) {
        echo "You must fill out all fields.";
        exit;
    }
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email.";
        exit;
    }
    $to = "webdesignerben07@gmail.com";
    $subject = "New client submission";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text\plain; charset=UTF-8\r\n";
    $email_body = "Name: $username\n";
    $email_body .= "Email: $email\n\n";
    $emaol_body .= "Message:\n$message\n";
    if (mail($to, $subject, $email_body, $headers)) {
        echo "Thank you for contacting me, I will DM you on your provided platfom!";
    } else {
        "Sorry, something went wrong. Please try again later."
    }
} else {
    echo "Invalid request.";
}