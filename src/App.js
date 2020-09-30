import React from 'react';
import { ReactQueryDevtools } from 'react-query-devtools';
import Count from './Count';
import fetchStudentsQuery from './fetchstudent.hook';

function App() {
  const studentsQuery = fetchStudentsQuery();
  console.log(studentsQuery);
  function UIToDisplay() {
    if (studentsQuery.isLoading) {
      return <h2>Chargement...</h2>;
    } else if (studentsQuery.data) {
      return studentsQuery.data.map(({ id, nom, prenom }) => (
        <p key={id}>{nom + ' ' + prenom}</p>
      ));
    } else if (studentsQuery.isError) {
      return <p>{studentsQuery.error.message}</p>;
    }
  }
  return (
    <>
      <h1>Liste des étudiants</h1>
      <Count />
      {UIToDisplay()}
      <ReactQueryDevtools />
    </>
  );
}

export default App;
