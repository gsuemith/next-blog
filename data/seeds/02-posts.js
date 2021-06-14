
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {
          author_id: 1, title: 'The Adventures of Tom Sawyer', 
          body: 'Tom said to himself that it was not such a hollow world, after all. He had discovered a great law of human action, without knowing it -- namely, that in order to make a man or a boy covet a thing, it is only necessary to make the thing difficult to attain. If he had been a great and wise philosopher, like the writer of this book, he would now have comprehended that Work consists of whatever a body is obliged to do, and that Play consists of whatever a body is not obliged to do. And this would help him to understand why constructing artificial flowers or performing on a tread-mill is work, while rolling ten-pins or climbing Mont Blanc is only amusement. There are wealthy gentlemen in England who drive four-horse passenger-coaches twenty or thirty miles on a daily line, in the summer, because the privilege costs them considerable money; but if they were offered wages for the service, that would turn it into work and then they would resign.'
        },
        {
          author_id: 2, title: 'Inferno', body: 'And I — my head oppressed by horror — said: "Master, what is it that I hear? Who are those people so defeated by their pain?And he to me: "This miserable way is taken by the sorry souls of those who lived without disgrace and without praise. They now commingle with the coward angels, the company of those who were not rebels nor faithful to their God, but stood apart. The heavens, that their beauty not be lessened, have cast them out, nor will deep Hell receive them — even the wicked cannot glory in them.'},
        {
          author_id: 3, title: 'De Natura Deorum', body: 'There is in fact no subject upon which so much difference of opinion exists, not only among the unlearned but also among educated men; and the views entertained are so various and so discrepant, that, while it is no doubt a possible alternative that none of them is true, it is certainly impossible that more than one should be so.'}
      ]);
    });
};
