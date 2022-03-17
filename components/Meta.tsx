import Head from 'next/head'
import { MetaComponent } from '../modules/SystemTypes'

const Meta:MetaComponent = ({ metaDetails }) => {
    return (
        <Head>
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <meta name='keywords' content={metaDetails.keywords} />
            <meta name='description' content={metaDetails.description} />
            <meta charSet='utf-8' />
            <link rel='icon' href='/logo.png' />
            <title>{metaDetails.title}</title>
        </Head>
    )
}

Meta.defaultProps = {
    metaDetails: {
        title: 'Carra Take Home Assignment',
        keywords: 'carra, textured hair, hair care',
        description: `We're creating a joy-filled future for textured hair. We believe that all it takes is the right tools and knowledge. Product recommendations tailored to your needs. Unbiased, expert advice whatever your style and support when you need it. Start the journey and fall in love with your hair!`,
    }
}

export default Meta