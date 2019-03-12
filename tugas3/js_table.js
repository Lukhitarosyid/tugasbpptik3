    var isidat = "";
    var arrnam = new Array();
    var arrnil = new Array();

function terimainput(){

    var y=document.forms['nilaisiswa']['nama'].value;
    var x=document.forms['nilaisiswa']['nsiswa'].value;
   
    arrnam.push(y);
    arrnil.push(x);

                                      
    var tabel = document.getElementById("datatab");
    
            for(var i = 0; i < arrnil.length; i++){
                var z ="<input type='reset' value='delete' onclick='hapusdata("+(i)+")'>";
                isidat+="<tr><td>"+arrnam[i]+"</td><td>"+arrnil[i]+"</td><td>"+z+"</td></tr>"

            }
            tabel.innerHTML = isidat;
            isidat = "";
        } 
function hapusdata(index){
    arrnam.splice(index,1);
    arrnil.splice(index,1);
    var tabel = document.getElementById("datatab");

    for(var i = 0; i < arrnil.length; i++){
        var z ="<input type ='reset' value='delete' onclick='hapusdata("+(i)+")'>";    
        isidat+="<tr><td>"+arrnam[i]+"</td><td>"+arrnil[i]+"</td><td>"+z+"</td></tr>"    
}
tabel.innerHTML =isidat;
isidat ="";
   
}
function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;

    table = document.getElementById("datatab");
    switching = true;
    //Set the sorting direction to ascending:
    dir = "asc"; 
    /*Make a loop that will continue until
    no switching has been done:*/
     while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 0; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /*check if the two rows should switch place,
      based on the direction, asc or desc:*/
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount ++;      
    } else {
      /*If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

function download(){


var dataPost = { "arrnam": arrnam, "arrnil":arrnil};
var dataString = JSON.stringify(dataPost);
 
 $.ajax({
    url: 'export.php',
    data: {myData: dataString},
    type: 'POST',
    success: function(response) {
       alert("Selamat File Berhasil di unduh! Silahkan Cek File Penyimpanan");
    }
 });
}
