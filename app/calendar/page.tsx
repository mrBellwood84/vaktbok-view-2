import {AppPageContainer} from "@/components/shared/AppPageContainer";

const CalendarPage = () => {
    return <AppPageContainer title="Kalender">
        <div>
            <p>Her kommer en kalender med ukesvisning. Den vil ha følgende features</p>
            <ul>
                <li>
                    Navigasjon for uke og år. Slider eller valg?
                </li>
                <li>
                    Søkefelt for ansatt
                </li>
                <li>
                    Markert ramme på arbeidsplan for skift som er endret
                </li>
                <li>
                    Dropdown meny for skift som er endret
                </li>
                <li>
                    Filter for å kun vise vakter som har blitt endret!
                </li>
            </ul>
        </div>
    </AppPageContainer>
}

export default CalendarPage;