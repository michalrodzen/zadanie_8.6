var a = prompt('podaj liczbę a'),
    b = prompt('podaj liczbę b'),
    value;
value = (a*b) - (2*a*b) - (b*b);

if (value > 0) {
    alert('wynik dodatni');
    console.log('wynik dodatni');
} else if (value < 0) {
    alert('wynik ujemny');
    console.log('wynik ujemny');
} else {
    alert('wynik równy 0');
    console.log('wynik równy zero');
}
