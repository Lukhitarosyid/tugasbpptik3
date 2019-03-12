<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="jquery.js"></script>
    <script src='js_table.js'></script>
    
    <title>Program List</title>
</head>
<body>

        <form name='nilaisiswa' method='post' action='index.html'>
                <pre>
                Nama    : <input type='text' name='nama' >
                Nilai   : <input type='number' name='nsiswa'>               
                </pre>
                      <input type='button' onClick='terimainput()' value='Simpan'>
                      <input type='reset' value='Reset'>
                <label>Note : Penulisan Jumlah Digit Kolom Nilai Harus Sama ex: 090 & 100  </label>
            </form>
            <br></br>
            <button onclick="sortTable(0)">Sort By Nama</button>
            <button onclick="sortTableangka(1)">Sort By Nilai</button>
            <br></br>
                <table border='1' id='tabelinput'>
                <tr>
                  <th onclick="sortTable(0)">Sort By Nama</th>
                  <th onclick="sortTable(1)">Sort By Nilai</th>
                </tr>
                <tr>
                      <td>NAMA</td>
                      <td>NILAI</td>
                      <td>Hapus </td>
                </tr>
                <tbody id = "datatab"></tbody>
                </table> <br></br>
              <button onclick="download()">Download</button>
   
        
</body>
</html>