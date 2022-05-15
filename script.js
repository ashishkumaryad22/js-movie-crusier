var selectedRow = null;
function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}
function readFormData() {
    
    var formData = {};
    formData["movieTitle"] = document.getElementById("movieTitle").value;
    formData["movieId"] = document.getElementById("movieId").value;
    formData["movieDuration"] = document.getElementById("movieDuration").value;
    formData["movieDesc"] = document.getElementById("movieDesc").value;
    formData["releseDate"] = document.getElementById("releseDate").value;
    formData["movieRating"] = document.getElementById("movieRating").value;
    // console.log(formData);
    return formData;
    
}
function insertNewRecord(data) {
    var table = document.getElementById("moviesList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.movieTitle;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.movieId;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.movieDuration;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.movieDesc;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.releseDate;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.movieRating;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = `<a onClick="onEdit(this,a=1)">Edit</a> <a onClick="onDelete(this)">Delete</a>`;
}
function resetForm() {
    document.getElementById("movieTitle").value = "";
    document.getElementById("movieId").value = "";
    document.getElementById("movieDuration").value = "";
    document.getElementById("movieDesc").value = "";
    document.getElementById("releseDate").value = "";
    document.getElementById("movieRating").value = "";
    selectedRow = null;
}
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    // document.getElementById("sub").value = "Update";
    document.getElementById("movieTitle").value = selectedRow.cells[0].innerHTML;
    document.getElementById("movieId").value = selectedRow.cells[1].innerHTML;
    document.getElementById("movieDuration").value = selectedRow.cells[2].innerHTML;
    document.getElementById("movieDesc").value = selectedRow.cells[3].innerHTML;
    document.getElementById("releseDate").value = selectedRow.cells[4].innerHTML;
    document.getElementById("movieRating").value = selectedRow.cells[5].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.movieTitle;
    selectedRow.cells[1].innerHTML = formData.movieId;
    selectedRow.cells[2].innerHTML = formData.movieDuration;
    selectedRow.cells[3].innerHTML = formData.movieDesc;
    selectedRow.cells[4].innerHTML = formData.releseDate;
    selectedRow.cells[5].innerHTML = formData.movieRating;
}
function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("moviesList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("movieTitle").value == "") {
        isValid = false;
        document.getElementById("movieTitleValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("movieTitleValidationError").classList.contains("hide"))
            document.getElementById("movieTitleValidationError").classList.add("hide");
    }
    return isValid;
}
