const overlay = document.getElementById('Overlay_ID');
const overlayMenu = document.getElementById('Overlay_Menu_ID');
const overlayTitle = document.getElementById('Overlay_Title_ID');
const token1 = document.getElementById("Token_1_ID");
const token2 = document.getElementById("Token_2_ID");
const swapTokens = document.getElementById("Swap_Tokens_Button");
const tradesButton = document.getElementById("Trades_Button_ID");
const walletButton = document.getElementById("Wallet_Button_ID");

const buyBtnSp = document.getElementById("Buy_Button_ID_Swap");
const sellBtnSp = document.getElementById("Sell_Button_ID_Swap");
const swapBtnSp = document.getElementById("Swap_Button_ID_Swap");
const sendBtnSp = document.getElementById("Send_Button_ID_Swap");

const buyBtnSl = document.getElementById("Buy_Button_ID_Sell");
const sellBtnSl = document.getElementById("Sell_Button_ID_Sell");
const swapBtnSl = document.getElementById("Swap_Button_ID_Sell");
const sendBtnSl = document.getElementById("Send_Button_ID_Sell");

const buyBtnBy = document.getElementById("Buy_Button_ID_Buy");
const sellBtnBy = document.getElementById("Sell_Button_ID_Buy");
const swapBtnBy = document.getElementById("Swap_Button_ID_Buy");
const sendBtnBy = document.getElementById("Send_Button_ID_Buy");

const buyBtnSd = document.getElementById("Buy_Button_ID_Send");
const sellBtnSd = document.getElementById("Sell_Button_ID_Send");
const swapBtnSd = document.getElementById("Swap_Button_ID_Send");
const sendBtnSd = document.getElementById("Send_Button_ID_Send");

const btc = document.getElementById("Bitcoin_Token_ID");
const eth = document.getElementById("Ethereum_Token_ID");
const bayse = document.getElementById("Coynbayse_Token_ID");
const sol = document.getElementById("Solana_Token_ID");

let Active_Token_Menu;
let Active_Token_Input;
let Active_Token_Output;

const Currency_Input = document.getElementById("Currency_Input_ID");
const Currency_Output = document.getElementById("Currency_Output_ID");

const Swap_Wrapper = document.getElementById("Swap_Wrapper_ID");
const Buy_Wrapper = document.getElementById("Buy_Wrapper_ID");
const Sell_Wrapper = document.getElementById("Sell_Wrapper_ID");
const Send_Wrapper = document.getElementById("Send_Wrapper_ID");



buyBtnSp.addEventListener("click", function() {
    hideAllWrappers();
    Buy_Wrapper.style.display = "block";
});

sellBtnSp.addEventListener("click", function() {
    hideAllWrappers();
    Sell_Wrapper.style.display = "block";
});

swapBtnSp.addEventListener("click", function() {
    hideAllWrappers();
    Swap_Wrapper.style.display = "block";
});

sendBtnSp.addEventListener("click", function() {
    hideAllWrappers();
    Send_Wrapper.style.display = "block";
});


buyBtnSl.addEventListener("click", function() {
    hideAllWrappers();
    Buy_Wrapper.style.display = "block";
});

sellBtnSl.addEventListener("click", function() {
    hideAllWrappers();
    Sell_Wrapper.style.display = "block";
});

swapBtnSl.addEventListener("click", function() {
    hideAllWrappers();
    Swap_Wrapper.style.display = "block";
});

sendBtnSl.addEventListener("click", function() {
    hideAllWrappers();
    Send_Wrapper.style.display = "block";
});


buyBtnBy.addEventListener("click", function() {
    hideAllWrappers();
    Buy_Wrapper.style.display = "block";
});

sellBtnBy.addEventListener("click", function() {
    hideAllWrappers();
    Sell_Wrapper.style.display = "block";
});

swapBtnBy.addEventListener("click", function() {
    hideAllWrappers();
    Swap_Wrapper.style.display = "block";
});

sendBtnBy.addEventListener("click", function() {
    hideAllWrappers();
    Send_Wrapper.style.display = "block";
});


buyBtnSd.addEventListener("click", function() {
    hideAllWrappers();
    Buy_Wrapper.style.display = "block";
});

sellBtnSd.addEventListener("click", function() {
    hideAllWrappers();
    Sell_Wrapper.style.display = "block";
});

swapBtnSd.addEventListener("click", function() {
    hideAllWrappers();
    Swap_Wrapper.style.display = "block";
});

sendBtnSd.addEventListener("click", function() {
    hideAllWrappers();
    Send_Wrapper.style.display = "block";
});

