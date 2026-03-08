import {PageContainer} from "@/components/shared/PageContainer";

const InformationPage = () => {
    return <PageContainer title="Informasjon">
        <div>
            <p>Denne siden skal inneholde litt forskjellig informasjon som er meta for data</p>
            <ul>
                <li>
                    Antall og hva slags remarks som gjelder for vaktlister og hvor ofte de blir brukt!
                </li>
                <li>
                    Antall vaktkoder og hvor ofte de blir brukt!
                </li>
                <li>
                    Antall filer med dokumentasjon?
                </li>
            </ul>
        </div>
    </PageContainer>
}

export default InformationPage;