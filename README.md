# Sayı Tahmin Oyunu

<table align="center-left">
 <tr>
   <td><img src="https://github.com/omeraslanw/gecekodu-backend/blob/main/skylab%20logo.png?raw=true" alt="SKY LAB LOGO" width="200"/></td>
   <td><img src="https://github.com/omeraslanw/gecekodu-backend/blob/main/weblab%20logo.png?raw=true" alt="WEB LAB LOGO" width="200"/></td>
 </tr>
</table>

Bu proje, HTML, CSS ve JavaScript kullanılarak oluşturulmuş basit bir sayı tahmin oyunudur. **Sky Lab Bootcamp Web 101** eğitimi kapsamında geliştirilmiştir.

## Proje Hakkında

Oyunun amacı, 1 ile 100 arasında rastgele belirlenmiş bir sayıyı, size verilen deneme hakkı bitmeden tahmin etmektir. Her yanlış tahminde, doğru sayıya ulaşmanız için size "daha yüksek" veya "daha düşük" bir sayı girmeniz gerektiği yönünde ipuçları verilir.

## Özellikler

- 1 ile 100 arasında rastgele belirlenen bir sayıyı tahmin etme.
- Yapılan her tahminde kullanıcıya "daha yüksek" veya "daha düşük" şeklinde yönlendirme.
- Sınırlı sayıda deneme hakkı.
- Oyun sonunda kazanma veya kaybetme durumuna göre bilgilendirme mesajları.
- Boş veya geçersiz (1-100 dışı) girişlere karşı kullanıcıyı uyarma.

## Geliştirme Ödevleri (Beklenen Yeni Özellikler)

Bu projeyi daha da geliştirmek için aşağıdaki özellikleri ekleyebilirsiniz:

1.  **CSS Tasarımını Özelleştirme:** `style.css` dosyasını düzenleyerek oyuna kendi zevkinize göre modern ve şık bir görünüm kazandırın.
2.  **Yeniden Başlat Butonu:** Oyunu sıfırlayacak bir "Yeniden Başlat" butonu ekleyin. Bu butona tıklandığında kalan deneme hakkı, deneme sayısı ve mesajlar başlangıç durumuna dönmelidir.
3.  **Rastgele Sayı Üretimi:** Şu anki sabit sayı yerine, oyun her başladığında ve "Yeniden Başlat" butonuna her basıldığında 1 ile 100 arasında rastgele yeni bir sayı üretilmesini sağlayın. (`Math.random()` fonksiyonunu araştırabilirsiniz.)
4.  **Yapılan Deneme Sayacı:** Kalan deneme hakkının yanı sıra, kullanıcının o ana kadar kaç deneme yaptığını gösteren yeni bir alan ekleyin. Bu sayaç her tahminde bir artmalıdır.

## Kullanılan Teknolojiler

- **HTML5:** Sayfanın temel iskeleti ve içeriği.
- **CSS3:** Sayfanın stil ve tasarımı.
- **JavaScript:** Oyunun tüm mantığı ve interaktif özellikleri.

## Nasıl Çalıştırılır?

1. Proje dosyalarını bilgisayarınıza indirin veya `git clone` komutu ile klonlayın.
2. Ana dizinde bulunan `index.html` dosyasına çift tıklayarak herhangi bir web tarayıcısında açın.

## Ekran Görüntüsü

![Oyun Ekran Görüntüsü](https://github.com/omeraslanw/SkyLabBootcamp-25-Web101/blob/main/anasayfa.png)
