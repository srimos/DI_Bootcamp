import{useParams} from 'react-router-dom'

const MyBestFriend = () => {

    const params = useParams()

    return (
        <>
        <h1>My best friend is {params.name}</h1>
        <h1>He likes to {params.hobby}</h1>
        <pre>{JSON.stringify(params)}</pre>
        </>
    )
}

export default MyBestFriend