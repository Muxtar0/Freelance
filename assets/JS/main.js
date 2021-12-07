/*HEADER CONTENT BTNS */
const header_content_btn_1 = document.getElementById('header-content-btn-1');
const header_content_btn_2 = document.getElementById('header-content-btn-2');
const header_content_btn_3 = document.getElementById('header-content-btn-3');
const header_content_btn_4 = document.getElementById('header-content-btn-4');
const header_content_btn_5 = document.getElementById('header-content-btn-5');
const header_content_btn_6 = document.getElementById('header-content-btn-6');
const header_content_btn_7 = document.getElementById('header-content-btn-7');
header_content_btn_1.addEventListener('click' , (e) => {
  header_content_btn_1.classList.toggle('active');
  header_content_btn_2.classList.remove('active');
  header_content_btn_3.classList.remove('active');
  header_content_btn_4.classList.remove('active');
  header_content_btn_5.classList.remove('active');
  header_content_btn_6.classList.remove('active');
  header_content_btn_7.classList.remove('active');
})
header_content_btn_2.addEventListener('click' , (e) => {
  header_content_btn_2.classList.toggle('active');
  header_content_btn_1.classList.remove('active');
  header_content_btn_3.classList.remove('active');
  header_content_btn_4.classList.remove('active');
  header_content_btn_5.classList.remove('active');
  header_content_btn_6.classList.remove('active');
  header_content_btn_7.classList.remove('active');
})
header_content_btn_3.addEventListener('click' , (e) => {
  header_content_btn_3.classList.toggle('active');
  header_content_btn_1.classList.remove('active');
  header_content_btn_2.classList.remove('active');
  header_content_btn_4.classList.remove('active');
  header_content_btn_5.classList.remove('active');
  header_content_btn_6.classList.remove('active');
  header_content_btn_7.classList.remove('active');
})
header_content_btn_4.addEventListener('click' , (e) => {
  header_content_btn_4.classList.toggle('active');
  header_content_btn_1.classList.remove('active');
  header_content_btn_2.classList.remove('active');
  header_content_btn_3.classList.remove('active');
  header_content_btn_5.classList.remove('active');
  header_content_btn_6.classList.remove('active');
  header_content_btn_7.classList.remove('active');
})
header_content_btn_5.addEventListener('click' , (e) => {
  header_content_btn_5.classList.toggle('active');
  header_content_btn_1.classList.remove('active');
  header_content_btn_2.classList.remove('active');
  header_content_btn_3.classList.remove('active');
  header_content_btn_4.classList.remove('active');
  header_content_btn_6.classList.remove('active');
  header_content_btn_7.classList.remove('active');
})
header_content_btn_6.addEventListener('click' , (e) => {
  header_content_btn_6.classList.toggle('active');
  header_content_btn_1.classList.remove('active');
  header_content_btn_2.classList.remove('active');
  header_content_btn_3.classList.remove('active');
  header_content_btn_4.classList.remove('active');
  header_content_btn_5.classList.remove('active');
  header_content_btn_7.classList.remove('active');
})
header_content_btn_7.addEventListener('click' , (e) => {
  header_content_btn_7.classList.toggle('active');
  header_content_btn_1.classList.remove('active');
  header_content_btn_2.classList.remove('active');
  header_content_btn_3.classList.remove('active');
  header_content_btn_4.classList.remove('active');
  header_content_btn_5.classList.remove('active');
  header_content_btn_6.classList.remove('active');
})
/* SLIDEEEEEEEEE */
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


/* SCROOL SERVICE*/
const Header_Service_Section = document.getElementById('Header-Service-Section-ID');
window.addEventListener('scroll' , (e) => {
  if(window.scrollY>500){
    Header_Service_Section.style.position = 'sticky';
    Header_Service_Section.style.top = '0';
    Header_Service_Section.style.zIndex = '1000';
    Header_Service_Section.style.background = 'white';
    Header_Service_Section.style.boxShadow = 'rgba(0, 0, 0, 0.2) 0px 5px 10px 0px';
  }
  else{
    Header_Service_Section.style.position = 'relative';

  }

});


/* MAIN PROFILE TOGGLE */

const navbar_list = document.querySelector('.navbar-list');
const navbar_profile = document.querySelector('.navbar-profile');
const navbar_profile_list_toggle_main_div_id = document.getElementById('navbar-profile-list-toggle-main-div-id');
navbar_list.addEventListener('click' , (e) => {
  navbar_profile_list_toggle_main_div_id.classList.toggle('active');
})
navbar_profile.addEventListener('click' , (e) => {
  navbar_profile_list_toggle_main_div_id.classList.toggle('active');
})

