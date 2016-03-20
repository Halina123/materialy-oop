title: JavaScript - jak to jest zrobione
author:
    name: Bartosz Cytrowski
    twitter: cytrowski
    url: http://cytrowski.com
output: build/day-1.html
controls: false
#theme: sudodoki/reveal-cleaver-theme

--

# Programowanie obiektowe
## Prezentacja przygotowana dla celów dydaktycznych InfoShare Academy<br/>

--

### Programowanie obiektowe

*(ang. object-oriented programming)*

Jest to sposób programowania, w którym program komputerowy definiuje się jako zbiór obiektów oraz oddziaływań miedzy nimi.

---

### Obiekt

*(ang. object)*

Jest to podstawowy element programu obiektowego, posiadający tożsamość, stan i zachowanie.

--

**Tożsamość obiektu** umożliwia jego identyfikację i odróżnienie od innych obiektów. Zwykle jest to nazwa.

--

**Stan obiektu** określony jest przez tymczasowe wartości cech obiektu. Zwykle jest to zbiór atrybutów obiektu.

--

**Zachowanie obiektu** określa sposoby transformacji cech obiektu. Zwykle jest to zbiór metod obiektu.

---

### Przykład obiektu

<table>
<thead>

</thead>
<tbody>
<tr>
<td>Nazwa</td>
<td>Burek</td>
</tr>

<tr>
<td>Atrybuty</td>
<td>
radość: wysoka<br/>
hałaśliwość: niska<br/>
głód: niski<br/>
</td>
</tr>

<tr>
<td>Metody</td>
<td>
aportuj()<br/>
szczekaj()<br/>
jedz()<br/>
</td>
</tr>
</tbody>
</table>

--

### Klasa

*(ang. class)*

Jest to wzorzec, na podstawie którego tworzone są obiekty. Jeżeli obiekt wytworzony jest na podstawie danej klasy to nazywamy go jej instancją.

--

Klasa, tak jak obiekt, posiada nazwę, atrybuty i metody, ale ich
przeznaczenie jest inne.

--

Zwykle każda instancja danej klasy otrzymuje jej atrybuty oraz metody. Nazwę klasy określa się jako typ obiektu i staje się ona jednym z atrybutów obiektu.

--

### Przykład klasy

<table>
<thead>

</thead>
<tbody>
<tr>
<td>Nazwa</td>
<td>Pies</td>
</tr>

<tr>
<td>Atrybuty</td>
<td>
radość: nieokreślona<br/>
hałaśliwość: nieokreślona<br/>
głód: nieokreślony<br/>
</td>
</tr>

<tr>
<td>Metody</td>
<td>
aportuj()<br/>
szczekaj()<br/>
jedz()<br/>
</td>
</tr>
<tr>
<td>Konstruktor</td>
<td>Pies(radość, hałaśliwość, głód)</td>
</tr>
</tbody>
</table>

--

pojawiło się kilka nowych pojęć...

--

### Konstruktor

*(ang. constructor)*

Jest to specjalna metoda klasy, która służy do tworzenia jej instancji. Pozwala ona nadać obiektom ich pożądany stan początkowy.

-- 

### Atrybut

*(ang. property)*

Jest to specjalny składnik obiektu lub klasy pełniący rolę zmiennej, przechowującej informacje o danej cesze. Atrybuty nazywane są również właściwościami.

--

### Metoda

*(ang. method)*

Jest to specjalny składnik obiektu lub klasy pełniący rolę funkcji, która może m.in. operować na atrybutach danego obiektu, tworzyć nowe obiekty, niszczyć obiekty.

--

### Paradygmaty programowania obiektowego

--

### Paradygmat programowania

*(ang. programming paradigm)*

Jest to wzorzec programowania komputerów przedkładany w danym okresie rozwoju informatyki ponad inne lub ceniony w pewnych okolicznościach lub zastosowaniach.

--

### Dziedziczenie

*(ang. inheritance)*

