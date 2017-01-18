function validateForm() 
{

    var x = document.getElementById('name').value;
    var a = document.getElementById('age').value;
    var p = document.getElementById('phone').value;
	var e = document.getElementById('email').value;
    
document.getElementById('here').innerText="Thank you for registering"+x;

     var i=0,f=0;


    while(i !=x.length-1 && x.length>=3)
    {
    	if((x.charAt(i)>='a'  && x.charAt(i)<='z')||(x.charAt(i)>=' A' &&x.charAt(i)<=' Z' )||x.charAt(i)==' ')
    	{
    		i++;
    		
    	}
    	else
    	{
			alert(" Name can only be in alphabets");
    		return false;
    	}
    } 
    		   
 		if(p.length  !=10)
		{
			alert("phone number should be exactly 10 digits");
			return false;
		}
    }