const buyBtn = document.getElementById("buyBtn");
const sellBtn = document.getElementById("sellBtn");
const convertBtn = document.getElementById("convertBtn");
const sendBtn = document.getElementById("sendBtn");
const token1 = document.getElementById("token1");
const token2 = document.getElementById("token2");
const overlay = document.getElementById('overlay');
const overlayMenu = document.getElementById('overlayMenu');
const overlayTitle = document.getElementById('overlayTitle');
const btc = document.getElementById('bitcoinID');
const eth = document.getElementById('ethereumID');
const bayse = document.getElementById('coynbayseID');
const sol = document.getElementById('solanaID');
let activeToken;
const swapButton = document.getElementById('swapButton');


buyBtn.addEventListener("click", function() {
    removeBackground();
    this.style.backgroundColor = "#0e184f";

});

sellBtn.addEventListener("click", function() {
    removeBackground();
    this.style.backgroundColor = "#0e184f";
});

convertBtn.addEventListener("click", function() {
    removeBackground();
    this.style.backgroundColor = "#0e184f";
});

sendBtn.addEventListener("click", function() {
    removeBackground();
    this.style.backgroundColor = "#0e184f";
});

function removeBackground(){
    buyBtn.style.backgroundColor = "";
    sellBtn.style.backgroundColor = "";
    convertBtn.style.backgroundColor = "";
    sendBtn.style.backgroundColor = "";
}

token1.addEventListener("click", function(){
    overlayTitle.textContent = "Select token to pay"

    activeToken = token1;

    toggleOverlay();
});

token2.addEventListener("click", function(){
    overlayTitle.textContent = "Select token to receive"

    activeToken = token2;

    toggleOverlay();
});

function toggleOverlay() {
    overlay.style.display = overlay.style.display === 'block' ? 'none' : 'block';
    overlayMenu.style.display = overlayMenu.style.display === 'block' ? 'none' : 'block';
  }

overlay.addEventListener('click', toggleOverlay);


btc.addEventListener("click", function() {
    if(activeToken === token1){
        var tokenName1 = document.getElementById('tokenName1');
        var tokenElement = document.getElementById("token1");
        var svgArrow = tokenElement.querySelector("svg");
        svgArrow.style.left = "33px"
        tokenElement.style.width = "100px";
        tokenName1.textContent = "BTC";
        toggleOverlay();
    }
});

eth.addEventListener("click", function() {
    if(activeToken === token1){
        var tokenName1 = document.getElementById('tokenName1');
        var tokenElement = document.getElementById("token1");
        var svgArrow = tokenElement.querySelector("svg");
        svgArrow.style.left = "33px"
        tokenElement.style.width = "100px";
        tokenName1.textContent = "ETH";
        toggleOverlay();
    }
});

bayse.addEventListener("click", function() {
    if(activeToken === token1){
        var tokenName1 = document.getElementById('tokenName1');
        var tokenElement = document.getElementById("token1");
        var svgArrow = tokenElement.querySelector("svg");
        svgArrow.style.left = "43px"
        tokenElement.style.width = "110px";
        tokenName1.textContent = "BAYSE";
        toggleOverlay();
    }
});

sol.addEventListener("click", function() {
    if(activeToken === token1){
        var tokenName1 = document.getElementById('tokenName1');
        var tokenElement = document.getElementById("token1");
        var svgArrow = tokenElement.querySelector("svg");
        svgArrow.style.left = "33px"
        tokenElement.style.width = "100px";
        tokenName1.textContent = "SOL";
        toggleOverlay();
    }
});

btc.addEventListener("click", function() {
    if(activeToken === token2){
        var tokenName2 = document.getElementById('tokenName2');
        var tokenElement = document.getElementById("token2");
        var svgArrow = tokenElement.querySelector("svg");
        svgArrow.style.left = "33px"
        tokenElement.style.width = "100px";
        tokenName2.textContent = "BTC";
        toggleOverlay();
    }
});

eth.addEventListener("click", function() {
    if(activeToken === token2){
        var tokenName2 = document.getElementById('tokenName2');
        var tokenElement = document.getElementById("token2");
        var svgArrow = tokenElement.querySelector("svg");
        svgArrow.style.left = "33px"
        tokenElement.style.width = "100px";
        tokenName2.textContent = "ETH";
        toggleOverlay();
    }
});

bayse.addEventListener("click", function() {
    if(activeToken === token2){
        var tokenName2 = document.getElementById('tokenName2');
        var tokenElement = document.getElementById("token2");
        var svgArrow = tokenElement.querySelector("svg");
        svgArrow.style.left = "43px"
        tokenElement.style.width = "110px";
        tokenName2.textContent = "BAYSE";
        toggleOverlay();
    }
});

sol.addEventListener("click", function() {
    if(activeToken === token2){
        var tokenName2 = document.getElementById('tokenName2');
        var tokenElement = document.getElementById("token2");
        var svgArrow = tokenElement.querySelector("svg");
        svgArrow.style.left = "33px"
        tokenElement.style.width = "100px";
        tokenName2.textContent = "SOL";
        toggleOverlay();
    }
});

swapButton.addEventListener("click", function(){

});






