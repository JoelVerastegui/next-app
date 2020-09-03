import Content from '../../components/Content';

const About = ({params}) => {
    return(
        <Content>
            <h1>About {params.person}</h1>
        </Content>
    )
}

About.getInitialProps = ({query}) => {
    return {params: query}
}

export default About;