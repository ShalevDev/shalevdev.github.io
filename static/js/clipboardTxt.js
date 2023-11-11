
function popin(clipboardId,text){
    navigator.clipboard.writeText(text);
    var txtBox = document.getElementById(clipboardId);
    txtBox.style.opacity=1;
    setTimeout(() => {
          txtBox.style.opacity=0;
  
    }, 1500);
}

