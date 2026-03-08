import {PageContainer} from "@/components/shared/PageContainer";

const EmployeePage = () => {
    return <PageContainer title="Ansatte">
        <div>
            <p>Denne siden skal inneholde forskjellige data per ansatt. Den skal inneholde følgende features:</p>
            <ul>
                <li>
                    Heatmap for antall vakter fordelt på uker. Type senvakt på fredager og normalvakt på fredag
                </li>
                <li>
                    Antall endrede vakter
                </li>
            </ul>
        </div>
    </PageContainer>
}

export default EmployeePage;