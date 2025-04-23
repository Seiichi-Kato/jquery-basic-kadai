$(document).ready(function() {
    // 色変更
    $("#change-color").on("click", function() {
        $("#target").css("color", "blue"); // 任意の色（例: 青）
    });

    // 文字変更
    $("#change-text").on("click", function() {
        $("#target").text("新しいメッセージ！"); // 任意の文字列
    });

    // フェードアウト
    $("#fade-out").on("click", function() {
        $("#target").fadeOut();
    });

    // フェードイン
    $("#fade-in").on("click", function() {
        $("#target").fadeIn();
    });
});
