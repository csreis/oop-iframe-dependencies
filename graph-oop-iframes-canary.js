loadData(
    {
        name: 'Chromium OOP iframes dependency graph',
        nodes: [
            { id: 'extensionTrialLaunch', value: { label: 'Extension trial launch', milestone: true, bug: '546050', status: 'complete' } },

            // extensionTrialLaunch
            { id: 'enforceExtSec', value: { label: 'Enforce extension security', status: 'complete' } },
            { id: 'isolateExtensions', value: { label: 'Isolate extensions, not all sites', bug: '481066', owner: 'nick', status: 'complete' } },
            { id: 'dontIsolatedHostedApps', value: { label: 'Don\'t isolate hosted apps', bug: '535073', owner: 'nick', status: 'complete' } },
            { id: 'blockCookies', value: { label: 'Block unauthorized cookies', bug: '467150', owner: 'nick', status: 'complete' } },

            { id: 'extensionSupport', value: { label: 'Basic extension support', status: 'complete' } },
            { id: 'browserActions', value: { label: 'OOPIFs in browser actions', bug: '546267', owner: 'alexmos', status: 'complete' } },
            { id: 'extensionTests', value: { label: 'All tests pass with --isolate-extensions', bug: '532666', owner: 'alexmos' } },

            { id: 'launchMetrics', value: { label: 'Metrics for launch', status: 'complete' } },
            { id: 'umaProcessCount', value: { label: 'UMA stats for process count', bug: '248299', owner: 'nick', status: 'complete' } },
            { id: 'umaOOPIFCount', value: { label: 'UMA stats for actual OOPIFs', bug: '542921', owner: 'nasko', status: 'complete' } },

            { id: 'mostInputEvents', value: { label: 'Most OOPIF input events work', status: 'complete' } },
            { id: 'hitTesting', value: { label: 'Browser-side hit testing', bug: '491334', owner: 'kenrb', status: 'complete' } },
            { id: 'contextMenus', value: { label: 'OOPIF context menus', owner: 'kenrb', status: 'complete' } },
            { id: 'scrolling', value: { label: 'OOPIF scrolling works', owner: 'kenrb', status: 'complete' } },
            { id: 'mouseCursor', value: { label: 'OOPIF mouse cursor updates', owner: 'kenrb', status: 'complete' } },

            { id: 'basicBlinkSupport', value: { label: 'Basic Blink OOPIF support', status: 'complete' } },
            { id: 'focusController', value: { label: 'Focus controller and keyboard', bug: '339659', owner: 'alexmos', status: 'complete' } },
            { id: 'animation', value: { label: 'requestAnimationFrame', bug: '529785', owner: 'lfg', status: 'complete' } },

            { id: 'enableProcessReuseExtensions', value: { label: 'Allow process reuse in --isolate-extensions', bug: '513036', owner: 'nick', status: 'complete' } },

            { id: 'sessionHistory', value: { label: 'Session History updated', bug: '236848', owner: 'creis', status: 'complete' } },
            { id: 'backForwardBasic', value: { label: 'Basic OOPIF back/forward', bug: '236848', owner: 'creis', status: 'complete' } },
            { id: 'transferCrash', value: { label: 'Fix subframe transfer crash', bug: '536145', owner: 'creis', status: 'complete' } },
            { id: 'backForwardFTNs', value: { label: 'Recreate FTNs in back/forward', bug: '502317', owner: 'creis', status: 'complete' } },
            { id: 'sessionRestoreFNEs', value: { label: 'Restore FNEs in Session Restore', bug: '545219', owner: 'creis', status: 'complete' } },
        ],
        links: [
            { u: 'extensionTrialLaunch', v: 'enforceExtSec' },
            { u: 'extensionTrialLaunch', v: 'extensionSupport' },
            { u: 'extensionTrialLaunch', v: 'launchMetrics' },
            { u: 'extensionTrialLaunch', v: 'mostInputEvents' },
            { u: 'extensionTrialLaunch', v: 'basicBlinkSupport' },
            { u: 'extensionTrialLaunch', v: 'enableProcessReuseExtensions' },
            { u: 'extensionTrialLaunch', v: 'sessionHistory' },

            { u: 'enforceExtSec', v: 'isolateExtensions' },
            { u: 'enforceExtSec', v: 'dontIsolatedHostedApps' },
            { u: 'enforceExtSec', v: 'blockCookies' },

            { u: 'mostInputEvents', v: 'hitTesting' },
            { u: 'mostInputEvents', v: 'contextMenus' },
            { u: 'mostInputEvents', v: 'scrolling' },
            { u: 'mostInputEvents', v: 'mouseCursor' },

            { u: 'basicBlinkSupport', v: 'focusController' },
            { u: 'basicBlinkSupport', v: 'animation' },
            
            { u: 'extensionSupport', v: 'browserActions' },
            { u: 'extensionSupport', v: 'extensionTests' },

            { u: 'launchMetrics', v: 'umaProcessCount' },
            { u: 'launchMetrics', v: 'umaOOPIFCount' },

        ]
    }
);
