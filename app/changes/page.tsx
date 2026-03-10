import { AppPageContainer } from "@/components/shared/AppPageContainer";

const ChangePage = () => {
  return <AppPageContainer title="Endringer">
    <p>
      Her kommer en oversikt over endringer som har blitt gjort på vaktlistene.
      den vil inneholde følgende informasjon:
    </p>
    <ul>
      <li>
        Liste med ansatte hvor det har blitt funnet endringer på vaktlistene. (venstre)
      </li>
      <li>
        Oversikt over endrede vakter, tilsvarende liste for valgt ansatt!
      </li>
      <li>
        Oversikt over endringer som har blitt gjort for denne vakten
      </li>
      <li>
        Filter for merknad, eller fravær av sådan!
      </li>
    </ul>
  </AppPageContainer>;
};

export default ChangePage;