loadData(
    {
        name: 'Chromium OOP iframes dependency graph',
        nodes: [
            { id: 'extensionTrialLaunch', value: { label: 'Extension trial launch', milestone: true } },
            { id: 'extensionDevLaunch', value: { label: 'Extension Dev channel launch', milestone: true } },
            { id: 'siteSubsetLaunch', value: { label: 'Isolate subset of sites launch', milestone: true } },

            { id: 'enforceExtSec', value: { label: 'Enforce extension security', owner: 'nick' } },
            { id: 'blockCookies', value: { label: 'Block unauthorized cookies', bug: '467150', owner: 'nick', status: 'complete' } },
            { id: 'isolateExtensions', value: { label: 'Isolate extensions, not all sites', bug: '481066', owner: 'nick' } },

            { id: 'sessionHistory', value: { label: 'Session History updated', bug: '236848', owner: 'creis' } },
            { id: 'backForwardBasic', value: { label: 'Basic OOPIF back/forward', bug: '236848', owner: 'creis', status: 'complete' } },
            { id: 'backForwardFTNs', value: { label: 'Recreate FTNs in back/forward', bug: '502317', owner: 'creis' } },
            { id: 'backForwardSubtree', value: { label: 'Back/forward with subtree', owner: 'creis' } },
            { id: 'sessionRestoreFNEs', value: { label: 'Restore FNEs in Session Restore', owner: 'avi' } },
        ],
        links: [
            { u: 'extensionTrialLaunch', v: 'enforceExtSec' },
            { u: 'extensionTrialLaunch', v: 'sessionHistory' },

            { u: 'enforceExtSec', v: 'blockCookies' },
            { u: 'enforceExtSec', v: 'isolateExtensions' },

            { u: 'sessionHistory', v: 'backForwardBasic' },
            { u: 'sessionHistory', v: 'backForwardFTNs' },
            { u: 'sessionHistory', v: 'backForwardSubtree' },
            { u: 'sessionHistory', v: 'sessionRestoreFNEs' },

            { u: 'extensionDevLaunch', v: 'extensionTrialLaunch' },

            { u: 'siteSubsetLaunch', v: 'extensionDevLaunch' },
        ]
    }
);
