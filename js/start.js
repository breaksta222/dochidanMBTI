const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");

const endPoint = 20;
const select = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function calResult(){
  console.log(select);
  var result = select.indexOf(Math.max(...select));
  return result;
}

function setResult(){
  let point = calResult();
  const resultName = document.querySelector('.resultname');
  resultName.innerHTML = infoList[point].name;

  var resultImg = document.createElement('img');
  const imgDiv = document.querySelector('#resultImg');
  var imgURL = 'img/image-' + point + '.png';
  resultImg.src = imgURL;
  resultImg.alt = point;
  resultImg.classList.add('img-fluid');
  imgDiv.appendChild(resultImg);

  const resultDesc = document.querySelector('.resultDesc');
  resultDesc.innerHTML = infoList[point].desc;
}

function goResult(){
  qna.style.WebkitAnimation = "fadeOut 1s";
  qna.style.animation = "fadeOut 1s";
  setTimeout(() => {
    result.style.WebkitAnimation = "fadeIn 1s";
    result.style.animation = "fadeIn 1s";
    setTimeout(() => {
      qna.style.display = "none";
      result.style.display = "block"
    }, 450)})
    setResult();
}

function ImageFadeOut(qIdx, idx){
  var elem=0;
  var left = document.querySelector('.leftImage');
  var right = document.querySelector('.rightImage');
  left.disabled = true;
  left.classList.remove("fadeIn");
  left.classList.add("fadeOut");
  right.disabled = true;
  right.classList.remove("fadeIn");
  right.classList.add("fadeOut");

  setTimeout(() =>{
    if(qIdx+1 === endPoint){
      goResult();
      return;
    } else{
      setTimeout(() => {
        var target = qnaList[qIdx].a[idx].type;
        for(let i = 0; i < target.length; i++){
          select[target[i]] += 1;
        }

        change(qIdx,left,leftfiles);
        change(qIdx,right,rightfiles);
        del(leftfiles);
        del(rightfiles);
        
        goNext(++qIdx);
      },900);
    }
  },900)

}

function del(arr){
  var arr=[];
  var shiftResult=arr.shift();

} //배열의 첫번째 요소 삭제 함수

function goNext(qIdx){
  /*var index=0;
  if(qIdx<=4){
    index=0;
  }
  else(qIdx<=9)
  {
    index=5;
  }
  else(qIdx<=14)
  {
    index=10;
  }
  else(qIdx<=19)
  {
    index=15;
  }
  var q = document.querySelector('.qBox');
  q.innerHTML = qnaList[index].q; */

  var left = document.querySelector('.leftImage');
  var right = document.querySelector('.rightImage');
  var qnaURL = './img/question/';
  
  if(qIdx===0){
  left.src='./img/question/1-1-A.jpg';
  right.src='./img/question/1-1-B.jpg';
  
  //left.src = qnaURL + qIdx + '-A.png';
  //right.src = qnaURL + qIdx + '-B.png';
  }

  try {
    left.classList.remove("fadeOut");
    right.classList.remove("fadeOut");
  } catch (e) {
    console.log(e);
  }
  left.classList.add("fadeIn");
  right.classList.add("fadeIn");

  left.addEventListener("click", function(){
    var target = qnaList[qIdx].a[0].type;
    ImageFadeOut(qIdx ,0);
    
  }, false);

  right.addEventListener("click", function(){
    var target = qnaList[qIdx].a[1].type;
    ImageFadeOut(qIdx, 1);
  }, false);

  var status = document.querySelector('.statusBar');
  status.style.width = (100/endPoint) * (qIdx) + '%';
}
/**
 * 파일명에서 확장자명 추출
 * @param filename   파일명
 * @returns _fileExt 확장자명
 */
function getExtensionOfFilename(filename) {
 
  var _fileLen = filename.length;

  /** 
   * lastIndexOf('.') 
   * 뒤에서부터 '.'의 위치를 찾기위한 함수
   * 검색 문자의 위치를 반환한다.
   * 파일 이름에 '.'이 포함되는 경우가 있기 때문에 lastIndexOf() 사용
   */
  var _lastDot = filename.lastIndexOf('.');

  // 확장자 명만 추출한 후 소문자로 변경
  var _fileExt = filename.substring(_lastDot, _fileLen).toLowerCase();

  return _fileExt;
}

function begin(){
  main.style.WebkitAnimation = "fadeOut 1s";
  main.style.animation = "fadeOut 1s";
  setTimeout(() => {
    qna.style.WebkitAnimation = "fadeIn 1s";
    qna.style.animation = "fadeIn 1s";
    setTimeout(() => {
      main.style.display = "none";
      qna.style.display = "block"
    }, 450)
    let qIdx = 0;
    goNext(qIdx);
  }, 450);
}

var leftfiles = [//"./img/question/1-1-A.jpg",
                 "./img/question/1-2-A.jpg",
                 
             "./img/question/1-3-A.gif",
             "./img/question/1-4-A.gif",
             "./img/question/1-5-A.gif",
             "./img/question/2-1-A.jpg",
             "./img/question/2-2-A.jpg",
             "./img/question/2-3-A.gif",
             "./img/question/2-4-A.jpg",
             "./img/question/2-5-A.jpg",
             "./img/question/3-1-A.gif",
                "./img/question/3-2-A.gif",
                  "./img/question/3-3-A.gif",
                  "./img/question/3-4-A.gif",
                  "./img/question/3-5-A.gif",
                  "./img/question/4-1-A.jpg",
                  "./img/question/4-2-A.jpg",
                  "./img/question/4-3-A.jpg",
                  "./img/question/4-4-A.gif",
                  "./img/question/4-5-A.gif",
             ];

var rightfiles = [//"./img/question/1-1-B.jpg",
             "./img/question/1-2-B.jpg",
             "./img/question/1-3-B.gif",
             "./img/question/1-4-B.gif",
             "./img/question/1-5-B.gif",
             "./img/question/2-1-B.jpg",
             "./img/question/2-2-B.jpg",
             "./img/question/2-3-B.gif",
             "./img/question/2-4-B.jpg",
             "./img/question/2-5-B.jpg",
             "./img/question/3-1-B.gif",
             "./img/question/3-2-B.gif",
             "./img/question/3-3-B.gif",
             "./img/question/3-4-B.gif",
             "./img/question/3-5-B.gif",
             "./img/question/4-1-B.jpg",
             "./img/question/4-2-B.jpg",
             "./img/question/4-3-B.jpg",
             "./img/question/4-4-B.gif",
             "./img/question/4-5-B.gif",
             ];

var imgs = new Array();
/*for(var i=0; i<leftfiles.length; i++) {
    imgs[i] = new Image(); // 이미지 객체 생성
    imgs[i].src = leftfiles[i]; // 이미지 미리 로딩
}

for(var i=0; i<rightfiles.length; i++) {
    imgss[i] = new Image(); // 이미지 객체 생성
    imgss[i].src = rightfiles[i]; // 이미지 미리 로딩
}*/
/*function makeImage() {
  var img = document.createElement('img')
  img.src = leftfiles[index];
  document.getElementById('content').appendChild(img);
}
*/
function change(qIdx,img,leftfiles) {
  
  img.src = leftfiles[qIdx];
  
}
/*function change2(qIdx,img2) {
  
  img2.src = rightfiles[qIdx];
  
}
function change3(qIdx,img3) {
  
  img3.src = leftfiles2[qIdx];
  
}
function change4(qIdx,img4) {
  
  img4.src = rightfiles2[qIdx];
  
}*/

