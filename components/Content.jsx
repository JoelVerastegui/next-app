import Head from 'next/head';

import Menu from '../components/Menu';

const Content = (props) => {
    return(
        <div>
            <Head>
                <title>Bar El Daniel</title>
                <link href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/lux/bootstrap.min.css" rel="stylesheet" />
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
            </Head>
            <div className="body">
                <div className="header w-100 d-flex align-items-center text-white" style={{ backgroundColor: '#1E1E1E', height: '4.375rem' }}>
                    <span className="h3 m-1 ml-3 text-white">El Daniel</span>
                    <Menu label="Menu" />
                    {/* <Menu href="about" /> */}
                </div>
                <div className="section">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Content;