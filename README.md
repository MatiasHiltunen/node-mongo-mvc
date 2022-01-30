#MVC Esimerkki Node.js:llä

Kloonaa projekti:
>git clone https://github.com/MatiasHiltunen/node-mongo-mvc.git

Mene kansioon:
>cd node-mongo-mvc

Asenna npm paketit
>npm install

Luo .env tiedosto .env.example:n mukaisesti


Seuraavaksi tarvitaan tietokanta.

LogRocket:n blogista löytyy vastaavan node MVC projektin tutoriaali,
katso kohta "Setting up MongoDB Atlas" ja luo ilmainen Atlas tunnus ohjeiden mukaan. 

https://blog.logrocket.com/building-structuring-node-js-mvc-application/

Lisää oma mongo atlas connection string .env tiedostoon

Käynnistä kehityspalvelin
>npm run dev

Mene selaimessa osoitteeseen joka tulostuu konsoliin