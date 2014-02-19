loadData(
    {
        name: 'Chromium OOP iframes dependency graph',
        nodes: [
            { id: 'oopiframes', value: { label: 'OOP iframes', milestone: true } },

            { id: 'singleframe', value: { label: 'Single frame milestone [done]', status: 'complete', milestone: true } },

            { id: 'multipleframes', value: { label: 'Multiple frames milestone', milestone: true } },
            { id: 'moveNavToRFH', value: { label: 'Navigate via RFH' } },
            { id: 'wcToNav', value: { label: 'WebContents methods to Navigator', owner: 'nasko' } },
            { id: 'rvhNavToRfh', value: { label: 'RVH methods to RFH', owner: 'nasko' } },
            { id: 'removeFrameIds', value: { label: 'Replace frame IDs with routing IDs', owner: 'creis' } },
            { id: 'removeNavHacks', value: { label: 'Remove single-frame hacks', owner: 'creis' } },
            { id: 'mirrorFrameTree', value: { label: 'Mirror frame tree across renderers' } },
            { id: 'webFrameOwner', value: { label: 'Change WebFrame ownership', owner: 'dcheng', status: 'complete' } },
            { id: 'moveFrameTree', value: { label: 'Move FrameTree out of Blink::core', owner: 'dcheng', status: 'complete' } },
            { id: 'taskManager', value: { label: 'Show frames in TaskManager', owner: 'ncarter' } },

            { id: 'noswappedout', value: { label: 'Remove swappedout://' } },
            { id: 'renderframeproxy', value: { label: 'RenderFrameProxy', owner: 'kenrb' } },
            { id: 'remoteFrames', value: { label: 'Create RemoteFrames in FrameLoader', owner: 'dcheng' } },
            { id: 'frameLoaderLifetime', value: { label: 'Make FrameLoader outlive Frame', owner: 'dcheng' } },

            { id: 'backForward', value: { label: 'Back/Forward milestone', milestone: true } },
            { id: 'sessionHistory', value: { label: 'Session History in browser', owner: 'creis' } },
            { id: 'sessionRestore', value: { label: 'Update Session Restore' } },

            { id: 'perfTests', value: { label: 'Performance Tests', owner: 'ncarter' } },
            { id: 'layoutTests', value: { label: 'Layout Tests' } },

            { id: 'singleHop', value: { label: 'Single hop painting & routing' } },
            { id: 'surfaces', value: { label: 'Use Surfaces from jamesr' } },
            { id: 'focus', value: { label: 'Browser-side focus tracking', owner: 'ncarter' } },


            { id: 'didstop', value: { label: 'DidStopLoading works', owner: 'japhet' } },
            { id: 'progressTracker', value: { label: 'ProgressTracker in browser' } },

            { id: 'removeRVH', value: { label: 'Remove RVH' } },
            { id: 'frameObservers', value: { label: 'Move to RenderFrameObservers', owner: 'mkosiba' } },

            { id: 'removePage', value: { label: 'Remove core::Page' } },
            { id: 'accessibility', value: { label: 'Accessibility tree in browser' } },
            { id: 'printing', value: { label: 'Printing support' } },
            { id: 'findReplace', value: { label: 'Find/Replace support' } },
            { id: 'contentEditable', value: { label: 'Ctrl+A in contentEditable' } },
            { id: 'treeSplicer', value: { label: 'Can splice together partial trees in browser' } },

            { id: 'devTools', value: { label: 'Update DevTools' } },
        ],
        links: [
            { u: 'oopiframes', v: 'singleframe' },

            { u: 'oopiframes', v: 'multipleframes' },
            { u: 'multipleframes', v: 'moveNavToRFH'},
            { u: 'moveNavToRFH', v: 'wcToNav' },
            { u: 'moveNavToRFH', v: 'rvhNavToRfh' },
            { u: 'moveNavToRFH', v: 'removeFrameIds' },
            { u: 'moveNavToRFH', v: 'removeNavHacks' },
            { u: 'multipleframes', v: 'mirrorFrameTree' },
            { u: 'mirrorFrameTree', v: 'webFrameOwner' },
            { u: 'mirrorFrameTree', v: 'moveFrameTree' },
            { u: 'multipleframes', v: 'taskManager' },

            { u: 'mirrorFrameTree', v: 'noswappedout' },
            { u: 'noswappedout', v: 'renderframeproxy' },
            { u: 'renderframeproxy', v: 'remoteFrames' },
            { u: 'remoteFrames', v: 'frameLoaderLifetime' },

            { u: 'oopiframes', v: 'backForward' },
            { u: 'backForward', v: 'sessionHistory' },
            { u: 'backForward', v: 'sessionRestore' },

            { u: 'oopiframes', v: 'perfTests' },
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

            { u: 'oopiframes', v: 'removeRVH' },
            { u: 'removeRVH', v: 'frameObservers' },

            { u: 'oopiframes', v: 'devTools' },
        ]
    }
);
