import Head from 'next/head'
import Layout from '../components/layouts/layout'
import Content from '../components/layouts/content/content'
import marked from 'marked'
import Hero from '../components/hero/hero'
import VideoHighlight from '../components/video-highlight/video-highlight'
import { content, title } from '../components/content/_home'
import FindUs from '../components/find-us/find-us'
import Partners from '../components/partners/partners'
import { Graduates } from '../components/team/team'

export default () => {
  return (
    <Layout>
      <Head>
        <meta
          name='google-site-verification'
          content='YvWW5A5Yye9vDijg-oTcYoggq9HkweFT-6J9d6xjnNA'
        />
        <title>{title}</title>
      </Head>
      <Hero />
      <Content>
        <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
      </Content>
      <Graduates />
      <Partners />
      <VideoHighlight />
    </Layout>
  )
}
