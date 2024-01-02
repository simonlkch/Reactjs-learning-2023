import { useState } from 'react'
import Section from './Section.jsx'
import { EXAMPLES } from '../data-with-examples.js'
import TabButton from './TabButton.jsx' 
import Tabs from './Tabs.jsx'
// becareful on the import, you can't change to variable name


export default function Examples() {
    let [selectTopic, setSelectTopic] = useState()

    function tabButtonOnClick(clickButton) 
    {
        setSelectTopic(clickButton)
    }

    return (
        <Section id="examples" title="Test">
            <h2>Example</h2>
            <Tabs 
                ButtonContainer="menu"
                button={
                <>
                    <TabButton isSeleted={selectTopic === 'components'} onClick={() => tabButtonOnClick('components')}>Component</TabButton>
                    <TabButton isSeleted={selectTopic === 'jsx'} onClick={() => tabButtonOnClick('jsx')}>JSX</TabButton>
                    <TabButton isSeleted={selectTopic === 'props'} onClick={() => tabButtonOnClick('props')}>Props</TabButton>
                    <TabButton isSeleted={selectTopic === 'state'} onClick={() => tabButtonOnClick('state')}>State</TabButton>
                </>
            }>
                {selectTopic && (<section id="tab-content">
                    <h3>{EXAMPLES[selectTopic].title}</h3>
                    <p>{EXAMPLES[selectTopic].description}</p>
                    <code>{EXAMPLES[selectTopic].code}</code>
                </section>)
                }
            </Tabs>

            {/* hint can use !selectTopic or selectTopic, or check undefined */}

            {/* {selectTopic === '' || selectTopic === null?'':
            <section id="tab-content">
                <h3>{DATA_WITH_EXAMPLES[selectTopic].title}</h3>
                <p>{DATA_WITH_EXAMPLES[selectTopic].description}</p>
                <code>{DATA_WITH_EXAMPLES[selectTopic].code}</code>
            </section>} */}

            {/* {selectTopic ? (<section id="tab-content">
                <h3>{EXAMPLES[selectTopic].title}</h3>
                <p>{EXAMPLES[selectTopic].description}</p>
                <code>{EXAMPLES[selectTopic].code}</code>
            </section>) : null
            } */}

            {/* or */}


        </Section>



    )

}