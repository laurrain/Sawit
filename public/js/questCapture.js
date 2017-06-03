/** var tmpl = Handlebars.compile($('#add').html());
var data = {
                    Idnumber : input.Idnumber,
                    Surname : input.surname,
                    Name : input.Name,
                    Fruit  : input.fruit,
                    Dairy : input.dairy,
                    Vegetable : input.vegetable,
                    Berry : input.berry,
                    Deciduous : input.deciduous,
                    Fields : input.fields,
                    Wine : input.wine,
                    Cellar : input.cellar,
                    Marketing : input.marketing,
                    Receptionist: input.receptionist,
                    Packaging: input.packaging,
                    Exports: input.exports,
                    Tourism : input.tourism
            };
//data[0].fruit= true;

$('body').append(tmpl(data));**/


var templates = {
  'checkbox': Handlebars.compile($('#questionaireCap').html())
  var data = {
                    Idnumber : input.Idnumber,
                    Surname : input.surname,
                    Name : input.Name,
                    Fruit  : input.fruit,
                    Dairy : input.dairy,
                    Vegetable : input.vegetable,
                    Berry : input.berry,
                    Deciduous : input.deciduous,
                    Fields : input.fields,
                    Wine : input.wine,
                    Cellar : input.cellar,
                    Marketing : input.marketing,
                    Receptionist: input.receptionist,
                    Packaging: input.packaging,
                    Exports: input.exports,
                    Tourism : input.tourism
            };
};
$('body').append(templates(data));
