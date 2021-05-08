function Bold() 
{    
    document.getElementById("text2-0-2-1").style.fontWeight = "bold";
}
  
function Italic() 
{    
    document.getElementById("text2-0-2-1").style.fontStyle = "italic";
}
  
function LeftAlign() 
{
    document.getElementById("text2-0-2-1").style.textAlign = "left";
}
  
function CenterAlign() 
{
    document.getElementById("text2-0-2-1").style.textAlign = "center";
}
  
function RightAlign() 
{
    document.getElementById("text2-0-2-1").style.textAlign = "right";
}
  
function UpperCase() 
{
    document.getElementById("text2-0-2-1").style.textTransform = "uppercase";
}
  
function LowerCase() 
{
    document.getElementById("text2-0-2-1").style.textTransform = "lowercase";
}
  
function CapitalizeText() 
{
    document.getElementById("text2-0-2-1").style.textTransform = "capitalize";
}
  
function ClearText() 
{
    document.getElementById("text2-0-2-1").style.fontWeight = "normal";
    document.getElementById("text2-0-2-1").style.textAlign = "left";
    document.getElementById("text2-0-2-1").style.fontStyle = "normal";
    document.getElementById("text2-0-2-1").style.textTransform = "capitalize";
    document.getElementById("text2-0-2-1").value = " ";
}