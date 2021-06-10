const xbox_item=document.querySelector('.xbox-item'),
      courses_item=document.querySelector('.courses-item'),
      documents_item=document.querySelector('.documents-item'),
      xbox_bar=document.querySelector('.xbox-bar'),
      courses_bar=document.querySelector('.courses-bar'),
      documents_bar=document.querySelector('.documents-bar'),
      back_xbox_bar=document.querySelector('.back-xbox-bar'),
      back_courses_bar=document.querySelector('.back-courses-bar'),
      back_documents_bar=document.querySelector('.back-documents-bar'),
      hamburger=document.querySelector('.hamburger'),
      mobile_nav=document.getElementById('mobile-nav'),
      page_container=document.querySelector('.page-container'),
      show_btn=document.querySelector('.show-btn'),
      closeModal=document.querySelector('.close-modal'),
      modal=document.querySelector('.modal-search'),
      col_2=document.querySelector('.col-2'),
      slider=document.getElementById('slider')

  function eventListeners(){
    //Translate Drawer Items
    xbox_item.addEventListener('click',function(e){
     xbox_bar.style.left='0';
    e.preventDefault();
    })
    documents_item.addEventListener('click',function(e){
     documents_bar.style.left='0';
    e.preventDefault();
    })
    courses_item.addEventListener('click',function(e){
     courses_bar.style.left='0';
    e.preventDefault();
    })

    back_xbox_bar.addEventListener('click',function(e){
      xbox_bar.style.left='-100%';
      e.preventDefault();
    })
    back_courses_bar.addEventListener('click',function(e){
      courses_bar.style.left='-100%';
      e.preventDefault();
    })
    back_documents_bar.addEventListener('click',function(e){
      documents_bar.style.left='-100%';
      e.preventDefault();
    })

   //Translate Drawer Menu
    page_container.addEventListener('click',function(e){
      if(e.target.className=='hamburger'){
        mobile_nav.style.left="0"
        this.classList.add('overlay')
        this.style.left='400px'
        if(window.innerWidth<1000){
          this.style.left='200px'
        }
      }else{
        mobile_nav.style.left='-100%'
        this.classList.remove('overlay');
        this.style.left='0'
      }
    })
    //Show & Close Modal
    show_btn.addEventListener('click',function(e){
      modal.classList.add('active-modal');
      modal.previousElementSibling.style.display='block'
    })
    closeModal.addEventListener('click',function(){
      modal.classList.remove('active-modal')
      modal.previousElementSibling.style.display='none'
    })

    //Key Event
    document.addEventListener('keydown',function(){
      modal.previousElementSibling.style.display='none'
      modal.classList.remove('active-modal')
    })
    //Resizing Event;
    function removingModal(){
      if(window.innerWidth>1060){
        modal.classList.remove('active-modal')
        modal.previousElementSibling.style.display='none'
      }
    }
    window.addEventListener('resize',removingModal)

      //Scroll Event
      document.addEventListener('scroll',function(){
        if(window.scrollY>slider.getBoundingClientRect().top *150){
          col_2.classList.add('fixed-menu')
        }else{
          col_2.classList.remove('fixed-menu')
        }
  })

  }
  eventListeners();

//Owl Carousel
function owlCarousel(){
  const imgs=document.querySelectorAll('.image-container img'),
        prev=document.getElementById('prev'),
        next= document.getElementById('next');
  
  let index=0;
  let interval=setInterval(run, 2000)
  function run(){
  index++;
  changeImage();
  }
  
  function changeImage(){
  if(index>imgs.length-1){
    index=0;
  }else if(index<0){
    index=imgs.length-1;
  }
  
  imgs.forEach((img)=>{
    img.style.transform=`translateX(${index *100}%)`
  })
  }

function resetingInterval(){
  clearInterval(interval);
  interval=setInterval(run,2000)
}

prev.addEventListener('click',function(){
  index--;
  changeImage();
  resetingInterval();
})

next.addEventListener('click',function(){
  index++;
  changeImage();
  resetingInterval();
})
}
owlCarousel();