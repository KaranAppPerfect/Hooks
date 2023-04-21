import Section from "./Section"
import Heading from "./Heading"
export default function Main(){

    return (
        <Section>
            <Heading> Main Heading </Heading>
            <Section>
                <Heading> Sub Heading </Heading>
                <Heading> Sub Heading </Heading>
                <Section>
                    <Heading> Sub Sub Heading </Heading>
                    <Heading> Sub Sub Heading </Heading>
                </Section>
            </Section>
        </Section>
    )


}