Jest to jeden z mechanizmów pozwalający współdzielić funkcjonalność między różnymi klasami, redukując przy tym ilość powielanego kodu.

--

Gdy mówimy, że klasa A dziedziczy po klasie B, to znaczy, że klasa A poza charakterystycznymi dla siebie atrybutami i metodami posiada również te pochodzące z klasy B.

--

Klasa dziedzicząca jest nazywana klasą pochodną lub potomną (ang. subclass / derived class), zaś klasa, z której następuje dziedziczenie - klasą bazową (ang. superclass).

--

Klasa pochodna może zastępować składniki klasy bazowej własnymi, np. implementacje metod lub stan początkowy.

--

### Przykład klasy nadrzędnej
<table>
<thead>

</thead>
<tbody>
<tr>
<td>Nazwa</td>
<td>Zwierzę</td>
</tr>

<tr>
<td>Atrybuty</td>
<td>
radość,<br/>
hałaśliwość,<br/>
głód<br/>
</td>
</tr>

<tr>
<td>Metody</td>
<td>
baw_się()<br/>
hałasuj()<br/>
jedz()<br/>
</td>
</tr>
<tr>
<td>Konstruktor</td>
<td>Zwierzę(radość, chałaśliwość, głód)</td>
</tr>
</tbody>
</table>

--
### Przykład klasy pochodnej

<table>
<thead>

</thead>
<tbody>
<tr>
<td>Nazwa</td>
<td>Pies</td>
</tr>

<tr>
<td>Klasa nadrzędna</td>
<td>Zwierzę</td>
</tr>

<tr>
<td>Atrybuty</td>
<td>
*radość,<br/>
*hałaśliwość,<br/>
*głód<br/>
</td>
</tr>

<tr>
<td>Metody</td>
<td>
aportuj()<br/>
szczekaj()<br/>
*baw_się() { aportuj() }<br/>
*hałasuj() { szczekaj() }<br/>
*jedz()<br/>
</td>
</tr>
<tr>
<td>Konstruktor</td>
<td>*Pies = Zwierzę</td>
</tr>
</tbody>
</table>

--

### Enkapsulacja / Hermetyzacja

*(ang. encapsulation)*

Jest to jedno z założeń programowania obiektowego. Polega ono na ukrywaniu pewnych atrybutów lub metod danej klasy tak, aby były one dostępne tylko metodom tej klasy.

--

**Hermetyzacja** ma na celu zwiększenie kontroli nad zmianami stanu instancji danej klasy oraz ukrycie implementacji zachowań, ułatwiając tym samym późniejszą
zmianę implementacji.

--

Popularnym sposobem hermetyzacji są modyfikatory widoczności składników klasy (dostępne tylko w niektórych językach programowania): *publiczny*, *prywatny* i *chroniony*.

--

Składniki klasy oznaczone jako *publiczne* mogą być modyfikowane i wywoływane przez funkcje spoza danej klasy.

Składniki klasy oznaczone jako *prywatne* mogą być modyfikowane i wywoływane tylko i wyłącznie przez metody danej klasy.

Składniki klasy oznaczone jako *chronione* mogą być modyfikowane i wywoływane tylko i wyłącznie przez metody danej klasy i jej klas pochodnych.

--

### Przykład klasy nadrzędnej

<table>
<thead>

</thead>
<tbody>
<tr>
<td>Nazwa</td>
<td>Zwierzę</td>
</tr>

<tr>
<td>Atrybuty</td>
<td>
CHRONIONY radość,<br/>
CHRONIONY hałaśliwość,<br/>
CHRONIONY głód<br/>
</td>
</tr>

<tr>
<td>Metody</td>
<td>
PUBLICZNA baw_się()<br/>
PUBLICZNA hałasuj()<br/>
PUBLICZNA jedz()<br/>
</td>
</tr>
<tr>
<td>Konstruktor</td>
<td>Zwierzę(radość, chałaśliwość, głód)</td>
</tr>
</tbody>
</table>
</section>

