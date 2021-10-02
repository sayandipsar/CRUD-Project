var selectedRow = null;
function onFormSubmit() {
    var formData = readFormData();
    if (selectedRow == null)
        insertNewRecord(formData);
    else
        updateRecord(formData);
    resetForm();
}

function readFormData() {
    var formData = {};
    formData["myname"] = document.getElementById("myname").value;
    formData["myphone"] = document.getElementById("myphone").value;
    formData["myroll"] = document.getElementById("myroll").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.myname;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.myphone;
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.myroll;
    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<button type="button"  class="btn btn-primary btn-sm" onclick='onEdit(this)'>
    
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
</svg>
    
      Edit</button>
                    <button class="btn btn-danger btn-sm" onclick='onDelete(this)'>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg>
                    
                      Delete</button>`
}

function onEdit(td){
selectedRow=td.parentElement.parentElement;
document.getElementById("myname").value=selectedRow.cells[0].innerHTML;
document.getElementById("myphone").value=selectedRow.cells[1].innerHTML;
document.getElementById("myroll").value=selectedRow.cells[2].innerHTML;
}

function updateRecord(formData)
{
selectedRow.cells[0].innerHTML=formData.myname;
selectedRow.cells[1].innerHTML=formData.myphone;
selectedRow.cells[2].innerHTML=formData.myroll;
selectedRow=null;
}

function onDelete(td){
    row=td.parentElement.parentElement;
    document.getElementById("employeeList").deleteRow(row.rowIndex);
    resetForm();
}
function resetForm(){
    document.getElementById("myname").value="";
    document.getElementById("myphone").value="";
    document.getElementById("myroll").value="";
}