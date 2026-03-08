import {PageContainer} from "@/components/shared/PageContainer";

const HeatmapPage = () => {
    return <PageContainer title="Vaktfordeling">
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
    </PageContainer>
}

export default HeatmapPage;
