<?php
session_start();

require_once(__DIR__ . '/config/mysql.php');
require_once(__DIR__ . '/databaseconnect.php');

/**
 * On ne traite pas les super globales provenant de l'utilisateur directement,
 * ces données doivent être testées et vérifiées.
 */
$getData = $_GET;

if (!isset($getData['id']) || !is_numeric($getData['id'])) {
    echo('Le livre n\'existe pas');
    return;
}

// On récupère le livre
$retrieveBookWithCommentsStatement = $mysqlClient->prepare('SELECT r.*, c.comment_id, c.comment, c.user_id,  DATE_FORMAT(c.created_at, "%d/%m/%Y") as comment_date, u.full_name FROM books r 
LEFT JOIN comments c on c.book_id = r.book_id
LEFT JOIN users u ON u.user_id = c.user_id
WHERE r.book_id = :id 
ORDER BY comment_date DESC');
$retrieveBookWithCommentsStatement->execute([
    'id' => (int)$getData['id'],
]);
$bookWithComments = $retrieveBookWithCommentsStatement->fetchAll(PDO::FETCH_ASSOC);

if ($bookWithComments === []) {
    echo('Le livre n\'existe pas');
    return;
}
$retrieveAverageRatingStatement = $mysqlClient->prepare('SELECT ROUND(AVG(c.review),1) as rating FROM books r LEFT JOIN comments c on r.book_id = c.book_id WHERE r.book_id = :id');
$retrieveAverageRatingStatement->execute([
    'id' => (int)$getData['id'],
]);
$averageRating = $retrieveAverageRatingStatement->fetch();
;

$book = [
    'book_id' => $bookWithComments[0]['book_id'],
    'title' => $bookWithComments[0]['title'],
    'summary' => $bookWithComments[0]['summary'],
    'author' => $bookWithComments[0]['author'],
    'comments' => [],
    'rating' => $averageRating['rating'],
];

foreach ($bookWithComments as $comment) {
    if (!is_null($comment['comment_id'])) {
        $book['comments'][] = [
            'comment_id' => $comment['comment_id'],
            'comment' => $comment['comment'],
            'user_id' => (int) $comment['user_id'],
            'full_name' => $comment['full_name'],
            'created_at' => $comment['comment_date'],
        ];
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Les Potes En Ciel - <?php echo($book['title']); ?></title>
    <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
    >
</head>
<body class="d-flex flex-column min-vh-100">
    <div class="container">

        <?php require_once(__DIR__ . '/header.php'); ?>
        <h1><?php echo($book['title']); ?></h1>
        <div class="row">
            <article class="col">
                <?php echo($book['book_id']); ?>
            </article>
            <aside class="col">
                <p><i>Ecrit par <?php echo($book_id['author']); ?></i></p>
                <?php if ($book_id['rating'] !== null) : ?>
                    <p><b>Evaluée par la communauté à <?php echo($book_id['rating']); ?> / 5</b></p>
                <?php else : ?>
                    <p><b>Aucune évaluation</b></p>
                <?php endif; ?>
            </aside>
        </div>
        <hr />
        <h2>Commentaires</h2>
        <?php if ($book_id['comments'] !== []) : ?>
        <div class="row">
            <?php foreach ($book_id['comments'] as $comment) : ?>
                <div class="comment">
                    <p><?php echo($comment['created_at']); ?></p>
                    <p><?php echo($comment['comment']); ?></p>
                    <i>(<?php echo $comment['full_name']; ?>)</i>
                </div>
            <?php endforeach; ?>
        </div>
        <?php else : ?>
        <div class="row">
            <p>Aucun commentaire</p>
        </div>
        <?php endif; ?>
        <hr />
        <?php if (isset($_SESSION['LOGGED_USER'])) : ?>
            <?php require_once(__DIR__ . '/comments_create.php'); ?>
        <?php endif; ?>
    </div>
    <?php require_once(__DIR__ . '/footer.php'); ?>
</body>
</html>