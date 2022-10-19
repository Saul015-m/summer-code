var touchbout=document.getElementById("chatbtn")
var chatbox= document.getElementById("chatbox")
var a
touchbout.onclick=function show_hide()
    {
        if(a==1)
        {
            chatbox.style.display="none";
            chatbox.style.animation="ease-in-out 1s";
            return a=0;
        }
        else
        {
            chatbox.style.display="block";
            chatbox.style.animation="ease-in-out 1s";
            return a=1;
        }
    }