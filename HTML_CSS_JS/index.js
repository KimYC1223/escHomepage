$(document).ready(function(){
    let str = ''
    for (let i = 0 ; i < HeaderImg.length ; i ++){
      str = str + HeaderImg[i] + '\n'
    }


    document.getElementById("headerImgDiv").innerHTML= document.getElementById("headerImgDiv").innerHTML+str;
    document.getElementById("headerImgText").innerHTML=HeaderText
})
