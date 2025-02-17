// ==UserScript==
// @name         Monkeytype Code Practice Loader
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Loads code examples from programming websites for typing practice
// @author       xtrayssss
// @match        https://monkeytype.com/*
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function() {
    'use strict';

    async function fetchCodeExample() {
        try {
            const languages = ['javascript', 'python', 'java', 'cpp', 'typescript'];
            const randomLang = languages[Math.floor(Math.random() * languages.length)];

            console.log(`🔍 Searching for ${randomLang} code examples...`);

            const searchTerms = [
                'sort array',
                'find element',
                'remove duplicates',
                'reverse string',
                'merge arrays',
                'binary search',
                'factorial',
                'fibonacci'
            ];

            const randomTerm = searchTerms[Math.floor(Math.random() * searchTerms.length)];
            const searchUrl = `https://www.codegrepper.com/api/search.php?q=${encodeURIComponent(randomTerm)}&language=${randomLang}`;

            const response = await fetch(searchUrl);
            const data = await response.json();

            const validAnswers = data.answers.filter(answer =>
                answer.answer.length > 20 &&
                answer.answer.length < 500 &&
                !answer.answer.includes('error') &&
                !answer.answer.includes('Error')
            );

            if (validAnswers.length === 0) {
                throw new Error("No suitable code examples found");
            }

            const selectedAnswer = validAnswers[Math.floor(Math.random() * validAnswers.length)];

            let codeText = selectedAnswer.answer
                .replace(/&lt;/g, '<')
                .replace(/&gt;/g, '>')
                .replace(/&amp;/g, '&')
                .trim();

            loadIntoEditField(codeText);

        } catch (error) {
            console.error("Error loading code:", error);
            tryAlternativeSource();
        }
    }

    async function tryAlternativeSource() {
        try {
            const languages = ['javascript', 'python', 'java'];
            const randomLang = languages[Math.floor(Math.random() * languages.length)];

            const response = await fetch(`https://devdocs.io/${randomLang}/index.json`);
            const entries = await response.json();

            const codeEntries = entries.filter(entry =>
                entry.type === 'method' ||
                entry.type === 'function' ||
                entry.type === 'class'
            );

            if (codeEntries.length === 0) {
                throw new Error("No suitable examples found");
            }

            const randomEntry = codeEntries[Math.floor(Math.random() * codeEntries.length)];
            const entryResponse = await fetch(`https://devdocs.io/${randomLang}/${randomEntry.path}`);
            const entryData = await entryResponse.text();

            const codeBlocks = entryData.match(/```[\s\S]*?```/g);
            if (codeBlocks && codeBlocks.length > 0) {
                const randomBlock = codeBlocks[Math.floor(Math.random() * codeBlocks.length)]
                    .replace(/```/g, '')
                    .trim();

                loadIntoEditField(randomBlock);
            } else {
                throw new Error("No code examples found");
            }

        } catch (error) {
            console.error("Error with alternative source:", error);
            alert("Failed to load code example. Please try again.");
        }
    }

    function loadIntoEditField(text) {
        const editField = document.querySelector('textarea:focus, [contenteditable="true"]:focus');

        if (!editField) {
            alert("Please click in the editor first!");
            return;
        }

        if (editField.tagName.toLowerCase() === 'textarea') {
            editField.value = text;
        } else {
            editField.innerText = text;
        }

        editField.dispatchEvent(new Event('input', { bubbles: true }));
        alert("Code loaded successfully! Ready for typing practice.");
    }

    document.addEventListener("keydown", function(event) {
        if (event.ctrlKey && event.shiftKey && event.code === "KeyK") {
            event.preventDefault();
            fetchCodeExample();
        }
    });

    const loadButton = document.createElement('button');
    loadButton.innerHTML = '📝 Load Code Example';
    loadButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 12px 20px;
        background: #2d2d2d;
        color: white;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        z-index: 9999;
        font-family: 'Arial', sans-serif;
        font-size: 14px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        transition: all 0.3s ease;
    `;

    loadButton.addEventListener('mouseenter', () => {
        loadButton.style.background = '#3d3d3d';
    });

    loadButton.addEventListener('mouseleave', () => {
        loadButton.style.background = '#2d2d2d';
    });

    loadButton.addEventListener('click', fetchCodeExample);
    document.body.appendChild(loadButton);

    console.log("✨ Code Practice Loader initialized!");
})();