// ==UserScript==
// @name         Kidsadmin - klote vinkje
// @namespace    http://tampermonkey.net/
// @version      2024-06-18
// @description  try to take over the world!
// @author       You
// @match        https://www.kidsadminlogin.nl/invoer/childfamily/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=kidsadminlogin.nl
// @grant        none
// @updateURL    https://github.com/thaWeeDz/kidsadmin-userscripts/raw/main/Kidsadmin%20-%20klote%20vinkje-2024-06-13.user.js
// ==/UserScript==

(function() {
    'use strict';
    console.log("Hello ME and You gimme shit bitch! Is this the sollution?");

    // Zoek de button met de class 'schema-button'
    const checkBtnLoaded = () => {
        const icon = document.querySelector('.btn i.fa-cog')
        if (icon) {
            const btn = icon.closest('.btn');
            btn.addEventListener('click', () => {
                console.log("click works");
                // Functie om te controleren of het element met class 'overzicht' aanwezig is
                const checkRoosterLoaded = () => {
                    const roosterElement = document.querySelector('.schedule-row.edit');
                    if (roosterElement) {
                        // Voer hier je JS bewerking uit
                        console.log('Overzicht element is geladen:', roosterElement);

                        // Voorbeeldbewerking: verander de achtergrondkleur
                        roosterElement.querySelector(".check-box").checked = false;
                        checkBtnLoaded();
                    } else {
                        // Probeer het opnieuw na een korte tijd
                        setTimeout(checkRoosterLoaded, 100);
                    }
                };
                // Start met controleren of het 'overzicht' element is geladen
                checkRoosterLoaded();
            });
        }else{
            // Probeer het opnieuw na een korte tijd
            setTimeout(checkBtnLoaded, 100);
        }
    };
    checkBtnLoaded();
})();
