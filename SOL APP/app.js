document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        "Ghosting": "Suddenly cutting off all communication with someone without explanation.",
        "Lit": "Amazing, exciting, or fun.",
        "Salty": "Being bitter or upset about something minor.",
        "Savage": "Acting without regard, often in a way that is brutally honest or harsh.",
        "Flex": "To show off.",
        "Thirsty": "Desperately seeking attention or validation, often in a romantic context.",
        "Shade": "Subtle disrespect or criticism towards someone.",
        "Tea": "Gossip or interesting news.",
        "Woke": "Being aware of social injustices and inequalities.",
        "Basic": "Lacking originality, mainstream.",
        "Simp": "Someone who does too much for someone they like or are attracted to.",
        "Clout": "Influence or fame, especially on social media.",
        "Bae": "A term of endearment, standing for 'before anyone else.'",
        "Stan": "An extremely passionate fan or supporter.",
        "Gucci": "Good or cool.",
        "FOMO": "Fear of missing out.",
        "YOLO": "You only live once.",
        "Snatched": "Looking exceptionally good, especially referring to fashion or physique.",
        "Cap/No Cap": "Lying or telling the truth.",
        "Troll": "Someone who intentionally stirs up trouble or controversy online.",
        "Mood": "Something that is relatable or represents one's current feeling/state.",
        "Slay": "To do something exceptionally well.",
        "Spill the tea": "To share gossip or the real story.",
        "Hype": "Excessive excitement or promotion around something.",
        "Ghost": "To suddenly become unresponsive to communication attempts.",
        "Lowkey": "To want something or feel something but not openly express it.",
        "Highkey": "Openly or strongly feeling something.",
        "On fleek": "Perfectly executed or styled.",
        "Turnt": "Excited, hyped, or under the influence and having a good time.",
        "Squad": "A close group of friends.",
        "Vibe": "A mood or atmosphere.",
        "Receipts": "Proof or evidence of something, usually in a conversation or argument.",
        "Shook": "Shocked or surprised.",
        "Ratchet": "Lacking class or refinement.",
        "Dope": "Cool or excellent.",
        "Throw shade": "To subtly express disapproval or contempt.",
        "Fire": "Exceptionally cool or awesome.",
        "Dead": "Overwhelmed by amusement or laughter.",
        "Sus": "Suspicious or untrustworthy.",
        "Tight": "In a close relationship; also can mean cool or excellent.",
        "Extra": "Over the top or excessive in behavior or style.",
        "Finna": "Going to or intending to.",
        "Fleek": "On point or looking good.",
        "GOAT": "Greatest of all time.",
        "Bet": "Agreement or confirmation.",
        "Hangry": "Angry because of hunger.",
        "Ship": "To endorse a romantic relationship.",
        "IRL": "In real life.",
        "Slide into DMs": "To send a direct message to someone on social media with romantic intentions.",
        "Nay":"A bitch who is dumb as fuck.",
        "Nayhara": "A bitch who has broken every part of her body."
        // Add more slang terms and definitions here
    };

    document.getElementById('translateBtn').addEventListener('click', () => {
        const inputVal = document.getElementById('slangInput').value.trim();
        const translation = translations[inputVal];

        const resultContainer = document.getElementById('translationResult');
        if (translation) {
            resultContainer.innerHTML = `<strong>${inputVal}</strong>: ${translation}`;
        } else {
            resultContainer.innerHTML = `Sorry, no translation found for "${inputVal}". Try another slang term.`;
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const slangTerms = {
        // Reverse the key-value pairs from your original translations object for reverse searching
        "Suddenly cutting off all communication with someone without explanation.": "Ghosting",
        "Amazing, exciting, or fun.":"Lit",
        "Being bitter or upset about something minor.": "Salty",
        "Acting without regard, often in a way that is brutally honest or harsh.": "Savage",
        "To show off.": "Flex",
        "Desperately seeking attention or validation, often in a romantic context.": "Thirsty",
        "Subtle disrespect or criticism towards someone.": "Shade",
        "Gossip or interesting news.": "Tea",
        "Being aware of social injustices and inequalities.": "Woke",
        "Lacking originality, mainstream.": "Basic",
        "Someone who does too much for someone they like or are attracted to.": "Simp",
        "Influence or fame, especially on social media.": "Clout",
        "A term of endearment, standing for 'before anyone else.'": "Bae",
        "An extremely passionate fan or supporter.": "Stan",
        "Good or cool.": "Gucci",
        "Fear of missing out.": "FOMO",
        "You only live once.": "YOLO",
        "Looking exceptionally good, especially referring to fashion or physique.": "Snatched",
        "Lying or telling the truth.": "Cap/No Cap",
        "Someone who intentionally stirs up trouble or controversy online.": "Troll",
        "Something that is relatable or represents one's current feeling/state.": "Mood",
        "To do something exceptionally well.": "Slay",
        "To share gossip or the real story.": "Spill the tea",
        "Excessive excitement or promotion around something.": "Hype",
        "To suddenly become unresponsive to communication attempts.": "Ghost",
        "To want something or feel something but not openly express it.": "Lowkey",
        "Openly or strongly feeling something.": "Highkey",
        "Perfectly executed or styled.": "On fleek",
        "Excited, hyped, or under the influence and having a good time.": "Turnt",
        "A close group of friends.": "Squad",
        "A mood or atmosphere.": "Vibe",
        "Proof or evidence of something, usually in a conversation or argument.": "Receipts",
        "Shocked or surprised.": "Shook",
        "Lacking class or refinement.": "Ratchet",
        "Cool or excellent.": "Dope",
        "To subtly express disapproval or contempt.": "Throw shade",
        "Exceptionally cool or awesome.": "Fire",
        "Overwhelmed by amusement or laughter.": "Dead",
        "Suspicious or untrustworthy.": "Sus",
        "In a close relationship; also can mean cool or excellent.": "Tight",
        "Over the top or excessive in behavior or style.": "Extra",
        "Going to or intending to.": "Finna",
        "On point or looking good.": "Fleek",
        "Greatest of all time.": "GOAT",
        "Agreement or confirmation.": "Bet",
        "Angry because of hunger.": "Hangry",
        "To endorse a romantic relationship.": "Ship",
        "In real life.": "IRL",
        "To send a direct message to someone on social media with romantic intentions.": "Slide into DMs",
        "A bitch who is dumb as fuck.": "Nay",
        "A bitch who has broken every part of her body.": "Nayhara",
        // Add more definitions and their corresponding slang terms here
    };

    function reverseSearchPhrase(phrase) {
        const words = phrase.toLowerCase().split(/\s+/); // Split the phrase into words
        let closestMatch = "";
        let highestWordMatchCount = 0;

        Object.keys(slangTerms).forEach(definition => {
            const definitionWords = definition.toLowerCase().split(/\s+/);
            let wordMatchCount = 0;
            
            // Count how many words in the definition match words in the input phrase
            definitionWords.forEach(defWord => {
                if (words.includes(defWord)) {
                    wordMatchCount++;
                }
            });

            // Update closest match if this definition has more matching words than previous ones
            if (wordMatchCount > highestWordMatchCount) {
                highestWordMatchCount = wordMatchCount;
                closestMatch = slangTerms[definition];
            }
        });

        return closestMatch;
    }

    document.getElementById('searchBtn').addEventListener('click', () => {
        const inputPhrase = document.getElementById('phraseInput').value.trim();
        const matchedSlang = reverseSearchPhrase(inputPhrase);
        const resultContainer = document.getElementById('result');
        
        if (matchedSlang) {
            resultContainer.textContent = `Closest slang term: ${matchedSlang}`;
        } else {
            resultContainer.textContent = "Sorry, no matching slang term found.";
        }
    });
});
