const darkmod=document.querySelector('.dark-mod')
darkmod.addEventListener('click',()=>{
      document.documentElement.classList.toggle("dark");
      if(document.documentElement.classList.contains('dark')){
        darkmod.innerHTML='☀️'
      }else{
        darkmod.innerHTML='🌙'
      }
    
})