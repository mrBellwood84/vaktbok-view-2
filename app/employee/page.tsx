
import {PageContainer} from "@/components/shared/PageContainer";
import {LoadEmployees} from "@/components/pseudo/LoadEmployees";
import {Box} from "@mui/material";
import {EmployeeSelectList} from "@/components/employee/EmployeeSelectList";
import {EmployeeViewData} from "@/components/employee/EmployeeViewData";

const EmployeePage = () => {

    return <PageContainer title="Ansatte">
        <LoadEmployees />

        <Box>!!! Toolbar here !!!</Box>

        <Box sx={{display: "flex", flexDirection: "row"}}>
            <EmployeeSelectList />
            <EmployeeViewData />

        </Box>

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