function hideAllWrappers() {
    Buy_Wrapper.style.display = "none";
    Sell_Wrapper.style.display = "none";
    Swap_Wrapper.style.display = "none";
    Send_Wrapper.style.display = "none";
};

tradesButton.addEventListener("click", function() {
    removeBackgroundButtons();
    this.style.backgroundColor = "#0e184f";
});

walletButton.addEventListener("click", function() {
    removeBackgroundButtons();
    this.style.backgroundColor = "#0e184f";
});

function removeBackgroundButtons(){
    tradesButton.style.backgroundColor = "";
    walletButton.style.backgroundColor = "";
}

function removeBackground(){
    buyBtn.style.backgroundColor = "";
    sellBtn.style.backgroundColor = "";
    swapBtn.style.backgroundColor = "";
    sendBtn.style.backgroundColor = "";
}

function toggleOverlay() {
    overlay.style.display = overlay.style.display === 'block' ? 'none' : 'block';
    overlayMenu.style.display = overlayMenu.style.display === 'block' ? 'none' : 'block';
}

token1.addEventListener("click", function(){
    overlayTitle.textContent = "Select token to pay"

    Active_Token_Menu = token1;

    toggleOverlay();
});

token2.addEventListener("click", function(){
    overlayTitle.textContent = "Select token to receive"

    Active_Token_Menu = token2;

    toggleOverlay();
});


overlay.addEventListener('click', toggleOverlay);

btc.addEventListener('click', replaceToBTC);
function replaceToBTC() {
    toggleOverlay();
    if(Active_Token_Menu === token1){
        
        const chooseTokenDiv = document.getElementById('Token_1_ID');
        const newTokenTitle = chooseTokenDiv.querySelector('.Token_1_Title');
        const svg = chooseTokenDiv.querySelector('svg');
        svg.style.left = '38px';
        newTokenTitle.textContent = 'BTC'; 
        chooseTokenDiv.style.width = '100px';
        Active_Token_Input = btc;
        const lengthInput = chooseTokenDiv.querySelector('.Currency_Input_Holder');
        lengthInput.style.width = '80%';
        lengthInput.value = '';
    }
    else if(Active_Token_Menu === token2){
        const chooseTokenDiv = document.getElementById('Token_2_ID');
        const newTokenTitle = chooseTokenDiv.querySelector('.Token_2_Title');
        const svg = chooseTokenDiv.querySelector('svg');
        svg.style.left = '38px';
        newTokenTitle.textContent = 'BTC'; 
        chooseTokenDiv.style.width = '100px';
        Active_Token_Output = btc;
        const lengthOutput = chooseTokenDiv.querySelector('.Currency_Output_Holder');
        lengthOutput.style.width = '70%';
        lengthOutput.value = '';
    }  
}

eth.addEventListener('click', replaceToETH);
function replaceToETH() {
    toggleOverlay();
    if(Active_Token_Menu === token1){
        const chooseTokenDiv = document.getElementById('Token_1_ID');
        const newTokenTitle = chooseTokenDiv.querySelector('.Token_1_Title');
        const svg = chooseTokenDiv.querySelector('svg');
        svg.style.left = '38px';
        newTokenTitle.textContent = 'ETH'; 
        chooseTokenDiv.style.width = '100px';
        Active_Token_Input = eth;
        const lengthInput = chooseTokenDiv.querySelector('.Currency_Input_Holder');
        lengthInput.style.width = '70%';
    }
    else if(Active_Token_Menu === token2){
        const chooseTokenDiv = document.getElementById('Token_2_ID');
        const newTokenTitle = chooseTokenDiv.querySelector('.Token_2_Title');
        const svg = chooseTokenDiv.querySelector('svg');
        svg.style.left = '38px';
        newTokenTitle.textContent = 'ETH'; 
        chooseTokenDiv.style.width = '100px';
        Active_Token_Output = eth;
        const lengthOutput = chooseTokenDiv.querySelector('.Currency_Output_Holder');
        lengthOutput.style.width = '70%';
    }
}

bayse.addEventListener('click', replaceToBayse);
function replaceToBayse() {
    toggleOverlay();
    if(Active_Token_Menu === token1){
        const chooseTokenDiv = document.getElementById('Token_1_ID');
        const newTokenTitle = chooseTokenDiv.querySelector('.Token_1_Title');
        const svg = chooseTokenDiv.querySelector('svg');
        svg.style.left = '44px';
        newTokenTitle.textContent = 'BAYSE'; 
        chooseTokenDiv.style.width = '110px';
        Active_Token_Input = bayse;
        const lengthInput = chooseTokenDiv.querySelector('.Currency_Input_Holder');
        lengthInput.style.width = '70%';
    }
    else if(Active_Token_Menu === token2){
        const chooseTokenDiv = document.getElementById('Token_2_ID');
        const newTokenTitle = chooseTokenDiv.querySelector('.Token_2_Title');
        const svg = chooseTokenDiv.querySelector('svg');
        svg.style.left = '44px';
        newTokenTitle.textContent = 'BAYSE'; 
        chooseTokenDiv.style.width = '110px';
        Active_Token_Output = bayse;
        const lengthOutput = chooseTokenDiv.querySelector('.Currency_Output_Holder');
        lengthOutput.style.width = '70%';
    }
}

