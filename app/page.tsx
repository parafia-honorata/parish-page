import MassesAndOffice from "@/components/MassesAndOffice";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <MassesAndOffice />
      <article>
        <h3>O parafii</h3>
        <p>Parafia pw. błogosławionego Honorata Koźmińskiego została powołana stosunkowo niedawno i jest najmłodszą parafią w Będzinie-Grodźcu. Założono ją w celu posługi duszpasterskiej dla mieszkańców kopalnianego osiedla przy ulicy Konopnickiej.</p>
        <p>Choć ustanowienia parafii dokonał biskup częstochowski Stanisław Nowak, obecnie należy ona do Diecezji Sosnowieckiej. Biskup Adam Śmigielski dokonał jej uroczystej konsekracji 15 października 2000 r.</p>
        <p>W parafii działa Koło Żywego Różańca. W każdą środę zmawiana jest Nowenna do Matki Bożej Nieustającej pomocy, a w piątki Koronka do Bożego Miłosierdzia.</p>
      </article>
      <article>
        <h3>Błogosławiony Honorat Koźmiński</h3>
        <p>Życie błogosławionego Honorata pokazuje, że Pan Bóg ma dla każdego z nas plan, oraz że drogę do świętości poprzedza czasem zwątpienie i kryzys wiary. Buntownik z pobożnej inteligenckiej rodziny stał się jedną z najważniejszych postaci życia religijnego polaków pod zaborami.</p>
        <p>W młodości, idąc za przykładem ojca, uczył się na architekta. Wstąpił do płockiego gimnazjum. Zostaje doświadczony na wiele sposobów, młodzieńczym niedowiarstwem, przedwczesną śmiercią ojca, a wreszcie wtrąceniem do carskiego więzienia. Z warszawskiej Cytadeli wyszedł odmieniony. Po przeżytym nawróceniu stał się spokojny i pogodzony z Bogiem. Niedługo później rozpoczął swoje życie zakonne jako Kapucyn.</p>
        <p>W trudnych warunkach zaborów, nieustannie podejrzewany przez władzę rosyjskie o działalność wywrotową i konspirację, założył 23 zgromadzenia zakonne i 26 stowarzyszeń tercjarskich. Jednocześnie też promował ukryte zgromadzenia zakonne, jako formę oporu wobec rosyjskiej opresji. Był uznanym spowiednikiem, tytanem pracy i niestrudzonym organizatorem. Zmarł w 1916 r. w opinii świętości.</p>
      </article>
      <article>
        <address>
          <p>Marii Konopnickiej 11A</p>
          <p>42-506 Będzin</p>
          <p>Email: <a href="mailto:parafiahonorat@gmail.com">parafiahonorat@gmail.com</a></p>
          <p>Tel: 690-649-750</p>
        </address>
          <p>Numer konta:</p>
          <p>77 8591 0007 0410 0690 4678 0002</p>
          <p>Przelewy prosimy składać z dopiskiem &quot;Darowizna&quot;.</p>
          <p>Za wszelkie datki serdeczne Bóg zapłać!</p>
      </article>
    </main>
  );
}
