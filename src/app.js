const darkmod=document.querySelector('.dark-mod')
const question=document.querySelector('.qu')


darkmod.addEventListener('click',()=>{
      document.documentElement.classList.toggle("dark");
      if(document.documentElement.classList.contains('dark')){
        darkmod.innerHTML='☀️'
      }else{
        darkmod.innerHTML='🌙'
      }
    
})

question.addEventListener('click',(e)=>{
    const ask = e.target.closest('.ask')
    
    const btn=ask.querySelector('button')
    console.log(btn)
    
    const answer= ask.nextElementSibling
    const open=answer.style.maxHeight
    const ans = document.querySelectorAll('.ans')
    const assigns=document.querySelectorAll('.ask button')
    console.log(assigns);
    
    console.log(ans);
    

    ans.forEach((item)=>{
    item.style.maxHeight=''
    assigns.forEach((val)=>{
        val.style.rotate='0deg'
    })
    })
    if(!open){
        answer.style.maxHeight = answer.scrollHeight + "px";
        btn.style.rotate='45deg'
    }
    
})

////////////////////////////////////tab///////////////////////////////////////


const tab =document.querySelector('.tab')
const contant=document.querySelectorAll('.contant')
const bttab = document.querySelectorAll('.bttab')


tab.addEventListener('click',(e)=>{

    const target =e.target.closest('button')
    const data= target.dataset.id
    console.log(data);
    bttab.forEach((val)=>{
        val.classList.remove('active')
    })
    contant.forEach((item)=>{
        if(data== item.id){
            item.classList.remove('hidden')
            target.classList.add('active')
            setTimeout(() => {
            item.classList.remove("opacity-0", "translate-y-5");
            item.classList.add("opacity-100", "translate-y-0");
            }, 10);
            
            
            

        }else{
            item.classList.add('hidden')
            item.classList.remove("opacity-100", "translate-y-0");
            item.classList.add("opacity-0", "translate-y-5");
            
        }

        
        
    })
    
    
})