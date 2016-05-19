loadData(
    {
        name: 'Chromium OOP iframes dependency graph',
        nodes: [
            { id: 'extensionLaunch', value: { label: '--isolate-extensions launch', milestone: true, bug: '545200' } },
            { id: 'tdiLaunch', value: { label: '--top-document-isolation launch', milestone: true } },
            { id: 'siteSubsetLaunch', value: { label: 'Isolate subset of sites launch', milestone: true } },
            { id: 'miscCleanup', value: { label: 'Ongoing Cleanup', milestone: true } },

            // extensionLaunch
            { id: 'crossFrameScripting', value: { label: 'Cross-process frame scripting', status: 'complete' } },
            { id: 'frameOpeners', value: { label: 'Updatable frame openers', bug: '225940', owner: 'alexmos', status: 'complete' } },
            { id: 'extBrowsingInstance', value: { label: 'Fix BrowsingInstance for extensions', bug: '522302', owner: 'nasko', status: 'complete' } },
            { id: 'crossProcessJS', value: { label: 'Remaining cross-process JS calls', bug: '128768', status: 'complete' } },
            
            { id: 'extensionFTNIds', value: { label: 'Use FTN IDs in extension APIs', bug: '432875', owner: 'robwu', status: 'complete' } },

            { id: 'blinkSupport', value: { label: 'Blink OOPIF support' } },
            { id: 'pageSerialization', value: { label: 'Page serialization (saving)', bug: '526786', owner: 'lukasza', status: 'complete' } },
            { id: 'mixedContent', value: { label: 'Mixed content checks', bug: '486936', owner: 'estark', status: 'complete' } },
            { id: 'zoom', value: { label: 'Zoom level', bug: '528407', owner: 'wjmaclean', status: 'complete' } },
            { id: 'cspBug', value: { label: 'Fix CSP regression', bug: '585501', owner: 'lukasza', status: 'complete' } },
            { id: 'fullscreen', value: { label: 'Fullscreen', bug: '550497', owner: 'alexmos', weeksLeft: 1 } },
            { id: 'ime', value: { label: 'Input Method support', bug: '578168', owner: 'ekaramad', weeksLeft: 4 } },
            { id: 'find', value: { label: 'Find-in-page', bug: '457440', owner: 'paulmeyer', weeksLeft: 3 } },
            { id: 'userGesture', value: { label: 'UserGestureIndicator', bug: '589894', owner: 'kenrb', weeksLeft: 2 } },
            { id: 'visibility', value: { label: 'Page Visibility API', bug: '550967', owner: 'lfg', weeksLeft: 1 } },
            { id: 'gestures', value: { label: 'Gesture support', bug: '587023', owner: 'kenrb', status: 'complete' } },

            { id: 'enableFNEs', value: { label: 'Enable FrameNavigationEntries', bug: '236848', owner: 'creis' } },
            { id: 'locationReplace', value: { label: 'Update location.replace', bug: '317872', owner: 'creis', status: 'complete' } },
            { id: 'transferShortcut', value: { label: 'Shortcut the transfer logic', bug: '495161', owner: 'creis', status: 'complete' } },
            { id: 'subBackForward', value: { label: 'Fix subframe back/forward', bug: '586324', owner: 'creis', status: 'complete' } },
            { id: 'updateTitleState', value: { label: 'Fix UpdateTitle/State', bug: '577449', owner: 'creis', weeksLeft: 1 } },
            { id: 'pendingDeleteFTNs', value: { label: 'Pending delete FTNs', bug: '609963', owner: 'creis', weeksLeft: 3 } },
            { id: 'loadDataBaseURL', value: { label: 'Fix LoadDataWithBaseURL test', bug: '612196', owner: 'creis', weeksLeft: 0 } },

            { id: 'determineSiteInstance', value: { label: 'Use proper RFHM check in CSRH', bug: '536906', owner: 'creis', weeksLeft: 2 } },
            { id: 'crossProcessPost', value: { label: 'Cross-process POST submissions', bug: '101395', owner: 'lukasza', weeksLeft: 2 } },
            
            { id: 'taskManagerOrder', value: { label: 'Improve task manager sort order', owner: 'nick', weeksLeft: 1 } },
            { id: 'flashAnimation', value: { label: 'Flash animation', bug: '593520', owner: 'lfg', status: 'complete' } },
            { id: 'pluginDetection', value: { label: 'Plugin detection', bug: '612200', owner: 'alexmos', weeksLeft: 1 } },
            { id: 'dialogs', value: { label: 'Modal dialogs in OOPIFs', bug: '453893', owner: 'avi', status: 'complete' } },
            { id: 'beginFrame', value: { label: 'Unified BeginFrame', bug: '471411', owner: 'enne', status: 'complete' } },

            { id: 'accessibility', value: { label: 'OOPIF accessibility', bug: '475127', owner: 'dmazzoni', status: 'complete' } },
            
            { id: 'telemetry', value: { label: 'Telemetry (memory, plt, scroll)', bug: '462323', owner: 'nasko', status: 'complete' } },
            { id: 'testsOnWaterfall', value: { label: 'Site Isolation tests on main waterfall' } },
            { id: 'extensionTests', value: { label: 'All tests pass with --isolate-extensions', bug: '532666', owner: 'alexmos' } },
            { id: 'fyiBotTests', value: { label: 'All tests running on FYI bots', bug: '417518', owner: 'alexmos' } },
            { id: 'basicLayoutTests', value: { label: 'Run layout tests with OOPIFs', bug: '477150', owner: 'lukasza', weeksLeft: 2 } },
            { id: 'tryJobsDefault', value: { label: 'Site Isolation try jobs by default', bug: '579704', owner: 'nasko', status: 'complete' } },
            
            { id: 'disableSwappedout', value: { label: 'Disable swappedout://', bug: '357747', owner: 'nasko', status: 'complete' } },
            { id: 'messagePorts', value: { label: 'Update MessagePorts', bug: '473258', owner: 'sgurun', status: 'complete' } },
            { id: 'webviewSwappedOut', value: { label: 'No swappedout in webview', owner: 'nasko', status: 'complete' } },

            // tdiLaunch
            { id: 'netStack', value: { label: 'Downloads and net stack', bug: '472869', owner: 'csharrison', weeksLeft: 4 } },
            { id: 'androidPaintBug', value: { label: 'Android rendering glitch', bug: '607224', weeksLeft: 2 } },
            { id: 'consolidateProcesses', value: { label: 'Consolidate subframe processes', bug: '512560', owner: 'nick', weeksLeft: 2 } },
            { id: 'screenOrientation', value: { label: 'Screen orientation', bug: '498287', weeksLeft: 4 } },
            { id: 'printing', value: { label: 'OOPIF printing', bug: '455764', owner: 'thestig', weeksLeft: 8 } },
            { id: 'pdfUtility', value: { label: 'PDF in utility process', owner: 'thestig' } },
            { id: 'tdiTests', value: { label: 'TDI test coverage', owner: 'nick', weeksLeft: 2 } },
            { id: 'moreLayoutTests', value: { label: 'Run more layout tests with OOPIFs', bug: '477150', owner: 'lukasza', weeksLeft: 8 } },
            { id: 'noNavUnload', value: { label: 'No navigation during unload', bug: '613244', owner: 'lfg', weeksLeft: 4 } },
            { id: 'noTDIWebUI', value: { label: 'No TDI OOPIFs on NTP/chrome://', owner: 'nick', weeksLeft: 2 } },
            { id: 'cspReporting', value: { label: 'Report CSP violations', bug: '611232', weeksLeft: 1 } },

            { id: 'allInputEvents', value: { label: 'All OOPIF input events work', owner: 'kenrb' } },
            { id: 'dragNDrop', value: { label: 'Drag n Drop', bug: '609236', weeksLeft: 6 } },
            { id: 'pointerLock', value: { label: 'Pointer lock API', bug: '601926', owner: 'lfg', weeksLeft: 1 } },
            { id: 'touchSelection', value: { label: 'TouchSelectionController', bug: '470662', owner: 'wjmaclean', weeksLeft: 2 } },

            { id: 'pushMessaging', value: { label: 'Push Messaging', owner: 'dcheng', weeksLeft: 2 } },
            { id: 'editStack', value: { label: 'Edit stack', bug: '549334', owner: 'lukasza', weeksLeft: 4 } },
            { id: 'spellcheck', value: { label: 'OOPIF spellcheck support', owner: 'groby', weeksLeft: 10 } },
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
            { id: 'xfo', value: { label: 'X-Frame-Options', bug: '555418', owner: 'mkwst', status: 'complete' } },
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
            { u: 'extensionLaunch', v: 'crossFrameScripting' },
            { u: 'extensionLaunch', v: 'extensionFTNIds' },
            { u: 'extensionLaunch', v: 'blinkSupport' },
            { u: 'extensionLaunch', v: 'enableFNEs' },
            { u: 'extensionLaunch', v: 'determineSiteInstance' },
            { u: 'extensionLaunch', v: 'crossProcessPost' },
            { u: 'extensionLaunch', v: 'taskManagerOrder' },
            { u: 'extensionLaunch', v: 'flashAnimation' },
            { u: 'extensionLaunch', v: 'pluginDetection' },
            { u: 'extensionLaunch', v: 'dialogs' },
            { u: 'extensionLaunch', v: 'beginFrame' },
            { u: 'extensionLaunch', v: 'accessibility' },
            { u: 'extensionLaunch', v: 'telemetry' },
            { u: 'extensionLaunch', v: 'testsOnWaterfall' },
            { u: 'extensionLaunch', v: 'disableSwappedout' },

            { u: 'crossFrameScripting', v: 'frameOpeners' },
            { u: 'crossFrameScripting', v: 'crossProcessJS' },
            { u: 'crossFrameScripting', v: 'extBrowsingInstance' },

            { u: 'blinkSupport', v: 'pageSerialization' },
            { u: 'blinkSupport', v: 'mixedContent' },
            { u: 'blinkSupport', v: 'zoom' },
            { u: 'blinkSupport', v: 'cspBug' },
            { u: 'blinkSupport', v: 'fullscreen' },
            { u: 'blinkSupport', v: 'ime' },
            { u: 'blinkSupport', v: 'find' },
            { u: 'blinkSupport', v: 'userGesture' },
            { u: 'blinkSupport', v: 'visibility' },
            { u: 'blinkSupport', v: 'gestures' },

            { u: 'enableFNEs', v: 'locationReplace' },
            { u: 'enableFNEs', v: 'transferShortcut' },
            { u: 'enableFNEs', v: 'subBackForward' },
            { u: 'enableFNEs', v: 'updateTitleState' },
            { u: 'enableFNEs', v: 'pendingDeleteFTNs' },
            { u: 'enableFNEs', v: 'loadDataBaseURL' },

            { u: 'testsOnWaterfall', v: 'extensionTests' },
            { u: 'testsOnWaterfall', v: 'fyiBotTests' },
            { u: 'testsOnWaterfall', v: 'basicLayoutTests' },
            { u: 'testsOnWaterfall', v: 'tryJobsDefault' },

            { u: 'disableSwappedout', v: 'messagePorts' },
            { u: 'disableSwappedout', v: 'webviewSwappedOut' },


            { u: 'tdiLaunch', v: 'extensionLaunch' },
            { u: 'tdiLaunch', v: 'netStack' },
            { u: 'tdiLaunch', v: 'androidPaintBug' },
            { u: 'tdiLaunch', v: 'consolidateProcesses' },
            { u: 'tdiLaunch', v: 'screenOrientation' },
            { u: 'tdiLaunch', v: 'printing' },
            { u: 'tdiLaunch', v: 'tdiTests' },
            { u: 'tdiLaunch', v: 'noNavUnload' },
            { u: 'tdiLaunch', v: 'noTDIWebUI' },
            { u: 'tdiLaunch', v: 'cspReporting' },
            { u: 'tdiLaunch', v: 'allInputEvents' },
            { u: 'tdiLaunch', v: 'pushMessaging' },
            { u: 'tdiLaunch', v: 'editStack' },
            { u: 'tdiLaunch', v: 'spellcheck' },
            { u: 'tdiLaunch', v: 'prerendering' },
            { u: 'tdiLaunch', v: 'domDistiller' },
            { u: 'tdiLaunch', v: 'textAutosizing' },

            { u: 'tdiTests', v: 'moreLayoutTests' },

            { u: 'printing', v: 'pdfUtility' },

            { u: 'allInputEvents', v: 'dragNDrop' },
            { u: 'allInputEvents', v: 'pointerLock' },
            { u: 'allInputEvents', v: 'touchSelection' },


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
