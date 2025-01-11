# React useEffect Runs Before First Render

This repository demonstrates a subtle bug in React where a `useEffect` hook logs information to the console *before* the component's first render is fully complete. This leads to unexpected console output and can potentially cause other issues.

The core problem is that the `useEffect`'s callback executes immediately after the component mounts, even before React has finished rendering the initial UI. In this case, the console log happens before the updated value of `count` is reflected in the UI. 

The solution uses `useLayoutEffect` which offers a better synchronisation for effects that need to interact with layout before the screen update.