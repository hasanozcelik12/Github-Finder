// diğer js dosyalarından gelenler 
import Github from "./github.js" ;
import UI from "./ui.js" ;

// github class'ının bir örneğini oluşturma 

const github = new Github()
const ui = new UI()


//! html den gelenler 
const searchInput = document.getElementById("search-input")
const searchButton = document.getElementById("search-btn")
const themeBtn = document.getElementById('theme-btn')
const body = document.querySelector('body')

//! Olay İzleyicileri
searchButton.addEventListener('click',getInput)
searchInput.addEventListener('keypress',(e) => {

    if(e.code === "Enter"){
        getInput()
    }

} )

themeBtn.addEventListener('click',changeTheme)

//! Methodlar
function getInput() {
    // Arama terimi boş değilse bunları yapsın
    if(searchInput.value !== "") {
        //kullanıcı bilgileri ve repolar api isteği at 
github.getUser(searchInput.value).then((data) => {
    // eğer kullanıcı bulunamadıysa 
    if(data.profile.message === "Not Found"){
        ui.showAlert('Aradığınız Kullanıcı Bulunamadı',"alert-danger")
      
    } else {
        ui.showAlert('Kullanıcı Başarıyla Bulundu',"alert-success")
          // Api cevabına göre şekillenen 
// kullanıcı detay alanını ekrana bas
ui.showProfile(data.profile);

// Repoları ekrana bas
ui.showRepos(data.repos)
    }
  
})

return;
    }
    // arama terimi boş ise 
    ui.showAlert('Form Alanı Boş Olamaz','alert-info')


}

function changeTheme(){
    //  arkaplanı değiştirme
    body.classList.toggle("bg-dark")
    body.classList.toggle('text-bg-dark')

    if(body.classList.contains('bg-dark')) {
        themeBtn.innerText='Açık Mod'
    } else {
        themeBtn.innerText='Koyu Mod'
    }
}