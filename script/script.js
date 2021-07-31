const filterCont=document.querySelector(".gallery-filter"),
      galleryItems =document.querySelectorAll(".gallery-item");

filterCont.addEventListener("click",(event)=>{
    if(event.target.classList.contains("filter-item")){
        filterCont.querySelector('.active').classList.remove('active');
        event.target.classList.add('active');
        const filterVal=event.target.getAttribute("data-filter");
        galleryItems.forEach((item)=>{
            if(item.classList.contains(filterVal)){
                item.classList.remove("hide");
                item.classList.add("show")
            }
            else{
                item.classList.remove("show");
                item.classList.add("hide")
            }
            if(filterVal === 'all'){
                item.classList.remove("hide");
                    item.classList.add("show")
            }
        });
        
    }
});

const faqs=document.querySelectorAll('.faq-div');
faqs.forEach(faq =>{
    faq.addEventListener('click',()=>{
        faq.classList.toggle('active');
        
        
    });
});

const icon=document.querySelector('.icon');
const navlink=document.querySelector('.nav-link ul');
icon.addEventListener('click',icontoggle);
function icontoggle(){
    navlink.classList.toggle('show')
};
AOS.init();