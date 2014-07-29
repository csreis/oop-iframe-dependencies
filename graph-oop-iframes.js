loadData(
    {
        name: 'Chromium OOP iframes dependency graph',
        nodes: [
            { id: 'oopiframes', value: { label: 'OOP iframes', milestone: true } },

            { id: 'singleframe', value: { label: 'Single frame milestone', status: 'complete', milestone: true } },

            { id: 'multipleframes', value: { label: 'Multiple frames milestone', milestone: true } },
            { id: 'moveNavToRFH', value: { label: 'Navigate via RFH', status: 'complete' } },
            { id: 'wcToNav', value: { label: 'WebContents methods to Navigator', owner: 'nasko', status: 'complete' } },
            { id: 'rvhNavToRfh', value: { label: 'RVH nav methods to RFH', owner: 'nasko', status: 'complete' } },
            { id: 'rvhStateToRfh', value: { label: 'RVH nav state to RFH', status: 'complete' } },
            { id: 'removeFrameIds', value: { label: 'Replace frame IDs with routing IDs', owner: 'creis', status: 'complete' } },
            { id: 'removeNavHacks', value: { label: 'Remove single-frame hacks', owner: 'creis', status: 'complete' } },
            { id: 'mirrorFrameTree', value: { label: 'Mirror frame tree across renderers', owner: 'nasko' } },
            { id: 'webFrameOwner', value: { label: 'Change WebFrame ownership', owner: 'dcheng', status: 'complete' } },
            { id: 'moveFrameTree', value: { label: 'Move FrameTree out of Blink::core', owner: 'dcheng', status: 'complete' } },
            { id: 'taskManager', value: { label: 'Show frames in TaskManager', owner: 'ncarter', status: 'complete' } },

            { id: 'noswappedout', value: { label: 'Remove swappedout://' } },
            { id: 'renderframeproxy', value: { label: 'RenderFrameProxy{Host}', owner: 'nasko', status: 'complete' } },
            { id: 'webRemoteFrames', value: { label: 'Create WebRemoteFrames in Blink API', owner: 'dcheng', status: 'complete' } },
            { id: 'remoteFrames', value: { label: 'Create RemoteFrames in Blink', owner: 'kenrb', status: 'complete' } },
            { id: 'swapRootFrame', value: { label: 'Swap root LocalFrame/RemoteFrame', owner: 'dcheng' } },
            { id: 'globalObject', value: { label: 'Preserve V8 global object', owner: 'dcheng' } },

            { id: 'backForward', value: { label: 'Back/Forward milestone', milestone: true } },
            { id: 'navController', value: { label: 'Move NavController to Navigator', owner: 'nasko' } },
            { id: 'sessionHistory', value: { label: 'Session History in browser', owner: 'avi' } },
            { id: 'historyController', value: { label: 'Move HistoryController to content', owner: 'japhet', status: 'complete' } },
            { id: 'rvPageIDs', value: { label: 'Remove RenderView::GetPageID', owner: 'avi', status: 'complete' } },
            { id: 'browserPageIDs', value: { label: 'Allocate page IDs in browser', owner: 'avi' } },
            { id: 'sessionRestore', value: { label: 'Update Session Restore' } },

            { id: 'perfTests', value: { label: 'Performance Tests', owner: 'ncarter' } },
            { id: 'fyiBot', value: { label: 'FYI Bot for testing', owner: 'ncarter' } },
            { id: 'layoutTests', value: { label: 'Layout Tests' } },

            { id: 'singleHop', value: { label: 'Single hop painting & routing' } },
            { id: 'surfaces', value: { label: 'Use Surfaces from jamesr' } },
            { id: 'focus', value: { label: 'Browser-side focus tracking', owner: 'creis' } },

            { id: 'didstop', value: { label: 'DidStopLoading works', owner: 'japhet' } },
            { id: 'progressTracker', value: { label: 'ProgressTracker in browser' } },

            { id: 'removeRV', value: { label: 'Remove RV' } },
            { id: 'frameObservers', value: { label: 'Move to RenderFrameObservers', owner: 'mkosiba' } },

            { id: 'removePage', value: { label: 'Remove core::Page' } },
            { id: 'accessibility', value: { label: 'Accessibility tree in browser', owner: 'dmazzoni' } },
            { id: 'printing', value: { label: 'Printing support' } },
            { id: 'findReplace', value: { label: 'Find/Replace support' } },
            { id: 'contentEditable', value: { label: 'Ctrl+A in contentEditable' } },
            { id: 'treeSplicer', value: { label: 'Can splice together partial trees in browser' } },

            { id: 'devTools', value: { label: 'Update DevTools', owner: 'kaznacheev' } },
        ],
        links: [
            { u: 'oopiframes', v: 'singleframe' },

            { u: 'oopiframes', v: 'multipleframes' },
            { u: 'multipleframes', v: 'moveNavToRFH'},
            { u: 'moveNavToRFH', v: 'wcToNav' },
            { u: 'moveNavToRFH', v: 'rvhNavToRfh' },
            { u: 'moveNavToRFH', v: 'rvhStateToRfh' },
            { u: 'moveNavToRFH', v: 'removeFrameIds' },
            { u: 'moveNavToRFH', v: 'removeNavHacks' },
            { u: 'multipleframes', v: 'mirrorFrameTree' },
            { u: 'mirrorFrameTree', v: 'webFrameOwner' },
            { u: 'mirrorFrameTree', v: 'moveFrameTree' },
            { u: 'multipleframes', v: 'taskManager' },

            { u: 'mirrorFrameTree', v: 'renderframeproxy' },
            { u: 'renderframeproxy', v: 'webRemoteFrames' },
            { u: 'renderframeproxy', v: 'remoteFrames' },

            { u: 'oopiframes', v: 'noswappedout' },
            { u: 'noswappedout', v: 'renderframeproxy' },
            { u: 'noswappedout', v: 'swapRootFrame' },
            { u: 'noswappedout', v: 'globalObject' },

            { u: 'oopiframes', v: 'backForward' },
            { u: 'backForward', v: 'navController' },
            { u: 'backForward', v: 'sessionHistory' },
            { u: 'sessionHistory', v: 'historyController' },
            { u: 'sessionHistory', v: 'rvPageIDs' },
            { u: 'sessionHistory', v: 'browserPageIDs' },
            { u: 'backForward', v: 'sessionRestore' },

            { u: 'oopiframes', v: 'perfTests' },
            { u: 'oopiframes', v: 'fyiBot' },
            { u: 'oopiframes', v: 'layoutTests' },
            { u: 'oopiframes', v: 'singleHop' },
            { u: 'singleHop', v: 'surfaces' },
            { u: 'singleHop', v: 'focus' },

            { u: 'oopiframes', v: 'didstop' },
            { u: 'didstop', v: 'progressTracker' },

            { u: 'oopiframes', v: 'removePage' },
            { u: 'removePage', v: 'accessibility' },
            { u: 'removePage', v: 'printing' },
            { u: 'removePage', v: 'findReplace' },
            { u: 'removePage', v: 'contentEditable' },
            { u: 'accessibility', v: 'treeSplicer' },
            { u: 'printing', v: 'treeSplicer' },

            { u: 'oopiframes', v: 'removeRV' },
            { u: 'removeRV', v: 'frameObservers' },

            { u: 'oopiframes', v: 'devTools' },
        ]
    }
);