/*MOBILE NAVBARRR */
const Mobile_Navbar_Icon = document.getElementById('Mobile-Navbar-Icon');
const Mobile_Navbar_Main_Menu_Container = document.querySelector('.Mobile-Navbar-Main-Menu-Container');
const Mobile_Navbar_Container = document.querySelector('.Mobile-Navbar-Container');
var cost = 0;
Mobile_Navbar_Icon.addEventListener('click' , (e) => {
  
    Mobile_Navbar_Icon.classList.toggle('is-active');
    Mobile_Navbar_Container.classList.toggle('active');
    Mobile_Navbar_Main_Menu_Container.classList.toggle('active');
    Category_Menu_Container.classList.remove('active');
    

})
/**/
/* BACK ICONS */
const Back_Icon_For_Category = document.querySelector('.Back-Icon-For-Category');
Back_Icon_For_Category.addEventListener('click' , (e) => {
  Category_Menu_Container.classList.remove('active');
  
})
/***/
const category = document.getElementById('category');
const Category_Menu_Container = document.querySelector('.Category-Menu-Container');
category.addEventListener('click' , (e) => {
  Category_Menu_Container.classList.toggle('active');

})
/* MOBILE NAVBAR CATEGORIES */
const Category_Menu_1 = document.querySelector('.Category-Menu-1 p');
const Category_Menu_2 = document.querySelector('.Category-Menu-2 p');
const Category_Menu_3 = document.querySelector('.Category-Menu-3 p');
const Category_Menu_4 = document.querySelector('.Category-Menu-4 p');
const Category_Menu_5 = document.querySelector('.Category-Menu-5 p');
const Category_Menu_6 = document.querySelector('.Category-Menu-6 p');
const Category_Menu_7 = document.querySelector('.Category-Menu-7 p');

Category_Menu_1.addEventListener( 'click' , (e) => {
  Category_Menu_1.classList.toggle('active');
  Category_Menu_2.classList.remove('active');
  Category_Menu_3.classList.remove('active');
  Category_Menu_4.classList.remove('active');
  Category_Menu_5.classList.remove('active');
  Category_Menu_6.classList.remove('active');
  Category_Menu_7.classList.remove('active');
});
Category_Menu_2.addEventListener( 'click' , (e) => {
  Category_Menu_2.classList.toggle('active');
  Category_Menu_1.classList.remove('active');
  Category_Menu_3.classList.remove('active');
  Category_Menu_4.classList.remove('active');
  Category_Menu_5.classList.remove('active');
  Category_Menu_6.classList.remove('active');
  Category_Menu_7.classList.remove('active');
});
Category_Menu_3.addEventListener( 'click' , (e) => {
  Category_Menu_3.classList.toggle('active');
  Category_Menu_1.classList.remove('active');
  Category_Menu_2.classList.remove('active');
  Category_Menu_4.classList.remove('active');
  Category_Menu_5.classList.remove('active');
  Category_Menu_6.classList.remove('active');
  Category_Menu_7.classList.remove('active');
});
Category_Menu_4.addEventListener( 'click' , (e) => {
  Category_Menu_4.classList.toggle('active');
  Category_Menu_1.classList.remove('active');
  Category_Menu_2.classList.remove('active');
  Category_Menu_3.classList.remove('active');
  Category_Menu_5.classList.remove('active');
  Category_Menu_6.classList.remove('active');
  Category_Menu_7.classList.remove('active');
});
Category_Menu_5.addEventListener( 'click' , (e) => {
  Category_Menu_5.classList.toggle('active');
  Category_Menu_1.classList.remove('active');
  Category_Menu_2.classList.remove('active');
  Category_Menu_3.classList.remove('active');
  Category_Menu_4.classList.remove('active');
  Category_Menu_6.classList.remove('active');
  Category_Menu_7.classList.remove('active');
});
Category_Menu_6.addEventListener( 'click' , (e) => {
  Category_Menu_6.classList.toggle('active');
  Category_Menu_1.classList.remove('active');
  Category_Menu_2.classList.remove('active');
  Category_Menu_3.classList.remove('active');
  Category_Menu_4.classList.remove('active');
  Category_Menu_5.classList.remove('active');
  Category_Menu_7.classList.remove('active');
});
Category_Menu_7.addEventListener( 'click' , (e) => {
  Category_Menu_7.classList.toggle('active');
  Category_Menu_1.classList.remove('active');
  Category_Menu_2.classList.remove('active');
  Category_Menu_3.classList.remove('active');
  Category_Menu_4.classList.remove('active');
  Category_Menu_5.classList.remove('active');
  Category_Menu_6.classList.remove('active');
});

/* SERVICE CHOIESSS */
const Servis_Seçənəkləri = document.getElementById('Servis-Seçənəkləri');
const Cost = document.getElementById('Cost');
const Time = document.getElementById('Time');
const Service_choise = document.querySelector('.Service-choise');
const Service_cost_div = document.querySelector('.Service-cost-div');
const Service_Time = document.querySelector('.Service-Time');
Servis_Seçənəkləri.addEventListener('click' , (e) => {
  Service_choise.classList.toggle('active');
  Servis_Seçənəkləri.classList.toggle('active');
  Service_cost_div.classList.remove('active');
  Cost.classList.remove('active');
  Time.classList.remove('active');
  Service_Time.classList.remove('active');
})
Cost.addEventListener('click' , (e) => {
  Service_cost_div.classList.toggle('active');
  Cost.classList.toggle('active');
  Service_choise.classList.remove('active');
  Servis_Seçənəkləri.classList.remove('active');
  Time.classList.remove('active');
  Service_Time.classList.remove('active');
})
Time.addEventListener('click' , (e) => {
  Time.classList.toggle('active');
  Service_Time.classList.toggle('active');
  Service_choise.classList.remove('active');
  Servis_Seçənəkləri.classList.remove('active');
  Service_cost_div.classList.remove('active');
  Cost.classList.remove('active');
})
/*               */
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', e => {
      button.classList.toggle('added');
  });
});

/**/




