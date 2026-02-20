//No one will see the amount of boilerplate is in this file...

let deferredPrompt;
const gameScreen = document.getElementById('main');
const newsScreen = document.getElementById("newsScreen");
const settingsScreen = document.getElementById("settingsScreen");
const helpScreen = document.getElementById("helpScreen");
const topNav = document.getElementById("top-nav");
const verScreen = document.getElementById("selectVerScreen");

//LOGGER 
const logger = {
    _log(level, message) {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const ms = String(now.getMilliseconds()).padStart(3, '0');

        const timestamp = `[${hours}:${minutes}:${seconds}+${ms}]`;
        const tag = `[Flow9 Client]`;
        const levelTag = `[${level.toUpperCase()}]`;

        const fullMessage = `${timestamp} ${tag} ${levelTag}: ${message}`;

        switch (level.toLowerCase()) {
        case 'error':
            console.error(fullMessage);
            break;
        case 'warn':
            console.warn(fullMessage);
            break;
        default:
            console.log(fullMessage);
            break;
        }
    },
  
    info(message) {
        this._log('info', message);
    },

    warn(message) {
        this._log('warn', message);
    },

    error(message) {
        this._log('error', message);
    }
};


window.addEventListener('resize', function() {
    logger.warn("Resizing window to 1200x700, the window can not be resized, or it will break!")
    window.resizeTo(1200, 700);
});


function isAppInstalled() {
    return window.matchMedia('(display-mode: standalone)').matches ||
        window.navigator.standalone === true;
    }

    document.addEventListener('DOMContentLoaded', () => {
        if (isAppInstalled()) {
            logger.info("App is installed");
        } else {
            logger.warn("App is not installed");
        }
    });


function closeWindow() {
    window.close();
}

//This stuff should work the way I have it sat up

function showNews(){
    gameScreen.style.display = 'none';
    newsScreen.style.display = 'block';
    settingsScreen.style.display = 'none';
    helpScreen.style.display = 'none';
    topNav.style.display = 'block';
    topNav.style.display = 'none';
}

function showGame(){
    gameScreen.style.display = 'block';
    newsScreen.style.display = 'none';
    settingsScreen.style.display = 'none';
    helpScreen.style.display = 'none';
    verScreen.style.display = 'none';
}

function showSettings(){
    gameScreen.style.display = 'none';
    newsScreen.style.display = 'none';
    settingsScreen.style.display = 'block';
    helpScreen.style.display = 'none';
    verScreen.style.display = 'none';
}

function showHelp(){
    gameScreen.style.display = 'none';
    newsScreen.style.display = 'none';
    settingsScreen.style.display = 'none';
    helpScreen.style.display = 'block';
}

function showSelectVerScreen() {
    gameScreen.style.display = 'none';
    newsScreen.style.display = 'none';
    settingsScreen.style.display = 'none';
    helpScreen.style.display = 'none'
    verScreen.style.display = 'block'
}

const slider = document.getElementById("my-slider");
const currentValue = document.getElementById("current-value");

slider.addEventListener("input", () => {
    currentValue.textContent = slider.value + "GB";
});


function openURL(url) {
    window.open(url, "_blank")
}
  



function runGame() {
    const width = 700;
    const height = 500;
    const left = (window.screen.width / 2) - (width / 2);
    const top = (window.screen.height / 2) - (height / 2);

    const features = `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes`;
    window.open('/version/game.html', '_blank', features);
    
}
