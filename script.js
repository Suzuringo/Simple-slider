var loop = setInterval(function() {
    //li先頭要素のクローンを作成
    var clone = $(".slider-ul li:first").clone(true);
    //li先頭要素のマージントップにマイナスを指定しアニメーションさせる
    $(".slider-ul li:first").animate({
    marginLeft : "-340px"
    }, {
    duration : 500,
    complete : function() {
        //処理完了時に先頭要素を削除
        $(".slider-ul li:first").remove();
        //クローンをliの最後に追加
        clone.clone(true).insertAfter($(".slider-ul li:last"));
    }
    });
}, 2000);


 