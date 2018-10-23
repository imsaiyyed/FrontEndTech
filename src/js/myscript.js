$(document).ready(function(){
    console.log("here");

    $("#Save").on("click",function(){
        console.log("here");
        let name,mob,address;
        name=$("#name").val();
        mob=$("#mob").val();
        address=$("#address").val();
        if(name=="" || mob=="" || address=="")
        {
            $("#data").html('<p>Please enter all fields</p>');
        }
        else
        {
            $("#data").html('Name:'+name+'<br>'+'Mobile:'+mob+'<br>'+'Address:'+address);

        }
    });
});