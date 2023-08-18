/*
* https://rentry.org/teralomaniac_clewd
* https://github.com/teralomaniac/clewd
*/

// SET YOUR COOKIE BELOW

module.exports = {
    "Cookie": "SET YOUR COOKIE HERE",
    "CookieArray": [],
    "Ip": "0.0.0.0",
    "Port": 8444,
    "BufferSize": 1,
    "SystemInterval": 3,
    "padtxt_placeholder": "",
    "Settings": {
        "PreventImperson": false,
        "PromptExperiments": true,
        "RetryRegenerate": false,
        "RenewAlways": true,
        "SystemExperiments": true,
        "AllSamples": false,
        "NoSamples": false,
        "StripAssistant": false,
        "StripHuman": false,
        "PassParams": false,
        "ClearFlags": true,
        "PreserveChats": true,
        "LogMessages": true,
        "FullColon": true,
        "padtxt": true,
        "xmlPlot": true,
        "localtunnel": false,
        "VPNfree": false,
        "Superfetch": true
    },
    "PersonalityFormat": "{{CHAR}}'s personality: {{PERSONALITY}}",
    "ScenarioFormat": "Dialogue scenario: {{SCENARIO}}"
}

/*
 BufferSize
 * How many characters will be buffered before the AI types once
 * lower = less chance of `PreventImperson` working properly

 ---

 SystemInterval
 * How many messages until `SystemExperiments alternates`

 ---

 Other settings
 * https://gitgud.io/ahsk/clewd/#defaults
 * and
 * https://gitgud.io/ahsk/clewd/-/blob/master/CHANGELOG.md
 */
