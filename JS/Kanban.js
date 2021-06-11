// inspace();


// // allowdropdrop preventdefault 防止DIV无法被拖拽
// function allowDro(thiz) {
//   thiz.preventDefault();
// }


// // 获取当前拖拽元素的ID
// function drag(thiz) {
//   thiz.dataTransfer.setData("tExt", thiz.target.id = "drag");
// }


// // 拖拽结束的位置（根据元素ID Class）进行下一步操作
// function drop(thiz) {
//     var database = thiz.dataTransfer.getData("tExt");

//         thiz.preventDefault();
//         thiz.stopPropagation();

//     if (thiz.target.id === 'Delete') {
//         document.querySelector("#" + database).remove();
//     }  else {
//         if (thiz.target.className === "space") {
//             thiz.target.appendChild(document.querySelector("#" + database));
//         } else if (thiz.target.className === "it") {
//             thiz.target.parentElement.appendChild(document.querySelector("#" + database));
//         }
//         //document.querySelector("#" + database).remove("id");
//     }
// }


// // 取差值渐进
// function getRein(min, max) {

//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min)) + min;
// }

// // 新task根据titile页input取输出重新定义TASK
// function maKAT(space, content, thiz) {
//     var tasktitleField, newItem;
//     if (thiz) {
//         thiz.preventDefault();
//     }
//     tasktitleField = document.querySelector("#taskTitle");
//         if (content === "input") {
//         content = tasktitleField.value;
//     }
//     content = content.split("+");
//     for (var i = 0; i < content.length; i++) {
//         newItem = document.createElement("div");
//         newItem.className = "it";
//         newItem.draggable = true;
//         newItem.textContent = content[i].trim();
//         newItem.addEventListener("dragstart", drag);
//         document.querySelector("#" + space).appendChild(newItem);
//     }
// }

// // 更新数字


// //  初始化
// function inspace() {
//     var formFilled = document.querySelector("form");
//     var bos = document.querySelectorAll(".space");
//     var items = document.querySelectorAll(".it");
//     var tasktitleField = document.querySelector("#taskTitle");
//     var typeMess = [
//       "Add a task",
//       "Remember to finish it up",
//     ];
//     tasktitleField.addEventListener("focus", function() {
//         this.value = "";
//     });
//     tasktitleField.addEventListener("blur", function() {
//         if (this.value === "") {
//             var index = getRein(0, typeMess.length);
//             this.value = typeMess[index];
//         }
//     });
//     var index = getRein(0, typeMess.length);
//     tasktitleField.value = typeMess[index];
//     for (i = 0; i < bos.length; i++) {
//         bos[i].addEventListener("drop", drop);
//         bos[i].addEventListener("dragover", allowDro);
//     }
//     document.body.addEventListener("drop", drop);
//     document.body.addEventListener("dragover", allowDro);
//     formFilled.addEventListener("submit", maKAT.bind(null, "ToDo", "input"));
//     window.addEventListener("unload", saveKanban);
//     window.addEventListener("DOMContentLoaded", loadKanban);
// }

// // 加载看板
// function loadKanban() {
//     var i, x, boardName, newItem;
//     for (i = 0; i < localStorage.length; i++) {

//         x = localStorage.key(i);
//         boardName = x.substr(0, x.indexOf('_'));
//         maKAT(boardName, localStorage.getItem(x));
//     }
// }

// // 保存看板
// function saveKanban() {
//     var items, i, boardName;
//     localStorage.clear();
//     items = document.querySelectorAll(".it");
//     for (i = 0; i < items.length; i++) {
//     boardName = items[i].parentElement.id;
//     localStorage.setItem(boardName + "_" + i, items[i].textContent);
//     }
// }


// // localStorage.setItem(boardName, JSON.strinify(items))

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