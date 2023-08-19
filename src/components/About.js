function About({data }){
    const defaultImage = "https://via.placeholder.com/215"
    return(
        <aside>
            <img src={data.image || defaultImage} alt="blog logo"></img>
            <p>{data.about}</p>
        </aside>
    )
}

export default About;