// Gerekli değikenleri tanımladık
// Bu değişşkenleri HTML elementleri ile ilişkilendirdik
let inputValue = document.getElementById("input");
let message = document.getElementById("message-text");
let numberOfTries = document.getElementById("number-of-tries");

const maxInputValue = 100;
const minInputValue = 1;
const button = document.getElementById("btn");
const guessNumber = 78;
let remainingTries = 6;

// Butona her tıklandığında guessTheNumber fonksiyonu çalışır
button.addEventListener("click", guessTheNumber);

// Tahmin fonksiyonunu tanımladık
// Bu fonksiyon, kullanıcının girdiği değerleri kontrol eder, kalan deneme hakkını azaltır ve belirli mesajları döndürür. Oyun akışını yönetir.
function guessTheNumber() {
  // Kullanıcının girdiği değeri alır. Eğer girilien değer boşsa veya null ise uyarı verip fonksiyondan çıkar.
  if (inputValue.value === "" || inputValue.value === null) {
    message.innerHTML = "Lütfen bir tam sayı değer giriniz.";
    return;
  }

  //Kullanıcının girdiği değeri tam sayıya çevirir
  const userGuess = parseInt(inputValue.value);

  // Eğer girilen değer tam sayı değilse uyarı verip fonksiyondan çıkar.
  if (isNaN(userGuess)) {
    message.innerHTML = "Lütfen geçerli bir tam sayı giriniz.";
    inputValue.value = "";
    return;
  }

  // Kalan deneme hakkını bir azaltır ve HTML'de gösterir
  remainingTries--;
  numberOfTries.innerHTML = remainingTries;

  // Buradaki koşullar kullanıcının tahminini kontrol eder ve uygun mesajları gösterir
  if (userGuess < minInputValue || userGuess > maxInputValue)
    message.innerHTML = "Lütfen 1 ile 100 arasında bir değer giriniz.";
  else if (userGuess < guessNumber)
    message.innerHTML = "Daha büyük bir değer deneyin.";
  else if (userGuess > guessNumber)
    message.innerHTML = "Daha küçük bir değer deneyin.";
  else if (userGuess === guessNumber) {
    message.innerHTML = "Tebrikler, doğru bildiniz.";
    button.disabled = true;
  }

  // Eğer deneme hakkı biterse ve kullanıcı doğru sayıyı bulamamışsa oyunu bitirir ve doğru sayıyı gösterir
  if (remainingTries === 0 && userGuess != guessNumber) {
    message.innerHTML =
      "Deneme hakkınız bitti. Doğru sayı " + guessNumber + " idi";
    button.disabled = true;
    inputValue.disabled = true;
  }
}
