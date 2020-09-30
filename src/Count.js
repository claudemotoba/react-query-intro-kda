import React from 'react';
import fetchStudentsQuery from './fetchstudent.hook';

function Count() {
  const studentsQuery = fetchStudentsQuery();
  return (
    <h2>
      Nombre d'étudiants : {studentsQuery.data ? studentsQuery.data.length : ''}
    </h2>
  );
}

export default Count;
