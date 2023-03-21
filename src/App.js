import Accordion from './components/Accordion';

function App() {
    const items = [
        {
            label: 'can i use react on a project?',
            content: 'you can use whatever you want.you can use whatever you want.you can use whatever you want. '
        }, 
        {
            label: 'can i use JS on a project?',
            content: 'you can use whatever you want.you can use whatever you want.you can use whatever you want. '        },
        {
            label: 'can i use CSS on a project?',
            content: 'you can use whatever you want.you can use whatever you want.you can use whatever you want. '        }
    ]

    return <Accordion items={items}/>
}

export default App;