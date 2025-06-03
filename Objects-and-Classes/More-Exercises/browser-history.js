function solve(browserHistory, actions) {
    for (const action of actions) {
        if (action === 'Clear History and Cache') {
            clearBrowserHistory(browserHistory);
        } else {
            let [actionName, ...siteName] = action.split(' ');
            siteName = siteName.join(' ');

            if (actionName === 'Open') {
                browserHistory['Open Tabs'].push(siteName);
            } else if (actionName === 'Close') {
                if (browserHistory['Open Tabs'].includes(siteName)) {
                    removeSite(siteName);
                    browserHistory['Recently Closed'].push(siteName);
                } else {
                    continue;
                }
            }
            browserHistory['Browser Logs'].push(action);
        }
    }

    printHistory(browserHistory);

    
    function removeSite(site) {
        while (browserHistory['Open Tabs'].includes(site)) {

            const necessaryIdx = browserHistory['Open Tabs'].indexOf(site);
            browserHistory['Open Tabs'].splice(necessaryIdx, 1);
        }
    }

    function clearBrowserHistory(browserHistory) {
        const parts = [
            browserHistory['Open Tabs'],
            browserHistory['Recently Closed'],
            browserHistory['Browser Logs']
        ];

        parts.forEach(part => part.length = 0);
    }

    function printHistory(browserHistory) {
        console.log(browserHistory['Browser Name']);

        Object.keys(browserHistory).forEach(propName => {
            if (propName !== 'Browser Name') {
                console.log(`${propName}: ${browserHistory[propName].join(', ')}`);        
            }
        });
    }
}


solve(
    {
        "Browser Name": "Google Chrome",
        "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
        "Recently Closed": ["Yahoo", "Gmail"],
        "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
    },

    ["Close Facebook", "Open StackOverFlow", "Open Google"]
);

console.log('');
console.log('');


solve(
    {
        "Browser Name": "Mozilla Firefox",
        "Open Tabs": ["YouTube"],
        "Recently Closed": ["Gmail", "Dropbox"],
        "Browser Logs": ["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]
    },

    ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
);
