// ==UserScript==
// @name         Kidsadmin - klote vinkje
// @namespace    http://tampermonkey.net/
// @version      2024.0002
// @description  Verwijdert vinkje bij het editen van het rooster van een kind waardoor de het rooster niet meer in tweeen wordt geknipt
// @author       Wytze Voerman
// @match        https://www.kidsadminlogin.nl/invoer/childfamily/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=kidsadminlogin.nl
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    console.log("Klote vinkje script draait!");

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
