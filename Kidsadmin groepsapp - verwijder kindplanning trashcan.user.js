// ==UserScript==
// @name         Remove trashcan btn
// @namespace    http://tampermonkey.net/
// @version      v0002
// @description  Verwijdert de optie binnen de groepsapp om een kind uit de planning te verwijderen en deze dag te crediteren. Ook ver wijdert het de mogelijkheid een ruitldag in te stellen
// @author       Wytze Voerman
// @match        https://www.kidsadminlogin.nl/ipad3/planning
// @icon         https://www.google.com/s2/favicons?sz=64&domain=kidsadminlogin.nl
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    console.log("button killing time!");

    // Zoek de button met de class 'schema-button'
    const checkDialogLoaded = () => {
        const deleteBtn = document.querySelector('.dialog-child-planning .planning-item-controls svg.fa-trash-can');
        if (deleteBtn) {
            deleteBtn.remove();
            const ruilBtn = document.querySelector('.dialog-child-planning .planning-item-controls svg.fa-shuffle');
            ruilBtn.remove();

            //replace planning-remove button
            const buttonContainer = document.querySelector('.btn-danger');
            var div = document.createElement('div');
            var newBtn = '<button type="button" style="margin-top:10px;" class="btn btn-primary ka-hack">Afwezig melden</button>';
            div.innerHTML = newBtn.trim();
            buttonContainer.parentNode.appendChild(div);

            newBtn = document.querySelector('.btn-primary.ka-hack');
            newBtn.addEventListener('click', () => {
                const callBtns = document.querySelectorAll('.dialog-child-planning .planning-item-controls span');
                for (const icon of callBtns) {
                    icon.click();
                }
            });

            setTimeout(checkDialogLoaded, 100);
        }else{
            // Probeer het opnieuw na een korte tijd
            setTimeout(checkDialogLoaded, 100);
        }
    };
    checkDialogLoaded();
})();
