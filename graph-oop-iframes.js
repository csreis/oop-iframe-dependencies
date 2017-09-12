loadData(
    {
        name: 'Chromium OOP iframes dependency graph',
        nodes: [
            { id: 'signinLaunch', value: { label: 'Sign-in Isolation launch', milestone: true } },
            { id: 'safeBrowsingLaunch', value: { label: '--isolate-unsafe-sites launch', milestone: true } },
            { id: 'siteSubsetLaunch', value: { label: 'Isolate subset of sites launch', milestone: true } },
            { id: 'tdiLaunch', value: { label: '--top-document-isolation launch', milestone: true } },
            { id: 'miscCleanup', value: { label: 'Ongoing Cleanup', milestone: true } },

            
            // signinLaunch
            { id: 'createFrameCrash', value: { label: 'Fix CreateFrame crash', bug: '756790', owner: 'alexmos', weeksLeft: 1 } },
            { id: 'passwordKills', value: { label: 'Fix passwords kill', bug: '756587', owner: 'alexmos', weeksLeft: 1 } },

            
            // safeBrowsingLaunch
            { id: 'allInputEvents', value: { label: 'All OOPIF input events work', owner: 'wjmaclean' } },
            { id: 'clickthroughIsolation', value: { label: 'Implement clickthrough isolation', owner: 'alexmos' } },
            { id: 'enforceSiteSec', value: { label: 'Enforce site isolation', owner: 'nasko' } },
            { id: 'blockPermissions', value: { label: 'Block unauthorized site permissions', bug: '' } },
            { id: 'blockHTML5Storage', value: { label: 'Block unauthorized HTML5 storage', bug: '467150' } },

            { id: 'pointerEvents', value: { label: 'Pointer Events', bug: '680714', owner: 'wjmaclean' } },
            { id: 'touchSelection', value: { label: 'TouchSelectionController', bug: '470662', owner: 'wjmaclean', weeksLeft: 2 } },
            { id: 'pinchZoom', value: { label: 'Pinch zoom page scale', bug: '654917', owner: 'wjmaclean', weeksLeft: 2 } },
            { id: 'scrollToFocusedNode', value: { label: 'Scroll to focused node', bug: '676037', owner: 'ekaramad', weeksLeft: 2 } },
            { id: 'macRubberBand', value: { label: 'Rubberband scrolling on Mac', bug: '628742', owner: 'wjmaclean', weeksLeft: 4 } },
            { id: 'scrollBoundary', value: { label: 'Scroll boundary bug', bug: '760209', owner: 'sunyunjia', weeksLeft: 4 } },

            { id: 'windowPerformance', value: { label: 'window.performance API', bug: '608780', weeksLeft: 4 } },
            { id: 'useCounter', value: { label: 'UseCounter with OOPIFs', bug: '716565', owner: 'loonybear', weeksLeft: 4 } },
            { id: 'browsingInstanceNamespaces', value: { label: 'BrowsingInstance namespaces', bug: '718489', owner: 'lukasza', weeksLeft: 4 } },
            { id: 'consolidateProcesses', value: { label: 'Consolidate subframe processes', bug: '512560', weeksLeft: 4 } },
            

            // siteSubsetLaunch
            { id: 'selectSiteSubset', value: { label: 'Select sites to isolate', owner: 'creis' } },
            { id: 'fullIsolationTrial', value: { label: 'Full site-per-process trial', bug: '760778', owner: 'lukasz' } },
            { id: 'enterprise', value: { label: 'Enterprise isolation policy', bug: '760761', owner: 'creis' } },
            { id: 'groupsOfSites', value: { label: 'Isolate groups of sites', bug: '760757', owner: 'creis' } },
            { id: 'enforceSiteSec2', value: { label: 'Enforce site isolation', owner: 'creis' } },
            { id: 'blockCrossSiteDocs', value: { label: 'Block cross-site documents', bug: '268640', owner: 'alexmos' } },
            { id: 'contentScriptFetch', value: { label: 'Limit content script fetches', bug: '726951', owner: 'nick' } },
            { id: 'contentScriptFetchMetrics', value: { label: 'Collect content script metrics', bug: '', owner: 'nick' } },

            { id: 'printing', value: { label: 'Print pages with OOPIFs', bug: '455764', owner: 'weili', weeksLeft: 8 } },
            { id: 'netStack', value: { label: 'Downloads and net stack', bug: '472869', owner: '', weeksLeft: 4 } },
            { id: 'devToolsBugs', value: { label: 'Fix DevTools OOPIF bugs' } },
            { id: 'devToolsOopifPlzNav', value: { label: 'Missing OOPIF requests in PlzNav', bug: '750901', owner: 'caseq' } },
            { id: 'devToolsCookies', value: { label: 'Missing cookie panel for OOPIF requests', bug: '750898', owner: 'allada' } },
            { id: 'devToolsBindingsZero', value: { label: 'DevTools SetBindings Zero bug', bug: '733767', owner: 'alexmos' } },

            { id: 'ntpIsolatedOrigin', value: { label: 'Isolated origins vs NTP', bug: '755595', weeksLeft: 4 } },
            { id: 'hostedAppModel', value: { label: 'Hosted app process model', bug: '718516', weeksLeft: 2 } },
            { id: 'gpuMemory', value: { label: 'Reduce OOPIF GPU memory', bug: '690605', owner: 'kenrb', weeksLeft: 4 } },
            { id: 'userGesture', value: { label: 'UserGestureIndicator', bug: '589894', owner: 'alexmos', weeksLeft: 4 } },
            { id: 'localStorageDispatch', value: { label: 'localStorage event dispatch', bug: '753130', owner: '', weeksLeft: 4 } },
            { id: 'headless', value: { label: 'Headless OOPIF support', bug: '715924', weeksLeft: 4 } },
            { id: 'chromeDriver', value: { label: 'ChromeDriver OOPIF support', bug: '746266', weeksLeft: 4 } },
            { id: 'cspReporting', value: { label: 'Report CSP violations', bug: '611232', weeksLeft: 1 } },
            { id: 'fyiBotTests', value: { label: 'All tests running on FYI bots', bug: '417518', owner: 'alexmos' } },
            { id: 'moreLayoutTests', value: { label: 'Run more layout tests with OOPIFs', bug: '477150', owner: 'lukasza', weeksLeft: 8 } },
            
            { id: 'uniqueNameBrowser', value: { label: 'Compute unique name in browser', bug: '616820', owner: 'dcheng', weeksLeft: 2 } },
            { id: 'pushMessaging', value: { label: 'Push Messaging', owner: 'dcheng', weeksLeft: 2 } },
            { id: 'prerendering', value: { label: 'Prerendering support', bug: '440544', weeksLeft: 10 } },

            
            // tdiLaunch
            { id: 'tdiDesktopTrial', value: { label: 'TDI Desktop Trial', owner: 'lukasza' } },
            { id: 'tdiAds', value: { label: 'Ad-based TDI', owner: 'lukasza' } },
            { id: 'tdiAndroid', value: { label: 'Android TDI Trial' } },
            { id: 'androidKills', value: { label: 'Update Android process killing', bug: '683377', owner: 'agrieve', weeksLeft: 4 } },
            { id: 'androidMemory', value: { label: 'Reduce memory on Android', bug: '512357', owner: 'agrieve', weeksLeft: 4 } },
            { id: 'tdiAwareAndroidOomMetrics', value: { label: 'TDI-aware OOM metrics', bug: '733383', weeksLeft: 2 } },
            { id: 'textAutosizing', value: { label: 'Text autosizing', weeksLeft: 6 } },

            
            // miscCleanup
            { id: 'ntp', value: { label: 'OOPIF NTP support', bug: '566091' } },
            { id: 'chromeUrls', value: { label: 'OOPIF chrome:// support' } },
            { id: 'topDocument', value: { label: 'Remove top->document calls', bug: '466297' } },
            { id: 'renderWidgetSplit', value: { label: 'Split RenderView/RenderWidget', bug: '419087', owner: 'avi' } },
            { id: 'webFrameWidget', value: { label: 'Use WebFrameWidget in main frame', bug: '419087', owner: 'dcheng' } },
            { id: 'removeSwappedoutFilter', value: { label: 'Remove swapped out IPC filter', owner: 'lukasza', weeksLeft: 4 } },
            { id: 'scrollCoordinator', value: { label: 'Update ScrollingCoordinator', bug: '680606', owner: 'kenrb', weeksLeft: 4 } },
            { id: 'pendingDeleteFTNs', value: { label: 'Pending delete FTNs', bug: '609963', weeksLeft: 4 } },
            { id: 'shareFNEs', value: { label: 'Share FrameNavigationEntries', bug: '373041', owner: 'creis' } },
            { id: 'shareFNEsUnlessCloning', value: { label: 'Share FNEs unless cloning', bug: '373041', owner: 'creis' } },
            { id: 'restoreWithSharing', value: { label: 'Session restore with shared FNEs', owner: 'avi' } },
            { id: 'initialNavEntry', value: { label: 'NavEntry for initial blank page', bug: '524208', owner: 'creis' } },
            { id: 'auditGetRPH', value: { label: 'Audit GetRenderProcessHosts calls', bug: '585839', owner: 'creis' } },
            { id: 'removeRVH', value: { label: 'Remove RenderViewHost' } },
        ],
        links: [
            { u: 'signinLaunch', v: 'createFrameCrash' },
            { u: 'signinLaunch', v: 'passwordKills' },
            
            
            { u: 'safeBrowsingLaunch', v: 'signinLaunch' },
            { u: 'safeBrowsingLaunch', v: 'allInputEvents' },
            { u: 'safeBrowsingLaunch', v: 'clickthroughIsolation' },
            { u: 'safeBrowsingLaunch', v: 'enforceSiteSec' },
            { u: 'safeBrowsingLaunch', v: 'windowPerformance' },
            { u: 'safeBrowsingLaunch', v: 'useCounter' },
            { u: 'safeBrowsingLaunch', v: 'consolidateProcesses' },
            { u: 'consolidateProcesses', v: 'browsingInstanceNamespaces' },

            { u: 'allInputEvents', v: 'pointerEvents' },
            { u: 'allInputEvents', v: 'touchSelection' },
            { u: 'allInputEvents', v: 'pinchZoom' },
            { u: 'allInputEvents', v: 'scrollToFocusedNode' },
            { u: 'allInputEvents', v: 'macRubberBand' },
            { u: 'allInputEvents', v: 'scrollBoundary' },
            
            { u: 'enforceSiteSec', v: 'blockPermissions' },
            { u: 'enforceSiteSec', v: 'blockHTML5Storage' },

            
            { u: 'siteSubsetLaunch', v: 'safeBrowsingLaunch' },
            { u: 'siteSubsetLaunch', v: 'selectSiteSubset' },
            { u: 'selectSiteSubset', v: 'fullIsolationTrial' },
            { u: 'siteSubsetLaunch', v: 'enterprise' },
            { u: 'enterprise', v: 'groupsOfSites' },
            { u: 'siteSubsetLaunch', v: 'enforceSiteSec2' },
            
            { u: 'siteSubsetLaunch', v: 'printing' },
            { u: 'siteSubsetLaunch', v: 'netStack' },
            { u: 'siteSubsetLaunch', v: 'devToolsBugs' },
            { u: 'siteSubsetLaunch', v: 'ntpIsolatedOrigin' },
            { u: 'siteSubsetLaunch', v: 'hostedAppModel' },
            { u: 'siteSubsetLaunch', v: 'gpuMemory' },
            { u: 'siteSubsetLaunch', v: 'userGesture' },
            { u: 'siteSubsetLaunch', v: 'localStorageDispatch' },
            { u: 'siteSubsetLaunch', v: 'headless' },
            { u: 'siteSubsetLaunch', v: 'chromeDriver' },
            { u: 'siteSubsetLaunch', v: 'cspReporting' },
            { u: 'siteSubsetLaunch', v: 'fyiBotTests' },
            { u: 'siteSubsetLaunch', v: 'moreLayoutTests' },
            { u: 'siteSubsetLaunch', v: 'uniqueNameBrowser' },
            { u: 'siteSubsetLaunch', v: 'pushMessaging' },
            { u: 'siteSubsetLaunch', v: 'prerendering' },

            { u: 'devToolsBugs', v: 'devToolsOopifPlzNav' },
            { u: 'devToolsBugs', v: 'devToolsCookies' },
            { u: 'devToolsBugs', v: 'devToolsBindingsZero' },

            { u: 'enforceSiteSec2', v: 'blockCrossSiteDocs' },
            { u: 'enforceSiteSec2', v: 'contentScriptFetch' },
            { u: 'contentScriptFetch', v: 'contentScriptFetchMetrics' },


            { u: 'tdiLaunch', v: 'tdiDesktopTrial' },
            { u: 'tdiLaunch', v: 'tdiAndroid' },

            { u: 'tdiDesktopTrial', v: 'tdiAds' },

            { u: 'tdiAndroid', v: 'androidKills' },
            { u: 'tdiAndroid', v: 'androidMemory' },
            { u: 'tdiAndroid', v: 'tdiAwareAndroidOomMetrics' },
            { u: 'tdiAndroid', v: 'textAutosizing' },

            
            { u: 'miscCleanup', v: 'ntp' },
            { u: 'miscCleanup', v: 'chromeUrls' },
            { u: 'miscCleanup', v: 'topDocument' },
            { u: 'miscCleanup', v: 'renderWidgetSplit' },
            { u: 'miscCleanup', v: 'webFrameWidget' },
            { u: 'miscCleanup', v: 'removeSwappedoutFilter' },
            { u: 'miscCleanup', v: 'scrollCoordinator' },
            { u: 'miscCleanup', v: 'pendingDeleteFTNs' },
            { u: 'miscCleanup', v: 'shareFNEs' },
            { u: 'shareFNEs', v: 'shareFNEsUnlessCloning' },
            { u: 'shareFNEs', v: 'restoreWithSharing' },
            { u: 'miscCleanup', v: 'initialNavEntry' },
            { u: 'miscCleanup', v: 'auditGetRPH' },
            { u: 'miscCleanup', v: 'removeRVH' },
        ]
    }
);
