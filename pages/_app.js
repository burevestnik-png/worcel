import '../styles/globals.css'
import 'normalize.css/normalize.css'
import { RecoilRoot } from 'recoil'

function MyApp({ Component, pageProps }) {
    return (
        <RecoilRoot>
            <Component {...pageProps} />
        </RecoilRoot>
    )
}

export default MyApp
