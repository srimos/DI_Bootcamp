import data from './data.json'

const Example1 = () => {
    console.log(data)
    return(
        <div>
            <h1>SocialMedias</h1>
            {data.SocialMedias.map((d,index) => (
            <div key={index}>
            <p>{d}</p>
            </div>
            ))}
        </div>
    )
}

export default Example1