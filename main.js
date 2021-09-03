document.getElementById('output').style.visibility ='hidden'
document.getElementById('inInput').addEventListener('input', function(e){
document.getElementById('output').style.visibility ='visible'
let pounds = e.target.value;
document.getElementById('gramsOutput').innerHTML = pounds/0.0022046;
document.getElementById('kilogramsOutput').innerHTML = pounds/2.2046;
document.getElementById('ouncessOutput').innerHTML = pounds*16;

});
