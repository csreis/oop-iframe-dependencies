loadData(
    {
        name: 'Chromium OOP iframes dependency graph',
        nodes: [
            { id: 'tdiLaunch', value: { label: '--top-document-isolation launch', milestone: true } },
            { id: 'siteSubsetLaunch', value: { label: 'Isolate subset of sites launch', milestone: true } },
            { id: 'miscCleanup', value: { label: 'Ongoing Cleanup', milestone: true } },

            // tdiLaunch
            { id: 'androidPaintBug', value: { label: 'Android rendering', bug: '607224', weeksLeft: 2 } },
            { id: 'consolidateProcesses', value: { label: 'Consolidate subframe processes', bug: '512560', owner: 'nick', weeksLeft: 4 } },
            { id: 'tdiTaskManager', value: { label: 'Task Manager shows TDI process', bug: '641776', owner: 'avi', status: 'complete' } },
            { id: 'v8RemoteContext', value: { label: 'V8 RemoteContext', bug: '527190', owner: 'dcheng', weeksLeft: 4 } },
            { id: 'intersectionObserver', value: { label: 'IntersectionObserver', bug: '615156', owner: 'kenrb', weeksLeft: 3 } },
            { id: 'noTDIWebUI', value: { label: 'No TDI OOPIFs on NTP/chrome://', bug: '665109', owner: 'avi', weeksLeft: 2 } },
            { id: 'devToolsPhase2', value: { label: 'Single DevTools frontend for OOPIFs', bug: '652783', owner: 'dgozman', weeksLeft: 10 } },
            { id: 'netStack', value: { label: 'Downloads and net stack', bug: '472869', owner: 'csharrison', weeksLeft: 4 } },
            { id: 'determineSiteInstance', value: { label: 'Use proper RFHM check in CSRH', bug: '536906', owner: 'creis', weeksLeft: 2 } },
            { id: 'screenOrientation', value: { label: 'Screen orientation', bug: '498287', weeksLeft: 4 } },
            { id: 'transferrables', value: { label: 'Transferrables in postMessage', bug: '334408', weeksLeft: 4 } },
            { id: 'printing', value: { label: 'OOPIF printing', bug: '455764', owner: 'thestig', weeksLeft: 8 } },
            { id: 'pdfUtility', value: { label: 'PDF in utility process', owner: 'thestig' } },
            { id: 'tdiTests', value: { label: 'TDI test coverage', owner: 'nick', weeksLeft: 2 } },
            { id: 'fyiBotTests', value: { label: 'All tests running on FYI bots', bug: '417518', owner: 'alexmos' } },
            { id: 'moreLayoutTests', value: { label: 'Run more layout tests with OOPIFs', bug: '477150', owner: 'lukasza', weeksLeft: 8 } },
            { id: 'noNavUnload', value: { label: 'No navigation during unload', bug: '613244', owner: 'lfg', weeksLeft: 4 } },
            { id: 'uniqueNameBrowser', value: { label: 'Compute unique name in browser', bug: '616820', weeksLeft: 2 } },
            { id: 'updateTitleState', value: { label: 'Fix UpdateTitle/State', bug: '577449', owner: 'creis', weeksLeft: 1 } },
            { id: 'pendingDeleteFTNs', value: { label: 'Pending delete FTNs', bug: '609963', owner: 'creis', weeksLeft: 2 } },
            { id: 'cspReporting', value: { label: 'Report CSP violations', bug: '611232', weeksLeft: 1 } },

            { id: 'allInputEvents', value: { label: 'All OOPIF input events work', owner: 'kenrb' } },
            { id: 'userGesture', value: { label: 'UserGestureIndicator', bug: '589894', owner: 'kenrb', weeksLeft: 2 } },
            { id: 'dragNDrop', value: { label: 'Drag n Drop', bug: '647249', owner: 'paulmeyer', weeksLeft: 6 } },
            { id: 'tooltips', value: { label: 'Tooltips', bug: '609932', owner: 'paulmeyer', weeksLeft: 1 } },
            { id: 'pointerLock', value: { label: 'Pointer lock API', bug: '601926', owner: 'lfg', status: 'complete' } },
            { id: 'touchSelection', value: { label: 'TouchSelectionController', bug: '470662', owner: 'wjmaclean', weeksLeft: 2 } },
            { id: 'win8Tablet', value: { label: 'Win8 Touch Keyboard', bug: '613326', weeksLeft: 2 } },

            { id: 'pushMessaging', value: { label: 'Push Messaging', owner: 'dcheng', weeksLeft: 2 } },
            { id: 'editStack', value: { label: 'Edit stack', bug: '549334', owner: 'yosin', status: 'complete' } },
            { id: 'spellcheck', value: { label: 'OOPIF spellcheck support', bug: '638351', owner: 'groby', weeksLeft: 10 } },
            { id: 'prerendering', value: { label: 'Prerendering support', bug: '440544', weeksLeft: 10 } },
            { id: 'domDistiller', value: { label: 'DOM Distiller', status: 'complete' } },
            { id: 'textAutosizing', value: { label: 'Text autosizing', weeksLeft: 6 } },

            // siteSubsetLaunch
            { id: 'selectSiteSubset', value: { label: 'Select sites to isolate', owner: 'creis' } },
            { id: 'enforceSiteSec', value: { label: 'Enforce site isolation', owner: 'creis' } },
            { id: 'isolateSiteSubset', value: { label: 'Isolate subset of sites', owner: 'creis' } },
            { id: 'blockPasswords', value: { label: 'Block unauthorized passwords', bug: '467150', owner: 'lfg', status: 'complete' } },
            { id: 'blockPermissions', value: { label: 'Block unauthorized site permissions', bug: '467150' } },
            { id: 'blockHTML5Storage', value: { label: 'Block unauthorized HTML5 storage', bug: '467150' } },
            { id: 'blockCrossSiteDocs', value: { label: 'Block cross-site documents', bug: '268640', owner: 'alexmos' } },
            { id: 'xfo', value: { label: 'X-Frame-Options', bug: '555418', owner: 'mkwst', weeksLeft: '2' } },
            { id: 'devToolsWebIframes', value: { label: 'Isolate web iframes in DevTools', bug: '570483' } },
            { id: 'frameIOData', value: { label: 'FrameIOData', owner: 'nick' } },

            { id: 'enableProcessReuse', value: { label: 'Don\'t disable process reuse', bug: '513036', owner: 'nick' } },
            { id: 'ntp', value: { label: 'OOPIF NTP support', bug: '566091' } },
            { id: 'chromeUrls', value: { label: 'OOPIF chrome:// support' } },

            // miscCleanup
            { id: 'renderWidgetSplit', value: { label: 'Split RenderView/RenderWidget', bug: '419087', owner: 'avi' } },
            { id: 'webFrameWidget', value: { label: 'Use WebFrameWidget in main frame', bug: '419087', owner: 'dcheng' } },
            { id: 'removeSwappedout', value: { label: 'Remove swappedout://', bug: '357747', owner: 'nasko', status: 'complete' } },
            { id: 'shareFNEs', value: { label: 'Share FrameNavigationEntries', bug: '373041', owner: 'creis' } },
            { id: 'shareFNEsUnlessCloning', value: { label: 'Share FNEs unless cloning', bug: '373041', owner: 'creis' } },
            { id: 'restoreWithSharing', value: { label: 'Session restore with shared FNEs', owner: 'avi' } },
            { id: 'initialNavEntry', value: { label: 'NavEntry for initial blank page', bug: '524208', owner: 'creis' } },
            { id: 'auditGetRPH', value: { label: 'Audit GetRenderProcessHosts calls', bug: '585839', owner: 'creis' } },
            { id: 'removeRVH', value: { label: 'Remove RenderViewHost' } },
        ],
        links: [
            { u: 'tdiLaunch', v: 'androidPaintBug' },
            { u: 'tdiLaunch', v: 'consolidateProcesses' },
            { u: 'tdiLaunch', v: 'tdiTaskManager' },
            { u: 'tdiLaunch', v: 'v8RemoteContext' },
            { u: 'tdiLaunch', v: 'intersectionObserver' },
            { u: 'tdiLaunch', v: 'noTDIWebUI' },
            { u: 'tdiLaunch', v: 'devToolsPhase2' },
            { u: 'tdiLaunch', v: 'netStack' },
            { u: 'tdiLaunch', v: 'determineSiteInstance' },
            { u: 'tdiLaunch', v: 'screenOrientation' },
            { u: 'tdiLaunch', v: 'transferrables' },
            { u: 'tdiLaunch', v: 'printing' },
            { u: 'tdiLaunch', v: 'tdiTests' },
            { u: 'tdiLaunch', v: 'noNavUnload' },
            { u: 'tdiLaunch', v: 'uniqueNameBrowser' },
            { u: 'tdiLaunch', v: 'updateTitleState' },
            { u: 'tdiLaunch', v: 'pendingDeleteFTNs' },
            { u: 'tdiLaunch', v: 'cspReporting' },
            { u: 'tdiLaunch', v: 'allInputEvents' },
            { u: 'tdiLaunch', v: 'pushMessaging' },
            { u: 'tdiLaunch', v: 'editStack' },
            { u: 'tdiLaunch', v: 'spellcheck' },
            { u: 'tdiLaunch', v: 'prerendering' },
            { u: 'tdiLaunch', v: 'domDistiller' },
            { u: 'tdiLaunch', v: 'textAutosizing' },

            { u: 'tdiTests', v: 'fyiBotTests' },
            { u: 'tdiTests', v: 'moreLayoutTests' },

            { u: 'printing', v: 'pdfUtility' },

            { u: 'allInputEvents', v: 'userGesture' },
            { u: 'allInputEvents', v: 'dragNDrop' },
            { u: 'allInputEvents', v: 'tooltips' },
            { u: 'allInputEvents', v: 'pointerLock' },
            { u: 'allInputEvents', v: 'touchSelection' },
            { u: 'allInputEvents', v: 'win8Tablet' },


            { u: 'siteSubsetLaunch', v: 'tdiLaunch' },
            { u: 'siteSubsetLaunch', v: 'selectSiteSubset' },
            { u: 'siteSubsetLaunch', v: 'enforceSiteSec' },
            { u: 'siteSubsetLaunch', v: 'enableProcessReuse' },
            { u: 'siteSubsetLaunch', v: 'ntp' },
            { u: 'siteSubsetLaunch', v: 'chromeUrls' },

            { u: 'enforceSiteSec', v: 'isolateSiteSubset' },
            { u: 'enforceSiteSec', v: 'blockPasswords' },
            { u: 'enforceSiteSec', v: 'blockPermissions' },
            { u: 'enforceSiteSec', v: 'blockHTML5Storage' },
            { u: 'enforceSiteSec', v: 'blockCrossSiteDocs' },
            { u: 'enforceSiteSec', v: 'xfo' },
            { u: 'enforceSiteSec', v: 'devToolsWebIframes' },
            { u: 'enforceSiteSec', v: 'frameIOData' },

            { u: 'miscCleanup', v: 'renderWidgetSplit' },
            { u: 'miscCleanup', v: 'webFrameWidget' },
            { u: 'miscCleanup', v: 'removeSwappedout' },
            { u: 'miscCleanup', v: 'shareFNEs' },
            { u: 'shareFNEs', v: 'shareFNEsUnlessCloning' },
            { u: 'shareFNEs', v: 'restoreWithSharing' },
            { u: 'miscCleanup', v: 'initialNavEntry' },
            { u: 'miscCleanup', v: 'auditGetRPH' },
            { u: 'miscCleanup', v: 'removeRVH' },
        ]
    }
);
