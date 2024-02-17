We talk a lot about "rendering" in React, but oftentimes we lump together
the 3 phases of the rendering process. Understanding the distinction
between these phases can help us in determining a good strategy for
improving the performance of our React apps.

1. What are the 3 phases of the rendering process called in React?
   1 - Render
   2 - Reconciliation
   3 - Commit

2. What happens in the Render phase?
   React runs the code from the component that had the state change,
   and all the descendent components of that component as well.

3. What happens in the Reconciliation phase?
   React compares the old render with the new render (in VDOM) using
   its diffing algorithm to figure out what changes needs to be made
   to the real DOM.

4. What happens in the Commit phase?
   The changes determined from the reconciliation phase are actually
   committed (painted) to the real DOM, and the user sees the updates
   on the page.
