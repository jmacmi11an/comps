import Button from "./Button";
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';

function App() {
    return <div>
        app
        <div>
            <Button ><GoBell/>Plain</Button>
        </div>
        <div>
            <Button primary className="mb-5">Primary</Button>
        </div>
        <div>
            <Button secondary rounded>Secondary</Button>
        </div>        
        <div>
            <Button success><GoCloudDownload/>Success</Button>
        </div>        
        <div>
            <Button warning outline>Warning</Button>
        </div>        
        <div>
            <Button danger rounded outline><GoDatabase/>Danger</Button>
        </div>        

    </div>
}

export default App;