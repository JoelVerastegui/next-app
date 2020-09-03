import Content from '../../components/Content';

const Post = (props) => {
    console.log('Props: ',props);
    return(
        <Content>
            <h1>About id: {props.myParams.id}</h1>
        </Content>
    )
}

Post.getInitialProps = ({query}) => {
    console.log(`Id: ${query}`);
    return {myParams: query}
}

export default Post;