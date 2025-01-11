```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs after every render, including the initial render
    console.log('Component rendered with count:', count);
    // Problem: This will log 'Component rendered with count: 0' even before the first render completes.   
    return () => {
      // Cleanup function (optional)
      console.log('Component unmounted');
    };
  }, [count]); // The effect depends on the 'count' state

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```