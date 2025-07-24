//dark mode

const toggleBtn= document.getElementById("mode-toggle");
const btn=document.getElementById("hero-btn");
const footer=document.getElementById("footer");
const boxes = document.querySelectorAll(".box");
const motor = document.querySelectorAll(".motor-category");

let acikMi=false;
toggleBtn.addEventListener("click", () => {
    acikMi=!acikMi;
    boxes.forEach(box => {
      if (acikMi) {
          box.classList.add("box-dark");
      } else {
          box.classList.remove("box-dark");
      }
  });

 
  motor.forEach(m => {
    if (acikMi) {
        m.classList.add("motor-category-dark");
       
    } else {
        m.classList.remove("motor-category-dark");
    }
});







    if(acikMi){
        document.body.style.backgroundColor="#28572C";
        document.body.style.color="white";
        footer.classList.remove("ligthfooter");
        footer.classList.add("darkfooter");
       

        if(btn){

        
        btn.classList.remove("cta-btn");
        btn.classList.add("cta-btn-dark");}
        
        
    }else{
        document.body.style.backgroundColor="white";
        document.body.style.color="#28572C";

if(btn){


        btn.classList.remove("cta-btn-dark");
        btn.classList.add("cta-btn");
    
    }


        footer.classList.remove("darkfooter");
        footer.classList.add("ligthfooter");
        
        
        
        
    }
   
    
});

// Sayfa kaydırıldıkça animasyonla göster
const sections = document.querySelectorAll('.section');

const showOnScroll = () => {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionTop < screenHeight - 100) {
      section.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', showOnScroll);
window.addEventListener('load', showOnScroll);