function ChangeColor()
{
    var c1 = Math.floor(Math.random()*256);
    var c2 = Math.floor(Math.random()*256);
    var c3 = Math.floor(Math.random()*256);
    document.getElementById("motor").style.background = "rgb("+c1+","+c2+","+c3+")";
}
function Show()
{
    var c1 = Math.floor(Math.random()*256);
    var c2 = Math.floor(Math.random()*256);
    var c3 = Math.floor(Math.random()*256);
    document.getElementById("motor1").style.background = "rgb("+c1+","+c2+","+c3+")";

    if(document.getElementById("pick").value == "Blue")
    {
        document.getElementById("motor1").style.background = "blue";
    }
    else if(document.getElementById("pick").value == "Grey")
    {
        document.getElementById("motor1").style.background = "grey";
    }
    else if(document.getElementById("pick").value == "Green")
    {
        document.getElementById("motor1").style.background = "green";
    }
    else if(document.getElementById("pick").value == "Yellow")
    {
        document.getElementById("motor1").style.background = "yellow";
    }
    else if(document.getElementById("pick").value == "Light Blue")
    {
        document.getElementById("motor1").style.background = "lightblue";
    }
    else if(document.getElementById("pick").value == "Black")
    {
        document.getElementById("motor1").style.background = "black";
    }

}
function Reset()
{
    document.getElementById("motor").style.background = "white";
    document.getElementById("motor1").style.background = "white";
}