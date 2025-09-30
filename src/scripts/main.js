'use strict';

import people from '../people.json' with { type: 'json' };

// eslint-disable-next-line no-console
(function generateTable() {
  const table = document.querySelector('.dashboard');

  if (!table) {
    return;
  }

  const target = table.querySelector('tbody') || table;

  const fragment = document.createDocumentFragment();

  people.forEach((person) => {
    const tr = document.createElement('tr');

    const age = person.died - person.born;
    const century = Math.ceil(person.died / 100);

    const values = [
      person.name,
      person.sex,
      person.born,
      person.died,
      age,
      century,
    ];

    values.forEach((value) => {
      const td = document.createElement('td');

      td.textContent = value;
      tr.appendChild(td);
    });

    fragment.appendChild(tr);
  });

  target.appendChild(fragment);
})();
