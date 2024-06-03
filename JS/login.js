
function logincheck() {
    //alert('Welcome');
    var x = document.getElementById('uname').value;
    console.log('Any Message   : ' + x);
    if (x == 'admin')
        {
        alert('Welcome ' + x);
        // Single Line

        /* multi Line Comment */


         var gender=document.getElementById('gender').value;
         alert(gender);
         var age=document.getElementById('age').value;
         if(age > 18)
            {
                // for checking 
                console.log('Eligiable for DL')
            }
            else{
                console.log('Not Eligiable for DL')
            }
}

    else
    {
        alert('Wrong UserName');
    }

}