<section>
<h3>Przykład klasy pochodnej</h3>
<table>
<thead>

</thead>
<tbody>
<tr>
<td>Nazwa</td>
<td>Pies</td>
</tr>

<tr>
<td>Klasa nadrzędna</td>
<td>Zwierzę</td>
</tr>

<tr>
<td>Atrybuty</td>
<td>
*CHRONIONY radość,<br/>
*CHRONIONY hałaśliwość,<br/>
*CHRONIONY głód<br/>
</td>
</tr>

<tr>
<td>Metody</td>
<td>
PRYWATNA aportuj()<br/>
CHRONIONA szczekaj()<br/>
*PUBLICZNA baw_się() { aportuj() }<br/>
*PUBLICZNA hałasuj() { szczekaj() }<br/>
*PUBLICZNA jedz()<br/>
</td>
</tr>
<tr>
<td>Konstruktor</td>
<td>*Pies = Zwierzę</td>
</tr>
</tbody>
</table>

--

### Polimorfizm (wielopostaciowość)

*(ang. polimorphism)*

Jest to mechanizm pozwalający na dynamiczne dopasowanie implementacji metody do kontekstu jej wywołania.

W praktyce polimorfizm stosuje się w przypadku, gdy chcemy wywołać tę samą metodę na wielu obiektach, ale nie wszystkie z nich są instancjami tej samej klasy.

--

### Przykład polimorfizmu

```javascript
class Animal { makeNoise() }
class Dog extends Animal { makeNoise() { bark() } }
class Cat extends Animal { makeNoise() { meow() } }

objects Pluto, Scooby, Doge instances of Dog
objects Scratchy, Fatty, Jumpy instances of Cat

Animal[] animals = [Pluto, Scooby, Doge, Scratchy, Fatty, Jumpy]

animals.forEach(animal, makeNoise)
```

--

### Abstrakcja

*(ang. abstraction)*

Jest to celowe uproszczenie i uogólnienie problemu, polegające na ograniczeniu zbioru cech manipulowanych obiektów wyłącznie do cech kluczowych dla istoty problemu.

--

### Przykład abstrakcji

```javascript
function compareNumbers(a, b) {
  return a - b;
}

[3, 5, 1, 2, 4].sort(compareNumbers);
```

--

### Przykład abstrakcji

```javascript
function compareCars(a, b) {
  if (a.speed < b.speed)
    return -1;
  if (a.speed > b.speed)
    return 1;
  // a === b
  return 0
}

[
  {name: 'Ferrari', speed: 300},
  {name: 'Fiat', speed: 100},
  {name: 'Honda', speed: 200}
].sort(compareCars);
```

--

### Przestrzeń nazw

*(ang. namespace)*

Jest to zbiór, którego elementami są nazwy. W obrębie danej przestrzeni nazw żadna nie może się powtarzać. Dana nazwa może występować w więcej niż jednej przestrzeni nazw.

--

Pisząc kod korzystający z nazw znajdujących się w różnych przestrzeniach musimy przy odwołaniach do tych nazw podawać informację o ich przestrzeni - w przeciwnym wypadku będą one niejednoznaczne.

--

Pisząc kod korzystający z nazw znajdujących się w jednej przestrzeni nie musimy przy odwołaniach do tych nazw podawać ich przestrzeni - wystarczy zadeklarować ją dla całego fragmentu kodu. Poprawia to zwięzłość kodu.

--

### Przykład przestrzeni nazw</h3>


```javascript
var People = People || {};
People.Students = {
  Mike: {...},
  Rebecca: {...},

  party: function () {
    this.Mike.partyWith(this.Rebecca);
  }
};
```

--

### Przykład przestrzeni nazw

```javascript
var People = People || {};
People.Teachers = {
  Mike: {...},

  checkExams: function () {
    this.Mike.checkExams([
      People.Students.Mike,
      People.Students.Rebecca
    ]);
  }
};
```

--

### Koniec
