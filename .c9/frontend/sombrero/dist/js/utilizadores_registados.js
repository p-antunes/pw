let c = 0; 
  function pop() {
    if(c== 0){
      document.getElementById("alert_box").style.display = "block";
      c= 1;
    }else{
      document.getElementById("alert_box").style.display = "none";
      c= 0;
    }
  }
  

function getRowIndex(element) {
    var rowJavascript = element.parentNode.parentNode;
    var rowIndex = rowJavascript.rowIndex;
    
    document.getElementById("table_aprove").deleteRow(rowIndex);
        
  }