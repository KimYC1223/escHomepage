let gotoNaver = () => {
  location.href='http://naver.me/Fppgb8MJ'
}

$(document).ready(function(){
    let str = ''
    for (let i = 0 ; i < HeaderImg.length ; i ++){
      str = str + HeaderImg[i] + '\n'
    }

    let str2 = ''
    for (let i = 0 ; i < HeaderImgBtn.length ; i ++){
      str2 = str2 + HeaderImgBtn[i] + '\n'
    }

    document.getElementById("headerImgDiv").innerHTML=
      document.getElementById("headerImgDiv").innerHTML+str

    document.getElementById("headerSelect").innerHTML=str2
    document.getElementById("headerImgText").innerHTML=HeaderText


    //============================================
    // For MainPage
    //============================================
    let currentTimeSpan = document.getElementById('currentTimeSpan')
    if (currentTimeSpan != null){
      let date = new Date()
      let currentTimeStr = '기준 시간 : '
      currentTimeStr += date.getFullYear() + '-'
      currentTimeStr += (date.getMonth()+1) + '-'
      currentTimeStr += date.getDate() + ' '
      currentTimeStr += date.getHours() + ':'
      currentTimeStr += date.getMinutes() + ':'
      currentTimeStr += date.getSeconds()
      currentTimeSpan.innerHTML = currentTimeStr;
    }
})
