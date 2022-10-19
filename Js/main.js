/*----------hide all sections except active---------*/
(()  =>{

    const sections =document.querySelectorAll(".section");
    sections.forEach((section) =>{
        if(!section.classList.contains("active")){
            section.classList.add("hide");
        }
    })

   /*  const sections = document.querySelectorAll(".section");
    console.log(sections) */
})();

/*-------------navigation menu ----------*/
(()  =>{

   const hamburgerBtn = document.querySelector(".hamburger-btn"),
   navMenu = document.querySelector(".nav-menu"),
   closeNavBtn = navMenu.querySelector(".close-nav-menu");

   hamburgerBtn.addEventListener("click", showNavMenu);
   closeNavBtn.addEventListener("click", hideNavMenu)

   function showNavMenu(){
    navMenu.classList.add("open");
   }

   function hideNavMenu(){
    navMenu.classList.remove("open");
    fadeOutEffect();
   }
   
   function fadeOutEffect(){
    document.querySelector(".fade-out-effect").classList.add("active");
    setTimeout(() =>{
        document.querySelector(".fade-out-effect").classList.remove("active");
    },300)
   }

   document.addEventListener("click", (event) =>{
     if(event.target.classList.contains('link-item')){
        /*make sure event.target.hash has value before */
        if(event.target.hash !==""){
            //prevent dedfault anchor click behavior
            event.preventDefault()
            const hash = event.target.hash;
            //desactiver 'section' active existant
            document.querySelector(".section.active").classList.add("hide");
            document.querySelector(".section.active").classList.remove("active");
            // activate new 'section'
            document.querySelector(hash).classList.add("active");
            document.querySelector(hash).classList.remove("hide");
            //desactiver 'link-item' active existant
            navMenu.querySelector(".active").classList.add("outer-shadow","hover-in-shadow");
            navMenu.querySelector(".active").classList.remove("active","inner-shadow");
            // activation nv navigation menu 'link-item'
            event.target.classList.add("active","inner-shadow");
            event.target.classList.remove("outer-shadow","hover-in-shadow");
            // hide nav menu
            hideNavMenu();
        }
     }
   })

})();