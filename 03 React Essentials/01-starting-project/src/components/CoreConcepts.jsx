import CoreConcept from "./CoreConcept"
import { CORE_CONCEPTS } from "../data"

export default function CoreConcepts(){
    return (
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
            CORE_CONCEPTS.map((item) =>(<CoreConcept {...item}/>))
          }
        </ul>
      </section>
    )
}