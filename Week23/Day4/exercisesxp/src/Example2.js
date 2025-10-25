import data from './data.json'

const Example2 = () => {
    console.log(data)
    return(
        <div>
            <h1>Skills</h1>
            {data.Skills.map((d1,index1) => (
                <div key={index1}>
                    <h2>{d1.Area}</h2>
                    {d1.SkillSet.map((d2,index2) => (
                        <div key={index2}>
                            <p>{d2.Name}</p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default Example2