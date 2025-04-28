//formun gönderilmesi
document.getElementById('lyricsForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Sayfanın yenilenmesini engeller
  // Kullanıcıdan artist ve şarkı ismi bilgilerini alıyoruz

    const artist = document.getElementById('artist').value.trim();
    const song = document.getElementById('song').value.trim();
    const lyricsOutput = document.getElementById('lyrics');
// Kullanıcıdan alınan bilgileri kontrol ediyoruz
    // Eğer artist veya şarkı ismi boşsa hata mesajı gösteriyoruz
    if (!artist || !song) {
      lyricsOutput.textContent = 'Please enter both artist and song name.';
      return;
    }
  // Lyrics.ovh API'sine fetch ile istek atıyoruz
   // Eğer istek başarılı olursa şarkı sözlerini gösteriyoruz
    // Eğer istek başarısız olursa hata mesajı gösteriyoruz
    fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`)
      .then(response => {

        if (!response.ok) {
          throw new Error('Lyrics not found.');
        }
        return response.json();
      })
      .then(data => {
        lyricsOutput.textContent = data.lyrics;
      })
      .catch(error => {
        lyricsOutput.textContent = error.message;
      });
  });
