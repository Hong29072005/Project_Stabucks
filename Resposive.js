function showmenu(){
    document.getElementById('menu').style='margin-left:-9%;z-index:1';
    document.getElementById('cancel_bar').style='display:block;margin-left:15rem'
    document.getElementById('bar').style='display:none';
    document.getElementById('h3').style='display:none';
    document.getElementById('h4').style='display:none';
    document.getElementById('hr').style='display:none';
   
    
}
function closemenu(){
    document.getElementById('menu').style='margin-left:100%';
    document.getElementById('bar').style='display:block'
    document.getElementById('cancel_bar').style='display:none';
    document.getElementById('h3').style='display:block';
    document.getElementById('h4').style='display:block';
    document.getElementById('hr').style='display:block';
}
