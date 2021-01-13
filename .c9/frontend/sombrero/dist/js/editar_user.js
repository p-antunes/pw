window.onload = function() {
    let id_edit =localStorage.getItem("user_id");
    let name_edit = localStorage.getItem("user_name");
    let cc_edit = localStorage.getItem("user_cc");
    let morada_edit = localStorage.getItem("user_morada");
    let nacio_edit = localStorage.getItem("user_nacio");
    let cargo_edit = localStorage.getItem("user_cargo");
    let nasci_edit = localStorage.getItem("user_nasci");
    let contact_edit = localStorage.getItem("user_contact");
    
    document.getElementById("alt_id").value = id_edit;
    document.getElementById("alt_name").value = name_edit;
    document.getElementById("alt_cc").value = cc_edit;
    document.getElementById("alt_address").value = morada_edit;
    document.getElementById("alt_natio").value = nacio_edit;
    document.getElementById("alt_cargo").value = cargo_edit;
    document.getElementById("alt_nasci").value = nasci_edit;
    document.getElementById("alt_contact").value = contact_edit;
};