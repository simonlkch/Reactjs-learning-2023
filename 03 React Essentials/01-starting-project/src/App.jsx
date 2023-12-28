import { useState } from 'react'

import Header from './components/Header/Header.jsx'
import CustomElement from './components/CustomElement.jsx'
import TabButton from './components/TabButton.jsx'

// import asset
import jsxUi from './assets/jsx-ui.png'

// data
import { CORE_CONCEPTS } from './data.js'
import { EXAMPLES } from './data-with-examples.js'

function App() {
  let [selectTopic, setSelectTopic] = useState('')


  function tabButtonOnClick(clickButton) {
    console.log(clickButton)
    setSelectTopic(clickButton)
  }

  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
          <ul>
            {
              // use map function and return the result
              // can not use foreach, cause not yield the value
              // CORE_CONCEPTS.map((item, index) => {
              //   return (
              //     <CustomElement
              //       id={index}
              //       image={item.image}
              //       title={item.title}
              //       desc={item.description}
              //     />
              //   )
              // })
              CORE_CONCEPTS.map((item) =>(<CustomElement {...item}/>))
            }
          </ul>
        </section>
        <section id="examples">
          <h2>Example</h2>
          <menu>
            <TabButton isSeleted={selectTopic === 'components'} onClick={() => tabButtonOnClick('components')}>Component</TabButton>
            <TabButton isSeleted={selectTopic === 'jsx'} onClick={() => tabButtonOnClick('jsx')}>JSX</TabButton>
            <TabButton isSeleted={selectTopic === 'props'} onClick={() => tabButtonOnClick('props')}>Props</TabButton>
            <TabButton isSeleted={selectTopic === 'state'} onClick={() => tabButtonOnClick('state')}>State</TabButton>
          </menu>
        </section>


        {/* hint can use !selectTopic or selectTopic, or check undefined */}

        {/* {selectTopic === '' || selectTopic === null?'':
          <section id="tab-content">
            <h3>{EXAMPLES[selectTopic].title}</h3>
            <p>{EXAMPLES[selectTopic].description}</p>
            <code>{EXAMPLES[selectTopic].code}</code>
        </section>} */}

        {selectTopic ? (<section id="tab-content">
          <h3>{EXAMPLES[selectTopic].title}</h3>
          <p>{EXAMPLES[selectTopic].description}</p>
          <code>{EXAMPLES[selectTopic].code}</code>
        </section>) : null
        }

        {/* or */}

        {selectTopic && (<section id="tab-content">
          <h3>{EXAMPLES[selectTopic].title}</h3>
          <p>{EXAMPLES[selectTopic].description}</p>
          <code>{EXAMPLES[selectTopic].code}</code>
        </section>)
        }

      </main>
    </div>
  );
}

export default App;
