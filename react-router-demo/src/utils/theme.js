
//Function works as should, but I don't know the code to toggle 
//light mode and dark mode. LocalStorage works though...
export function applySavedTheme(){
    const saved = localStorage.getItem("theme");

    if(saved === "dark" || saved === "light"){
        document.documentElement.setAttribute("data-theme", saved);
    }else{
        document.documentElement.removeAttribute("data-theme");
    }

}