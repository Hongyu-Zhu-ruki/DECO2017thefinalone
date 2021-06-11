
$(document).ready(function () {
    //加
    $("#jia1").click(function () {
        let input = `  <div class="bbbbbb">
              <input type="text" placeholder="写点什么吧">
              <span class="shanchu">X</span>
            </div>`
        $('.kanbanInput').append(input)
    });
    $("#jia2").click(function () {
        let input = `  <div class="bbbbbb">
              <input type="text" placeholder="写点什么吧">
              <span class="shanchu">X</span>
            </div>`
        $('.kanbanInput2').append(input)
    });
    $("#jia3").click(function () {
        let input = `  <div class="bbbbbb">
              <input type="text" placeholder="写点什么吧">
              <span class="shanchu">X</span>
            </div>`
        $('.kanbanInput3').append(input)
    });
    //减
    $("#jian1").click(function () {
        $(".kanbanInput .bbbbbb:last-child").remove();
    });
    $("#jian2").click(function () {
        $(".kanbanInput2 .bbbbbb:last-child").remove();
    });
    $("#jian3").click(function () {
        $(".kanbanInput3 .bbbbbb:last-child").remove();
    });

    $(".ccc").on("click", '.shanchu', function () {
        $(this).eq(0).parent().remove();
    })

});
