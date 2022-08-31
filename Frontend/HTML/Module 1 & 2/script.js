function initiate()
{
    var saveButton = document.getElementById('save')
    var retriveButton = document.getElementById('retrive')
    saveButton.addEventListener('click',saveItem);
    retriveButton.addEventListener('click',retriveItem);
}

    function saveItem()
    {
        var key = document.getElementById('key').value;
        var value = document.getElementById('value').value;
        sessionStorage[key] = value;}
    function retriveItem(){
        var data = document.getElementById('data');
        var key = document.getElementById('key').value;
        var value = sessionStorage[key];
        data.innerHTML = '<div>' + key + ':' + value + '<div>';
    }
addEventListener("load",initiate);