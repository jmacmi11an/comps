import Accordion from '../components/Accordion';

function AccordionPage() {
    const items = [
        {
            id: 'asoidjf',
            label: 'can i use react on a project?',
            content: 'you can use whatever you want.you can use whatever you want.you can use whatever you want. '
        }, 
        {
            id: 'sdjoif',
            label: 'can i use JS on a project?',
            content: 'you can use whatever you want.you can use whatever you want.you can use whatever you want. '        },
        {
            id: 'odfijs',
            label: 'can i use CSS on a project?',
            content: 'you can use whatever you want.you can use whatever you want.you can use whatever you want. '        }
    ]

    return <Accordion items={items}/>
}

export default AccordionPage;