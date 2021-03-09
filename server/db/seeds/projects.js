
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, project_title: 'title1', about: 'about1'},
        {id: 2, project_title: 'title2', about: 'about2'},
        {id: 3, project_title: 'title3', about: 'about3'}
      ]);
    });
};
