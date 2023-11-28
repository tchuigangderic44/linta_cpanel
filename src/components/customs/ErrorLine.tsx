
type Props = {
    error?: string
}

export default function ErrorLine({ error }: Props) {
    return (
        <>
            {error && <p className=" text-danger block mb-2" >{error}</p>}
        </>
    )
}