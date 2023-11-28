type Params = {
    error?: Error, resetErrorBoundary?: any
}

export default function MyFallbackComponent({ error, resetErrorBoundary }: Params) {
    return (
        <div role="alert">
            <p>Something went wrong:</p>
            <pre>{error?.message}</pre>
            <button onClick={resetErrorBoundary}>Try again</button>
        </div>
    )
}
