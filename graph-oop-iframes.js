loadData(
    {
        name: 'Chromium OOP iframes dependency graph',
        nodes: [
            { id: 'oopiframes', value: { label: 'Out-of-process iframes', bug: '99379', milestone: true } },

            { id: 'extensionLaunch', value: { label: 'Extension milestone', milestone: true } },
			
			{ id: '', value: { label: '', bug: '', owner: '' } },
			
			{ id: 'enforceExtSec', value: { label: 'Enforce extension security', owner: 'nick' } },
			{ id: 'blockCookies', value: { label: 'Block unauthorized cookies', bug: '467150', owner: 'nick', status: 'complete' } },
			{ id: 'isolateExtensions', value: { label: 'Isolate extensions, not all sites', bug: '481066', owner: 'nick' } },
			
            { id: 'sessionHistory', value: { label: 'Session History updated', bug: '236848', owner: 'creis' } },
            { id: 'backForwardBasic', value: { label: 'Basic OOPIF back/forward', bug: '236848', owner: 'creis', status: 'complete' } },
            { id: 'sessionRestoreFNEs', value: { label: 'Restore FNEs in Session Restore', owner: 'avi' } },
			
        links: [
            { u: 'oopiframes', v: 'extensionLaunch' },
            
            { u: 'extensionLaunch', v: 'enforceExtSec' },
            { u: 'extensionLaunch', v: 'sessionHistory' },
			
            { u: 'enforceExtSec', v: 'blockCookies' },
            { u: 'enforceExtSec', v: 'isolateExtensions' },

            { u: 'sessionHistory', v: 'backForwardBasic' },
            { u: 'sessionHistory', v: 'sessionRestoreFNEs' },
        ]
    }
);
