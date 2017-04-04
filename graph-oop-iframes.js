loadData(
    {
        name: 'Chromium OOP iframes dependency graph',
        nodes: [
            { id: 'tdiLaunch', value: { label: '--top-document-isolation launch', milestone: true } },
            { id: 'safeBrowsingLaunch', value: { label: '--isolate-unsafe-sites launch', milestone: true } },
            { id: 'siteSubsetLaunch', value: { label: 'Isolate subset of sites launch', milestone: true } },
            { id: 'miscCleanup', value: { label: 'Ongoing Cleanup', milestone: true } },

            // tdiLaunch
            { id: 'consolidateTDIProcesses', value: { label: 'Consolidate TDI subframe processes', bug: '674215', owner: 'avi', status: 'complete' } },
            { id: 'tdiTaskManager', value: { label: 'Task Manager shows TDI process', bug: '641776', owner: 'avi', status: 'complete' } },
            { id: 'tdiDesktopTrial', value: { label: '64-bit Desktop Trial', owner: 'nick' } },
            { id: 'tdiMetrics', value: { label: 'Select metrics', owner: 'nick' } },
            { id: 'mediaLoading', value: { label: 'Media loading issues in OOPIFs', bug: '678206', owner: 'csharrison', status: 'complete' } },
            { id: 'tdiHostedAppSubframes', value: { label: 'No TDI OOPIFs for hosted apps', bug: '679011', weeksLeft: 1 } },
            
            { id: 'taskManagerAfterCrash', value: { label: 'Task Manager skips recreated OOPIFs', bug: '642958', owner: 'nick', weeksLeft: 1 } },
            { id: 'v8RemoteContext', value: { label: 'V8 RemoteContext', bug: '527190', owner: 'dcheng', status: 'complete' } },
            { id: 'intersectionObserver', value: { label: 'IntersectionObserver', bug: '615156', owner: 'kenrb', status: 'complete' } },
            { id: 'allInputEvents', value: { label: 'All OOPIF input events work', owner: 'kenrb' } },
            { id: 'remoteToLocal', value: { label: 'Remote to local after OOPIF crash', bug: '487872', owner: 'alexmos', status: 'complete' } },
            { id: 'noTDIWebUI', value: { label: 'No TDI OOPIFs on NTP/chrome://', bug: '665109', owner: 'avi', status: 'complete' } },
            { id: 'devToolsPhase2', value: { label: 'Single DevTools frontend for OOPIFs', bug: '652783', owner: 'dgozman', weeksLeft: 10 } },
            { id: 'screenOrientation', value: { label: 'Screen orientation', bug: '498287', weeksLeft: 4 } },
            { id: 'transferrables', value: { label: 'Transferrables in postMessage', bug: '334408', owner: 'nhiroki', status: 'complete' } },
            { id: 'printing', value: { label: 'Print pages with OOPIFs', bug: '455764', owner: 'weili', weeksLeft: 8 } },
            { id: 'printAnOOPIF', value: { label: 'Print just an OOPIF', owner: 'thestig', bug: '631513', status: 'complete' } },
            { id: 'pdfUtility', value: { label: 'PDF in utility process', owner: 'weili' } },
            { id: 'tdiTests', value: { label: 'TDI test coverage', owner: 'nick', weeksLeft: 2 } },
            { id: 'fyiBotTests', value: { label: 'All tests running on FYI bots', bug: '417518', owner: 'alexmos' } },
            { id: 'moreLayoutTests', value: { label: 'Run more layout tests with OOPIFs', bug: '477150', owner: 'lukasza', weeksLeft: 8 } },
            { id: 'noNavUnload', value: { label: 'No navigation during unload', bug: '613244', owner: 'lfg', status: 'complete' } },
            { id: 'updateTitleState', value: { label: 'Fix UpdateTitle/State', bug: '577449', owner: 'creis', status: 'complete' } },
            { id: 'cspReporting', value: { label: 'Report CSP violations', bug: '611232', weeksLeft: 1 } },
            
            { id: 'tdiAndroid', value: { label: 'Android TDI Trial' } },
            { id: 'androidPaintBug', value: { label: 'Android rendering', bug: '607224', status: 'complete' } },
            { id: 'androidHitTesting', value: { label: 'Android Hit Testing', bug: '491334', owner: 'kenrb', status: 'complete' } },
            { id: 'androidIME', value: { label: 'Finish IME on Android', bug: '578168', owner: 'ekaramad', status: 'complete' } },
            { id: 'androidKills', value: { label: 'Update Android process killing', bug: '683377', owner: 'agrieve', weeksLeft: 4 } },
            { id: 'androidMemory', value: { label: 'Reduce memory on Android', bug: '512357', owner: 'agrieve', weeksLeft: 4 } },
            
            { id: 'pushMessaging', value: { label: 'Push Messaging', owner: 'dcheng', weeksLeft: 2 } },
            { id: 'editStack', value: { label: 'Edit stack', bug: '549334', owner: 'yosin', status: 'complete' } },
            { id: 'spellcheck', value: { label: 'OOPIF spellcheck support', bug: '638351', owner: 'xiaocheng', weeksLeft: 4 } },
            { id: 'prerendering', value: { label: 'Prerendering support', bug: '440544', weeksLeft: 10 } },
            { id: 'domDistiller', value: { label: 'DOM Distiller', status: 'complete' } },
            { id: 'textAutosizing', value: { label: 'Text autosizing', weeksLeft: 6 } },
            { id: 'uniqueNameBrowser', value: { label: 'Compute unique name in browser', bug: '616820', weeksLeft: 2 } },
            { id: 'netStack', value: { label: 'Downloads and net stack', bug: '472869', owner: 'csharrison', weeksLeft: 4 } },
            { id: 'determineSiteInstance', value: { label: 'Use proper RFHM check in CSRH', bug: '536906', owner: 'creis', weeksLeft: 2 } },
            { id: 'pendingDeleteFTNs', value: { label: 'Pending delete FTNs', bug: '609963', owner: 'creis', weeksLeft: 2 } },

            { id: 'userGesture', value: { label: 'UserGestureIndicator', bug: '589894', owner: 'alexmos', weeksLeft: 4 } },
            { id: 'dragNDrop', value: { label: 'Drag n Drop', bug: '647249', owner: 'paulmeyer', status: 'complete' } },
            { id: 'tooltips', value: { label: 'Tooltips', bug: '609932', owner: 'paulmeyer', status: 'complete' } },
            { id: 'pointerLock', value: { label: 'Pointer lock API', bug: '601926', owner: 'lfg', status: 'complete' } },
            { id: 'pointerEvents', value: { label: 'Pointer Events', bug: '680714', owner: 'wjmaclean' } },
            { id: 'touchSelection', value: { label: 'TouchSelectionController', bug: '470662', owner: 'wjmaclean', weeksLeft: 2 } },
            { id: 'pinchZoom', value: { label: 'Pinch zoom page scale', bug: '654917', owner: 'wjmaclean', weeksLeft: 2 } },
            { id: 'win8Tablet', value: { label: 'Win8 Touch Keyboard', bug: '613326', owner: 'ekaramad', status: 'complete' } },
            { id: 'siblingScroll', value: { label: 'Scroll sibling iframes', bug: '675695', owner: 'kenrb', status: 'complete' } },
            { id: 'scrollCoordinator', value: { label: 'Update ScrollingCoordinator', bug: '680606', owner: 'kenrb', weeksLeft: 4 } },
            { id: 'scrollToFocusedNode', value: { label: 'Scroll to focused node', bug: '676037', owner: 'ekaramad', weeksLeft: 2 } },
            { id: 'macRubberBand', value: { label: 'Rubberband scrolling on Mac', bug: '628742', owner: 'wjmaclean', weeksLeft: 4 } },

            // safeBrowsingLaunch
            { id: 'enforceSiteSec', value: { label: 'Enforce site isolation', owner: 'creis' } },
            { id: 'isolateSiteSubset', value: { label: 'Isolate subset of sites', owner: 'creis' } },
            { id: 'blockPasswords', value: { label: 'Block unauthorized passwords', bug: '467150', owner: 'lfg', status: 'complete' } },
            { id: 'blockPermissions', value: { label: 'Block unauthorized site permissions', bug: '467150' } },
            { id: 'blockHTML5Storage', value: { label: 'Block unauthorized HTML5 storage', bug: '467150' } },
            { id: 'xfo', value: { label: 'X-Frame-Options', bug: '555418', owner: 'mkwst', weeksLeft: 2 } },

            { id: 'enableProcessReuse', value: { label: 'Don\'t disable process reuse', bug: '513036', owner: 'nick' } },
            { id: 'consolidateProcesses', value: { label: 'Consolidate subframe processes', bug: '512560', owner: 'nick', weeksLeft: 4 } },

            // siteSubsetLaunch
            { id: 'selectSiteSubset', value: { label: 'Select sites to isolate', owner: 'creis' } },
            { id: 'enforceSiteSec2', value: { label: 'Enforce site isolation', owner: 'creis' } },
            { id: 'blockCrossSiteDocs', value: { label: 'Block cross-site documents', bug: '268640', owner: 'alexmos' } },
            { id: 'devToolsWebIframes', value: { label: 'Isolate web iframes in DevTools', bug: '570483', owner: 'davidsac', status: 'complete' } },
            { id: 'devToolsExtensions', value: { label: 'DevTools extensions out of DevTools', bug: '706169' } },

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
            { u: 'tdiLaunch', v: 'consolidateTDIProcesses' },
            { u: 'tdiLaunch', v: 'tdiTaskManager' },
            { u: 'tdiLaunch', v: 'tdiDesktopTrial' },
            { u: 'tdiLaunch', v: 'taskManagerAfterCrash' },
            { u: 'tdiLaunch', v: 'v8RemoteContext' },
            { u: 'tdiLaunch', v: 'intersectionObserver' },
            { u: 'tdiLaunch', v: 'allInputEvents' },
            { u: 'tdiLaunch', v: 'remoteToLocal' },
            { u: 'tdiLaunch', v: 'noTDIWebUI' },
            { u: 'tdiLaunch', v: 'devToolsPhase2' },
            { u: 'tdiLaunch', v: 'screenOrientation' },
            { u: 'tdiLaunch', v: 'transferrables' },
            { u: 'tdiLaunch', v: 'printing' },
            { u: 'tdiLaunch', v: 'tdiTests' },
            { u: 'tdiLaunch', v: 'noNavUnload' },
            { u: 'tdiLaunch', v: 'updateTitleState' },
            { u: 'tdiLaunch', v: 'cspReporting' },
            { u: 'tdiLaunch', v: 'tdiAndroid' },
            { u: 'tdiLaunch', v: 'androidKills' },
            { u: 'tdiLaunch', v: 'androidMemory' },
            { u: 'tdiLaunch', v: 'pushMessaging' },
            { u: 'tdiLaunch', v: 'editStack' },
            { u: 'tdiLaunch', v: 'spellcheck' },
            { u: 'tdiLaunch', v: 'prerendering' },
            { u: 'tdiLaunch', v: 'domDistiller' },
            { u: 'tdiLaunch', v: 'textAutosizing' },
            { u: 'tdiLaunch', v: 'uniqueNameBrowser' },
            { u: 'tdiLaunch', v: 'netStack' },
            { u: 'tdiLaunch', v: 'determineSiteInstance' },
            { u: 'tdiLaunch', v: 'pendingDeleteFTNs' },

            { u: 'tdiDesktopTrial', v: 'tdiMetrics' },
            { u: 'tdiDesktopTrial', v: 'mediaLoading' },
            { u: 'tdiDesktopTrial', v: 'tdiHostedAppSubframes' },

            { u: 'tdiAndroid', v: 'androidPaintBug' },
            { u: 'tdiAndroid', v: 'androidHitTesting' },
            { u: 'tdiAndroid', v: 'androidIME' },

            { u: 'tdiTests', v: 'fyiBotTests' },
            { u: 'tdiTests', v: 'moreLayoutTests' },

            { u: 'printing', v: 'printAnOOPIF' },
            { u: 'printing', v: 'pdfUtility' },

            { u: 'allInputEvents', v: 'userGesture' },
            { u: 'allInputEvents', v: 'dragNDrop' },
            { u: 'allInputEvents', v: 'tooltips' },
            { u: 'allInputEvents', v: 'pointerLock' },
            { u: 'allInputEvents', v: 'pointerEvents' },
            { u: 'allInputEvents', v: 'touchSelection' },
            { u: 'allInputEvents', v: 'pinchZoom' },
            { u: 'allInputEvents', v: 'win8Tablet' },
            { u: 'allInputEvents', v: 'siblingScroll' },
            { u: 'allInputEvents', v: 'scrollCoordinator' },
            { u: 'allInputEvents', v: 'scrollToFocusedNode' },
            { u: 'allInputEvents', v: 'macRubberBand' },


            { u: 'safeBrowsingLaunch', v: 'enforceSiteSec' },
            { u: 'safeBrowsingLaunch', v: 'enableProcessReuse' },
            { u: 'safeBrowsingLaunch', v: 'consolidateProcesses' },

            { u: 'enforceSiteSec', v: 'isolateSiteSubset' },
            { u: 'enforceSiteSec', v: 'blockPasswords' },
            { u: 'enforceSiteSec', v: 'blockPermissions' },
            { u: 'enforceSiteSec', v: 'blockHTML5Storage' },
            { u: 'enforceSiteSec', v: 'xfo' },

            
            { u: 'siteSubsetLaunch', v: 'tdiLaunch' },
            { u: 'siteSubsetLaunch', v: 'safeBrowsingLaunch' },
            { u: 'siteSubsetLaunch', v: 'selectSiteSubset' },
            { u: 'siteSubsetLaunch', v: 'enforceSiteSec2' },
            { u: 'siteSubsetLaunch', v: 'ntp' },
            { u: 'siteSubsetLaunch', v: 'chromeUrls' },

            { u: 'enforceSiteSec2', v: 'blockCrossSiteDocs' },
            { u: 'enforceSiteSec2', v: 'devToolsWebIframes' },
            { u: 'enforceSiteSec2', v: 'devToolsExtensions' },

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
