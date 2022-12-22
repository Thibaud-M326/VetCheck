const backButton = document.getElementById("back-button");
const petDogCatBox = document.getElementsByClassName("pet-dog-cat-box");


backButton.addEventListener("click", BackToVetHome);

function BackToVetHome() {
    window.location.href="../1Temp-Login/TempVetPage.html"

}



for(let i = 0; i < petDogCatBox.length; i++) {
    petDogCatBox[i].addEventListener("click", goToAnimalDetail);
    
}

function goToAnimalDetail() {
    window.location.href="../3 Animal Detail/AnimalDetail.php";

}