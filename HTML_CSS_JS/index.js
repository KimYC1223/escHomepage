$(document).ready(function(){
    let str = ''
    for (let i = 0 ; i < HeaderImg.length ; i ++){
      str = str + HeaderImg[i] + '\n'
    }

    let str2 = ''
    for (let i = 0 ; i < HeaderImgBtn.length ; i ++){
      str2 = str2 + HeaderImgBtn[i] + '\n'
    }

    document.getElementById("headerImgDiv").innerHTML= document.getElementById("headerImgDiv").innerHTML+str;
    document.getElementById("headerSelect").innerHTML=str2
    document.getElementById("headerImgText").innerHTML=HeaderText
})
