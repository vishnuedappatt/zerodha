function values(val)
{
document.getElementById("screen").value=document.getElementById("screen").value+val

}
function clearScrn()
{
    document.getElementById("screen").value=""
}
function result(){
    var tex=document.getElementById("screen").value
    var res=eval(tex)
    document.getElementById("screen").value=res

}
function backspace(val){
    document.getElementById("screen").value=  document.getElementById("screen").value/10-(  document.getElementById("screen").value%10)/10
}