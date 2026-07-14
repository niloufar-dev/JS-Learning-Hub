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