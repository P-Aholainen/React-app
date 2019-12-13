Api -kutsujen tekemiseen on käytetty Axios http client -laajennusta.

API -rajapinnan tarjoaa Musixmatch.com

Komponentit on lajiteltu omiin kansioihin, sillä periaatteella, että layout -kansioon on sijoitettu ulkoasulliset komponentit ja tracks -kansioon komponentit, joissa suoritetaan API -kutsut ja määritellään miten data esitetään.

Ulkoasun määrittämiseen on käytetty Bootstrap CSS:ää, eikä App.css tiedostossa ole määritetty kuin taustaväri.

Context.js tiedostossa tuodaan käyttöön Context API, jolla voidaan komponenttien välillä jakaa ns. globaalia dataa Provider ja Consumer komponenttien avulla, ilman, että sitä tarvitsee välittää eteenpäin propsien avulla. Eli Context.js tiedostossa määritetään Provider -komponentti, joka välitetään Consumer -komponenttiin, jota käytetään Tracks.js ja Search.js tiedostoissa.

Päätiedostona toimii App.js jossa palautetaan komponentit, ja suoritetaan routtaus, kun tuodaan hakutuloksia oletuksena tuotavien TOP10 -tulosten tilalle.

API avain on piilotettu .env -tiedostoon, ja ko. tiedosto on lisätty gitignore -listaan, jotta avaimet eivät näy githubissa.

Applikaatio pohjautuu Traversy Median Tutorial videoon, josta joitain ominaisuuksia on jätetty pois, ja jotain tuotu lisää kuten esimerkiksi mahdollisuus tehdä haku samaan aikaan sekä artistin, että kappaleen tiedoilla. Myös ulkoasua on muokattu. Spinner.gif on ladattu preloader.net sivustolta, jossa se on ensin muokattu värimaailmaan sopivaksi
