import data from './data.json'

const Example3 = () => {
    console.log(data)
    return(
        <div>
            <h1>Experiences</h1>
            {data.Experiences.map((d1,index1) => (
                <div key={index1}>
                    <p>{d1.logo}</p>
                    <a href={d1.url} target="_blank" rel="noopener noreferrer">
                        {d1.companyName}
                    </a>
                    {d1.roles.map((d2,index2) => (
                        <div key={index2}>
                            <h2>{d2.title}</h2>
                            <p>{d2.startDate}{d2.location}</p>
                            <p>{d2.description}</p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default Example3