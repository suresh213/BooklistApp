function addBook(bookname,authorname,idvalue){
    
        var table = document.getElementById("table")
        var newrow = table.insertRow(table.length);
        book = newrow.insertCell(0);
        book.innerHTML = bookname;
        author = newrow.insertCell(1);
        author.innerHTML = authorname;
        id = newrow.insertCell(2);
        id.innerHTML = idvalue;
        removebutton = newrow.insertCell(3);
        removebutton.innerHTML = `<button id="remove-btn" onclick="removeBook(this)">X</button>`;
        
        successmsg()
   
}

function add(){
        var bookname = document.getElementById("book").value
        var author = document.getElementById("author").value
        var id = document.getElementById("id").value

        if(bookname==""||author==""||id==""){
            alertmsg()
        }
        else{
            addBook(bookname,author,id);
            resetForm();
        }
}

function removeBook(td){
        document.querySelector(".tab").deleteRow(td.parentElement.parentElement.rowIndex)
        deletemsg()
}

function resetForm(){
        var bookname = document.getElementById("book").value=""
        var author = document.getElementById("author").value=""
        var id = document.getElementById("id").value=""
}

function alertmsg(){
    var alertmessage = document.createElement("p");
        alertmessage.setAttribute("id","alert")
        alertmessage.appendChild( document.createTextNode("Fill all details"))
        document.body.insertBefore(alertmessage,document.querySelector(".container"))
       
        setTimeout(() => {
            document.body.removeChild(alertmessage)
            
       }, 1000);
}

function deletemsg(){
    var deletemessage = document.createElement("p");
        deletemessage.setAttribute("id","delete")
        deletemessage.appendChild( document.createTextNode("Book Deleted"))
        document.body.insertBefore(deletemessage,document.querySelector(".container"))
    
        setTimeout(() => {
            document.body.removeChild(deletemessage)
           
       }, 1000);
}

function successmsg(){
        var successmessage = document.createElement("p");
        successmessage.setAttribute("id","success")
        successmessage.appendChild( document.createTextNode("Book Added"))
        document.body.insertBefore(successmessage,document.querySelector(".container"))
        
        setTimeout(() => {
                document.body.removeChild(successmessage)
        }, 1000);
}