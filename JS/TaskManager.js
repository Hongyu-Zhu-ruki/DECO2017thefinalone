  
  
  document.getElementById("btn_add").onclick = function(){
        //2.获取文本框的内容
        var id = document.getElementById("id").value;
        
        var date = document.getElementById("duedate").value;
        var priority = document.getElementById("shuruPriority").value;
        var etime = document.getElementById("etime").value;
        //3.创建td，赋值td的标签体
        //id 的 td
        var td_id = document.createElement("td");
        var text_id = document.createTextNode(id);
        td_id.appendChild(text_id);
        //name 的 td
        var td_date = document.createElement("td");
        var text_date = document.createTextNode(date);
        td_date.appendChild(text_date);
        //priority 的 td
        var td_priority = document.createElement("td");
        var text_priority = document.createTextNode(priority);
        td_priority.appendChild(text_priority);

        var td_etime = document.createElement("td");
        var text_etime = document.createTextNode(etime);
        td_etime.appendChild(text_etime);
        //a标签的td
        var td_a = document.createElement("td");
        var ele_a = document.createElement("a");
        ele_a.setAttribute("href","javascript:void(0);");
        ele_a.setAttribute("onclick","delTr(this);");
        var text_a = document.createTextNode("Done");
        ele_a.appendChild(text_a);
        td_a.appendChild(ele_a);

        //4.创建tr
        var tr = document.createElement("tr");
        //5.添加td到tr中
        tr.appendChild(td_id);
        tr.appendChild(td_date);
        tr.appendChild(td_priority);
        tr.appendChild(td_etime);
        tr.appendChild(td_a);
        //6.获取table
        var table = document.getElementsByTagName("table")[0];
        table.appendChild(tr);
}
function delTr(obj){
        var table = obj.parentNode.parentNode.parentNode;
        var tr = obj.parentNode.parentNode;
        table.removeChild(tr);
    }