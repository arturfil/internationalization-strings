import { Navigator } from "../components/Navigator";
import Selector from "../components/selector";
import langs from "../data/lang_keys";
import data from '../data/strings.json'

interface Props {
    language: string 
    setLanguage: (e: string) => void
}


const InformationPage = ({language, setLanguage}: Props) => {
    return (
        <div>
            <Navigator/>
            <h2>Random information</h2>            
            <p>{JSON.stringify(data[language].greetings)}</p>
            <Selector strings={langs} setLanguange={setLanguage}/>
        </div>
    )
}

export default InformationPage;
