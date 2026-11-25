# Pregled prevzetega projekta GigSpot

## 1. Pregled projekta

GigSpot je spletna aplikacija za povezovanje glasbenikov, glasbenih skupin in organizatorjev koncertov. Omogoča ustvarjanje bendov, razpisovanje terminov za nastope, prijavljanje bendov na termine in izbor nastopajočih.

Frontend je implementiran z Reactom in TypeScriptom, backend pa z Node.js, Expressom in TypeScriptom. Za shranjevanje podatkov se uporablja PostgreSQL v kombinaciji s Prisma ORM.

Aplikacijo smo uspešno zagnali v lokalnem okolju.

## 2. Implementirane MVP funkcionalnosti

| ID | Funkcionalnost | Stanje |
|---|---|---|
| F1 | Sestava benda | Implementirana |
| F2 | Razpis termina | Implementirana |
| F3 | Iskanje terminov po žanru | Implementirana |
| F4 | Prijava s preverjanjem konfliktov | Implementirana |
| F5 | Izbor zasedbe | Implementirana |
| F6 | Objava koncerta v koledarju | Delno implementirana |

### F1 – Sestava benda

Glasbeniki lahko ustvarijo bend, izberejo žanre in povabijo druge glasbenike. Ustvarjalec benda samodejno postane vodja. Povabljeni glasbeniki lahko povabilo sprejmejo ali zavrnejo.

### F2 – Razpis termina

Organizator lahko na svojem prizorišču razpiše termin z datumom, žanri, številom bendov, načinom plačila in rokom za prijave. Implementirana je validacija vhodnih podatkov.

### F3 – Iskanje terminov po žanru

Glasbeniki lahko odprte termine filtrirajo po mestu in časovnem obdobju. Termini, ki se žanrsko ujemajo z izbranim bendom, so prednostno razvrščeni.

### F4 – Prijava s preverjanjem konfliktov

Vodja benda lahko odda prijavo na odprt termin. Sistem preprečuje podvojene prijave in preverja, ali ima kateri od aktivnih članov benda na isti datum že potrjen nastop.

### F5 – Izbor zasedbe

Organizator lahko prijave uvrsti v ožji izbor, sprejme ali zavrne. Ko je doseženo predvideno število bendov, se termin samodejno zapre, preostale neodločene prijave pa se zavrnejo.

### F6 – Objava koncerta v koledarju

Na backendu je implementirana možnost spremembe statusa termina v OBJAVLJEN. Javni seznam koncertov na frontendu še ni povezan z dejanskimi podatki, zato funkcionalnost ni v celoti implementirana.

## 3. Skladnost z uporabniškimi zgodbami

### US-01 – Ustvarjanje benda in povabilo članov

Implementacija vključuje validacijo obveznih podatkov, dodelitev vloge vodje, pošiljanje povabil ter sprejemanje in zavračanje povabil. Podprto je tudi članstvo glasbenika v več bendih.

**Ocena:** implementacija ustreza uporabniški zgodbi.

### US-02 – Razpis termina

Implementirane so validacije obveznih podatkov, datumov, števila bendov in zneska honorarja. Novi termini dobijo status ODPRT. Dostop do kontaktnih podatkov prizorišča je omejen glede na uporabniško vlogo.

**Ocena:** implementacija ustreza uporabniški zgodbi.

### US-03 – Iskanje odprtih terminov

Implementirano je filtriranje odprtih terminov z veljavnim rokom za prijave po mestu in obdobju ter prednostno razvrščanje terminov glede na ujemanje žanrov izbranega benda.

**Ocena:** implementacija ustreza uporabniški zgodbi.

### US-04 – Prijava benda na termin

Oddaja prijave je omejena na vodjo benda. Prijavi je mogoče dodati sporočilo organizatorju. Sistem preprečuje podvojene prijave in oddajo prijav po poteku roka. Aktivni člani benda lahko spremljajo stanje prijav.

**Ocena:** implementacija ustreza uporabniški zgodbi.

### US-05 – Opozorilo na konflikt člana

Sistem preverja aktivne člane benda in njihove že sprejete prijave na isti datum. Ob konfliktu prikaže podatke o članu, bendu in prizorišču ter prepreči oddajo prijave. Nepotrjene prijave ne predstavljajo konflikta.

**Ocena:** implementacija ustreza uporabniški zgodbi.

## 4. Zaključek

Na podlagi pregleda dokumentacije in izvorne kode je bilo ugotovljeno, da je pet od šestih predvidenih MVP funkcionalnosti implementiranih, ena pa je implementirana delno.

Implementacija izbranih petih uporabniških zgodb vsebinsko ustreza njihovim zahtevam. Glavna ugotovljena pomanjkljivost je nedokončan javni koledar koncertov.