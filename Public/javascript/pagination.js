// const ulTag=document.getElementById('ulpagination')

// function element(totalpages,page){
//   let liTag=''
//   let previouspage=page-1;
//   let nextpage=page+1;

//   if(page>1){
//     liTag+='<li class="page-item" style="width: 120px;"><a class="page-link" href="#">Previous</a></li>'

//   }
//   // for(pagelength=previouspage;pagelength<=totalpages;pagelength++){
//   //   liTag+=`<li class="page-item "><a class="page-link" href="#">${pagelength}</a></li>`
//   // }

//   if(page<totalpages){
//     liTag+=' <li class="page-item" style="width: 120px;"><a class="page-link" href="#">Next</a></li> -->'
//   }
//   ulTag.innerHTML=liTag
// }

// element(6,2)
// let thispage=1;
// let limit=8;
// let list=document.querySelectorAll('.card')

// function Loaditem(){
//   let begainGet=limit*(thispage-1)
//   let EndGet=limit*thispage-1;
//   list.forEach((card,key)=>{
//     if(key >=begainGet && key <=EndGet){
//       card.style.display='block'
//     }
//     else{
//       card.style.display='none'
//     }
//   })
//   listpage()
// }
// Loaditem()
// function listpage(){
//   let count=Math.ceil(list.length/limit)
//   document.querySelector('.pagination').innerHTML=''

//   if(thispage !=1){
//     let previous=document.createElement('li')
//     previous.innerText='Previous'
//     previous.style.width='80px'
//     previous.setAttribute('onclick','changepage("+(thispage-1)+")')
//     document.querySelector('.pagination').appendChild(previous)
//   if(thispage!=count){
//     let next=document.createElement('li')
//     next.innerText='next'
//     next.style.width='80px'
//     next.setAttribute('onclick','changepage("+(thispage1)+")')
//     document.querySelector('.pagination').appendChild(next)
//   }
    

//   }
//   for(i=1;i<=count;i++){
//     let newPage=document.createElement('li')
//     newPage.innerText=i;
//     if (i==thispage){
//       newPage.classList.add('active')
//     }
//     newPage.setAttribute('onclick',"changepage("+ i +")");
//     document.querySelector('.pagination').appendChild(newPage)
//   }
//   if(thispage!=count){
//     let next=document.createElement('li')
//     next.innerText='next'
//     next.style.width='80px'
//     next.setAttribute('onclick','changepage("+(thispage1)+")')
//     document.querySelector('.pagination').appendChild(next)
//   }
    
// }
// function changepage(i){
//   thispage=i;
//   Loaditem()
// }
