import {AppPageContainer} from "@/components/shared/AppPageContainer";

const HeatmapPage = () => {
    return <AppPageContainer title="Vaktfordeling">
        <ul>
            <li>
                antall type vakter
            </li>
            <li>
                antall endringer på vaktlister
            </li>
            <li>
                sortering høyest lavest i forhold til disse verdiene
            </li>
        </ul>
    </AppPageContainer>
}

export default HeatmapPage;
