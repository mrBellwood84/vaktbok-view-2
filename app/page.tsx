import {AppPageContainer} from "@/components/shared/AppPageContainer";

const Home = () => {

    return <AppPageContainer title="Hjem">
        <div>
            <p>Dette er startsiden med grunnelggende informasjon som</p>
            <ul>
                <li>Totalt antall vakter registert</li>
                <li>Total antall ansatte registert</li>
                <li>Totalt antall endringer registert</li>
                <li>Totalt antall endringer uten merknad registert!</li>
            </ul>
        </div>
    </AppPageContainer>
}

export default Home