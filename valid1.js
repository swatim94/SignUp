function validateForm1() 
{

    var x = window.location.href; 
    var i=0;var j=0;var k=0;  
    while(i !=x.length-1)
    {
        if(x.charAt(i)=='?' )
           j=i; 
        
        else if(x.charAt(i)=='&' )
        {
            k=j;
        var sc=x.substring(j,++k);
        break;
    }


        }
        while(i !=sc.length-1 && sc.length>=3)
        {
        if(sc.charAt(i)=='?' )
           j=i; 
        
       
        var sc1=.substring(j,sc.length);
        break;
         }


        }
    } 