sol.addEventListener('click', replaceToSol);
function replaceToSol() {
    toggleOverlay();
    if(Active_Token_Menu === token1){
        const chooseTokenDiv = document.getElementById('Token_1_ID');
        const newTokenTitle = chooseTokenDiv.querySelector('.Token_1_Title');
        const svg = chooseTokenDiv.querySelector('svg');
        svg.style.left = '38px';
        newTokenTitle.textContent = 'SOL'; 
        chooseTokenDiv.style.width = '100px';
        Active_Token_Input = sol;
        const lengthInput = chooseTokenDiv.querySelector('.Currency_Input_Holder');
        lengthInput.style.width = '70%';
    }
    else if(Active_Token_Menu === token2){
        const chooseTokenDiv = document.getElementById('Token_2_ID');
        const newTokenTitle = chooseTokenDiv.querySelector('.Token_2_Title');
        const svg = chooseTokenDiv.querySelector('svg');
        svg.style.left = '38px';
        newTokenTitle.textContent = 'SOL'; 
        chooseTokenDiv.style.width = '100px';
        Active_Token_Output = sol;
        const lengthOutput = chooseTokenDiv.querySelector('.Currency_Output_Holder');
        lengthOutput.style.width = '70%';
    }
}

swapTokens.addEventListener('click', function(){
  
    const chooseToken1 = document.getElementById('Token_1_ID');
    const chooseToken2 = document.getElementById('Token_2_ID');
    
    const token1HTML = chooseToken1.innerHTML;
    const token1Width = chooseToken1.style.width;
   
    chooseToken1.innerHTML = chooseToken2.innerHTML;
    chooseToken1.style.width = chooseToken2.style.width;
    
    chooseToken2.innerHTML = token1HTML;
    chooseToken2.style.width = token1Width;

    const temp = Active_Token_Input;
    Active_Token_Input = Active_Token_Output;
    Active_Token_Output = temp;

    const currencyInputValue = document.getElementById('Currency_Input_ID').value;
    const currencyOutputValue = document.getElementById('Currency_Output_ID').value;
    
    document.getElementById('Currency_Input_ID').value = currencyOutputValue;
    document.getElementById('Currency_Output_ID').value = currencyInputValue;

    const currencyUSD1 = document.getElementById('Currency_USD_ID_1').textContent;
    const currencyUSD2 = document.getElementById('Currency_USD_ID_2').textContent;
    
    document.getElementById('Currency_USD_ID_2').textContent = currencyUSD1;
    document.getElementById('Currency_USD_ID_1').textContent = currencyUSD2;
});

document.getElementById('Currency_Input_ID').addEventListener('input', function(){

    const btcValueUSD = 68505.10;
    const ethValueUSD = 3329.70;
    const bayseValueUSD = 0.0005108;
    const solValueUSD = 183.42;

    let inputValue = parseFloat(this.value);
    
    if (!isNaN(inputValue)) {
        let convertedValue;
        if (Active_Token_Input === btc) {
            convertedValue = inputValue * btcValueUSD;
        } else if (Active_Token_Input === eth) {
            convertedValue = inputValue * ethValueUSD;
        } else if (Active_Token_Input === bayse) {
            convertedValue = inputValue * bayseValueUSD;
        } else if (Active_Token_Input === sol) {
            convertedValue = inputValue * solValueUSD;
        }
        document.getElementById('Currency_USD_ID_1').textContent = "$" + convertedValue.toFixed(2);
        
        
        let receivedValue;
        if (Active_Token_Output === btc) {
            receivedValue = convertedValue / btcValueUSD;
        } else if (Active_Token_Output === eth) {
            receivedValue = convertedValue / ethValueUSD;
        } else if (Active_Token_Output === bayse) {
            receivedValue = convertedValue / bayseValueUSD;
        } else if (Active_Token_Output === sol) {
            receivedValue = convertedValue / solValueUSD;
        }

        document.getElementById('Currency_Output_ID').value = receivedValue.toFixed(2);
        document.getElementById('Currency_USD_ID_2').textContent = "$" + convertedValue.toFixed(2);
    }
});



