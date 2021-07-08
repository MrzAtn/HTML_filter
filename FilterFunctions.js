function TableFilterTot(tableSel) {
    var table, str;
    if (tableSel == 1) {
        table = document.getElementById("table1");
        str1 = document.getElementById("MySelect1").value;
        str2 = document.getElementById("MySelect2").value;
    } else { // if we use more than 1 table
        table = document.getElementById("table2");
        str1 = document.getElementById("MySelect3").value;
        str2 = document.getElementById("MySelect4").value;
    }
    for (var i = 1; i < table.rows.length; i++) {
        var pos1 = -1;
        var pos2 = -1;
        var coldata1 = table.rows[i].cells[1].innerHTML;;
        var coldata2 = table.rows[i].cells[2].innerHTML;;
        pos1 = coldata1.search(str1);
        pos2 = coldata2.search(str2);
        if (str1 == "ALL") {
            if (pos2 != -1) {
                table.getElementsByTagName("tr")[i].style.display = "";
            } else {
                table.getElementsByTagName("tr")[i].style.display = "none";
            }
        } else if (str2 == "ALL") {
            if (pos1 != -1) {
                table.getElementsByTagName("tr")[i].style.display = "";
            } else {
                table.getElementsByTagName("tr")[i].style.display = "none";
            }
        } else {
            if ((pos1 != -1) && (pos2 != -1)) {
                table.getElementsByTagName("tr")[i].style.display = "";
            } else {
                table.getElementsByTagName("tr")[i].style.display = "none";
            }
            if (str == "") {
                table.getElementsByTagName("tr")[i].style.display = "";
            }
        }
        if ((str1 == "ALL") && (str2 == "ALL")) {
            table.getElementsByTagName("tr")[i].style.display = "";
        }
    }
}