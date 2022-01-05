function berechnen() {
  let bmi;
  let weight = document.bmiform.gewicht.value;
  let height = document.bmiform.groesse.value;
  if (weight < 10 || weight > 200) {
    alert("Falsches Gewicht.nBitte Daten erneut eingeben");
    return null;
  }
  if (height < 50 || height > 250) {
    alert("Falsche Grösse.nBitte Daten erneut eingeben");
    return null;
  }
  bmi = Math.round(weight / Math.pow(height / 100, 2));
  output = "Ihr BMI beträgt " + bmi + ".\n";
  if (bmi < 18) output += "Sie haben starkes Untergewicht.";
  if (bmi == 18) output += "Sie haben deutliches Untergewicht.";
  if (bmi == 19) output += "Sie haben leichtes Untergewicht.";
  if (bmi >= 20 && bmi <= 24) output += "Dies liegt im idealen Bereich.";
  if (bmi >= 25 && bmi <= 29)
    output += "Sie haben leichtes bis mässiges Übergewicht.";
  if (bmi >= 30 && bmi <= 39) output += "Sie haben deutliches Übergewicht.";
  if (bmi >= 40) output += "Sie haben sehr starkes Übergewicht.";
  alert(output);
}
