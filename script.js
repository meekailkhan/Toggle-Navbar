const [btn,sidebar] = [document.querySelector(".sideBtn"),document.querySelector(".sidebar")];
btn.addEventListener("click",function(e){ 
    sidebar.classList.contains('sidebar2') ? sidebar.classList.remove("sidebar2") : sidebar.classList.add('sidebar2');
})