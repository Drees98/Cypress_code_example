export function firstName(isSpouse) {
  const { random, checkErrors } = this

  const randomNumber = random(0, 1000)
  const name = names[randomNumber]

  cy.get("#basic_next").should("not.exist")
  cy.get("#name").clear()

  if (checkErrors === true) {
    cy.get("#name").type("a").blur()
    cy.get("#name_error").should("contain", "The name entered is too short")
    cy.get("#basic_next").should("not.exist")
    cy.get("#name").clear()
    cy.get("#name").type("portobellowMuchsroom").blur()
    cy.get("#name_error").should("contain", "The name entered is too long")
    cy.get("#basic_next").should("not.exist")
    cy.get("#name").clear()
    cy.get("#name").type("1Guys").blur()
    cy.get("#name_error").should("contain", "Names need to start with a letter.")
    cy.get("#basic_next").should("not.exist")
    cy.get("#name").clear()
  }

  cy.get("#name").type(name).blur()
  cy.get("#basic_next").click()
}

var names = [
  "John",
  "David",
  "Robert",
  "Michael",
  "Paul",
  "Richard",
  "James",
  "Peter",
  "William",
  "Brian",
  "Mary",
  "Linda",
  "Daniel",
  "Mark",
  "Chris",
  "Karen",
  "Jennifer",
  "Lisa",
  "Susan",
  "Michel",
  "Kevin",
  "George",
  "Jean",
  "Ken",
  "Steven",
  "Jim",
  "Andrew",
  "Michelle",
  "Eric",
  "Pierre",
  "Ron",
  "Don",
  "Nancy",
  "Andre",
  "Gary",
  "Thomas",
  "Frank",
  "Kim",
  "Kelly",
  "Jason",
  "Diane",
  "Donna",
  "Julie",
  "Claude",
  "Jeff",
  "Sandra",
  "Scott",
  "Heather",
  "Donald",
  "Roger",
  "Carol",
  "Denis",
  "Dan",
  "Patrick",
  "Wayne",
  "Nicole",
  "Martin",
  "Barbara",
  "Christine",
  "Doug",
  "Sarah",
  "Pat",
  "Joe",
  "Jacques",
  "Sharon",
  "Brenda",
  "Elizabeth",
  "Terry",
  "Bob",
  "Laura",
  "Bruce",
  "Marc",
  "Greg",
  "Gordon",
  "Joseph",
  "Stephen",
  "Gilles",
  "Rick",
  "Anne",
  "Mike",
  "Margaret",
  "Raymond",
  "Debbie",
  "Edward",
  "Guy",
  "Larry",
  "Wendy",
  "Charles",
  "Tim",
  "Tony",
  "Joanne",
  "Marie",
  "Kathy",
  "Alain",
  "Amanda",
  "Judy",
  "Ryan",
  "Cindy",
  "Angela",
  "Helen",
  "Jack",
  "Alex",
  "Ian",
  "Stephanie",
  "Melissa",
  "Janet",
  "Joan",
  "Denise",
  "Mario",
  "Gerald",
  "Cheryl",
  "Cathy",
  "Anna",
  "Ronald",
  "Marcel",
  "Fred",
  "Dennis",
  "Steve",
  "Shirley",
  "Catherine",
  "Keith",
  "Lynn",
  "Wm",
  "Louise",
  "Maria",
  "Robin",
  "Lori",
  "Andrea",
  "Tracy",
  "Allan",
  "Bill",
  "Randy",
  "Dave",
  "Barry",
  "Douglas",
  "Tammy",
  "Brad",
  "Jane",
  "Ann",
  "Patricia",
  "Serge",
  "Sylvain",
  "Melanie",
  "Rene",
  "Alan",
  "Ray",
  "Sue",
  "Jan",
  "Francois",
  "Luc",
  "Laurie",
  "Matthew",
  "Shannon",
  "Yves",
  "Dale",
  "Suzanne",
  "Tom",
  "Ruth",
  "Betty",
  "Adam",
  "Craig",
  "Janice",
  "Louis",
  "Amy",
  "Stephane",
  "Sean",
  "Norman",
  "Tina",
  "Nick",
  "Jonathan",
  "Danielle",
  "Roy",
  "Anthony",
  "Yvon",
  "Walter",
  "Irene",
  "Neil",
  "Gail",
  "Marilyn",
  "Elaine",
  "Bernard",
  "Maurice",
  "Sylvie",
  "Bonnie",
  "Henry",
  "Kenneth",
  "Shawn",
  "Albert",
  "Rose",
  "Shelley",
  "Sheila",
  "Joyce",
  "Glen",
  "Caroline",
  "Valerie",
  "Derek",
  "Simon",
  "Erin",
  "Ashley",
  "Christian",
  "Rita",
  "Christopher",
  "Harold",
  "Tanya",
  "Carl",
  "Colleen",
  "Darlene",
  "Dawn",
  "Jackie",
  "Sam",
  "Christina",
  "Brent",
  "Nathalie",
  "Trevor",
  "Ted",
  "Gerard",
  "Glenn",
  "Matt",
  "Jéssica",
  "Lorraine",
  "Harry",
  "Annie",
  "Rachel",
  "Jamie",
  "Carole",
  "Dean",
  "Dorothy",
  "Maureen",
  "Colin",
  "Diana",
  "Sherry",
  "Kathleen",
  "Darren",
  "Rejean",
  "Pam",
  "Murray",
  "Carolyn",
  "Chantal",
  "Tara",
  "Benoit",
  "Isabelle",
  "Arthur",
  "Paula",
  "Jerry",
  "Rebecca",
  "Bev",
  "Teresa",
  "Lise",
  "Justin",
  "Normand",
  "Pauline",
  "Tracey",
  "Philip",
  "Ralph",
  "Leslie",
  "Todd",
  "Ross",
  "Mária",
  "Connie",
  "Theresa",
  "Anita",
  "Carmen",
  "Jacqueline",
  "Al",
  "Sara",
  "Gerry",
  "Barb",
  "Lindsay",
  "Francis",
  "Danny",
  "Grace",
  "Monique",
  "Audrey",
  "Crystal",
  "Cynthia",
  "Roland",
  "Ed",
  "Natalie",
  "Marlene",
  "Yvonne",
  "Doris",
  "Bryan",
  "Patrícia",
  "Grant",
  "Dana",
  "Alice",
  "Leo",
  "Benjamin",
  "Vincent",
  "Gaetan",
  "Claire",
  "Lloyd",
  "Michele",
  "Lawrence",
  "Gord",
  "Sylvia",
  "Real",
  "Sandy",
  "Jill",
  "Katherine",
  "Robt",
  "Phil",
  "Leonard",
  "Rob",
  "Marion",
  "Aaron",
  "Kyle",
  "Emily",
  "Kerry",
  "Lee",
  "Patrica",
  "Monica",
  "Samantha",
  "Rhonda",
  "Jose",
  "Philippe",
  "Stacey",
  "Joel",
  "Lynda",
  "Victoria",
  "Evelyn",
  "Jocelyn",
  "Stan",
  "Bruno",
  "Debra",
  "Rod",
  "Jay",
  "Sonia",
  "Jenny",
  "Howard",
  "Jeremy",
  "Victor",
  "Eva",
  "Dianne",
  "Lorne",
  "Tyler",
  "Carrie",
  "June",
  "Vanessa",
  "Megan",
  "Alison",
  "Bernie",
  "Norma",
  "Shane",
  "Francine",
  "Ivan",
  "Doreen",
  "Krista",
  "Graham",
  "Jean-Guy",
  "Johanne",
  "Jen",
  "Jody",
  "Jessica",
  "Deborah",
  "Allison",
  "Russell",
  "Holly",
  "Garry",
  "Judith",
  "Manon",
  "Annette",
  "Deb",
  "Jordan",
  "Peggy",
  "Ellen",
  "Renee",
  "Mathieu",
  "Helene",
  "Kate",
  "Yvan",
  "Gloria",
  "Lucie",
  "Beth",
  "Ali",
  "Frances",
  "Gaston",
  "Jeffrey",
  "Ernest",
  "Wanda",
  "Alexander",
  "Penny",
  "Jean-Pierre",
  "Fernand",
  "Sophie",
  "Natasha",
  "Lois",
  "Warren",
  "Eileen",
  "Kimberly",
  "Carla",
  "Leanne",
  "Gilbert",
  "Jon",
  "Katie",
  "Lynne",
  "Chad",
  "Earl",
  "Charlene",
  "Karl",
  "Alfred",
  "Angie",
  "Eugene",
  "Allen",
  "Joy",
  "Stuart",
  "Lucy",
  "Darryl",
  "Leah",
  "Alexandre",
  "Dominique",
  "Dominic",
  "Josee",
  "Therese",
  "Nathan",
  "Jean-Francois",
  "Gabriel",
  "Terri",
  "Hugh",
  "Ginette",
  "Sebastien",
  "Gina",
  "Shelly",
  "Adrian",
  "Nadine",
  "Pascal",
  "Les",
  "Phyllis",
  "Kathryn",
  "Stanley",
  "Jean-Paul",
  "Antonio",
  "Georges",
  "Arlene",
  "Harvey",
  "Amber",
  "Nicolas",
  "Darrell",
  "Cory",
  "France",
  "Nadia",
  "Lorna",
  "Nicholas",
  "Lesley",
  "Gregory",
  "Heidi",
  "Florence",
  "Déborah",
  "Josh",
  "Alexandra",
  "Curtis",
  "Pamela",
  "Lucien",
  "Martha",
  "Edith",
  "Blair",
  "Lauren",
  "Len",
  "Geoff",
  "Samuel",
  "Vicki",
  "Val",
  "Troy",
  "April",
  "Beverly",
  "Cameron",
  "Sally",
  "Marco",
  "Tamara",
  "Jean-Claude",
  "Karine",
  "Laurent",
  "Jodi",
  "Ben",
  "Patti",
  "Olga",
  "Carlos",
  "Dany",
  "Art",
  "Darcy",
  "Martine",
  "Brandon",
  "Dwayne",
  "Jesse",
  "Deanna",
  "Genevieve",
  "Jean-Marc",
  "Jeanne",
  "Marjorie",
  "Robyn",
  "Gwen",
  "Esther",
  "Vince",
  "Júlia",
  "Brett",
  "Nelson",
  "Ghislain",
  "Patrice",
  "Emma",
  "Joanna",
  "Sabrina",
  "Lionel",
  "Timothy",
  "Claudette",
  "Ana",
  "Andy",
  "Marg",
  "Vivian",
  "Vicky",
  "Corey",
  "Veronica",
  "Jake",
  "Clarence",
  "Lillian",
  "Brigitte",
  "Pâmela",
  "Charlotte",
  "Clement",
  "Maggie",
  "Calvin",
  "Jacob",
  "Arnold",
  "Max",
  "Víctor",
  "Marina",
  "Noel",
  "Agnes",
  "Leon",
  "Kristen",
  "Mohamed",
  "Sherri",
  "Elena",
  "Lyle",
  "Jessie",
  "Joshua",
  "Jimmy",
  "Camille",
  "Mohammad",
  "Rodney",
  "Cecile",
  "Daryl",
  "Travis",
  "Gisele",
  "Vera",
  "Stella",
  "Sheri",
  "Julien",
  "Reg",
  "Manuel",
  "Nina",
  "Tiffany",
  "Clare",
  "Roxanne",
  "Shaun",
  "Mona",
  "Geo",
  "Bert",
  "Marian",
  "Maxime",
  "Julia",
  "Bernice",
  "Trish",
  "Ruby",
  "Marianne",
  "Edwin",
  "Frederic",
  "Eleanor",
  "Edna",
  "Clifford",
  "Jo",
  "Rosemary",
  "Cliff",
  "Malcolm",
  "Sheldon",
  "Fran",
  "Germain",
  "Kirk",
  "Bertrand",
  "Kris",
  "Mel",
  "Micheline",
  "Hans",
  "Kent",
  "Muhammad",
  "Angelo",
  "Jocelyne",
  "Lyne",
  "Beverley",
  "Henri",
  "Wade",
  "Phillip",
  "Marvin",
  "Armand",
  "Celine",
  "Lana",
  "Perry",
  "Ernie",
  "Liz",
  "Roberta",
  "Mandy",
  "Evan",
  "Nicola",
  "Guillaume",
  "Charlie",
  "Madeleine",
  "Hong",
  "Kay",
  "Clayton",
  "Patty",
  "Candace",
  "Mohammed",
  "Jeanette",
  "Yvette",
  "Kimberley",
  "Ahmed",
  "Trudy",
  "Lina",
  "Stewart",
  "Remi",
  "Gladys",
  "Glenda",
  "Jeannine",
  "Herbert",
  "Luke",
  "Colette",
  "Erika",
  "Olivier",
  "Duane",
  "Shauna",
  "Conrad",
  "Alvin",
  "Jerome",
  "Leona",
  "Gillian",
  "Syed",
  "Courtney",
  "Chuck",
  "Rosa",
  "Brittany",
  "Luis",
  "Hazel",
  "Elsie",
  "Ingrid",
  "Stacy",
  "Lucille",
  "May",
  "Kristina",
  "Simone",
  "Corinne",
  "Faye",
  "Wes",
  "Russ",
  "Shawna",
  "Gayle",
  "Wai",
  "Marie-Claude",
  "Lydia",
  "Nora",
  "Muriel",
  "Marty",
  "Edgar",
  "Kristin",
  "Janine",
  "Jules",
  "Anne-Marie",
  "Derrick",
  "Jenna",
  "Loretta",
  "Toni",
  "Tricia",
  "Lily",
  "Kurt",
  "Lance",
  "Kayla",
  "Guylaine",
  "Candice",
  "Johnny",
  "Will",
  "Isabel",
  "Marcia",
  "Bradley",
  "Wilfred",
  "Leigh",
  "Aline",
  "Melvin",
  "Drew",
  "Jeannette",
  "Frederick",
  "Fern",
  "Jean-Yves",
  "Cam",
  "Paulette",
  "Josephine",
  "Chelsea",
  "Glória",
  "Erik",
  "Veronique",
  "Gino",
  "Joey",
  "Cecil",
  "Fiona",
  "Ida",
  "Jean-Marie",
  "Lena",
  "Li",
  "Juan",
  "Bernadette",
  "Sheryl",
  "Maxine",
  "Duncan",
  "Hilda",
  "Nikki",
  "Lou",
  "Norm",
  "Reginald",
  "Dustin",
  "Emile",
  "Kari",
  "Marie-Eve",
  "Yan",
  "Josie",
  "Antoine",
  "Sonya",
  "Wesley",
  "Raynald",
  "Leão",
  "Dwight",
  "Geoffrey",
  "Helena",
  "Iris",
  "Meghan",
  "Ming",
  "Verna",
  "Owen",
  "Cassandra",
  "Geraldine",
  "Brendan",
  "Blake",
  "Jenn",
  "Line",
  "Rachelle",
  "Young",
  "Kristy",
  "Marguerite",
  "Taylor",
  "Virginia",
  "Clara",
  "Pierrette",
  "Herman",
  "Stefan",
  "Rae",
  "Sandi",
  "Karin",
  "Rudy",
  "Claúdia",
  "Katrina",
  "Violet",
  "Claudia",
  "Blaine",
  "Gabrielle",
  "Andrzej",
  "Hugo",
  "Hubert",
  "Abdul",
  "Beatrice",
  "Yannick",
  "Trina",
  "Rosaire",
  "Garth",
  "Wei",
  "Merle",
  "Fernando",
  "Alexis",
  "Etienne",
  "Vernon",
  "Myrna",
  "Kerri",
  "Roman",
  "Gene",
  "Emmanuel",
  "Pearl",
  "Jean-Louis",
  "Naomi",
  "Adrienne",
  "Adrien",
  "Yu",
  "Cody",
  "Marc-Andre",
  "Monika",
  "Kristine",
  "Jaime",
  "Maryse",
  "Byron",
  "Melinda",
  "Bobby",
  "Jas",
  "Vic",
  "Dallas",
  "Alícia",
  "Amir",
  "Olivia",
  "Daniela",
  "Morgan",
  "Roberto",
  "Tommy",
  "Alana",
  "Jorge",
  "Georgina",
  "Mitch",
  "Jian",
  "Vern",
  "Érica",
  "Jasmine",
  "Stephan",
  "Julian",
  "Eddie",
  "Dick",
  "Elmer",
  "Dylan",
  "Lindsey",
  "Felix",
  "Wilma",
  "Thanh",
  "Cyril",
  "Kirsten",
  "Laurel",
  "Irina",
  "Huguette",
  "Laverne",
  "Sophia",
  "Omar",
  "Miriam",
  "Romeo",
  "Jared",
  "Oliver",
  "Erica",
  "Cristina",
  "Luigi",
  "Ahmad",
  "Dina",
  "Alma",
  "Christiane",
  "Billy",
  "Mildred",
  "Sunny",
  "Jean-Luc",
  "Vladimir",
  "Carlo",
  "Adele",
  "Mireille",
  "Micheal",
  "Emilie",
  "Angel",
  "Jillian",
  "Shari",
  "Casey",
  "Mitchell",
  "Kara",
  "Kelsey",
  "Laurence",
  "Ethel",
  "Susanne",
  "Hilary",
  "Xiao",
  "Miranda",
  "Raj",
  "Winston",
  "Brandy",
  "Pete",
  "Ping",
  "Karla",
  "Steeve",
  "Kendra",
  "Marsha",
  "Melody",
  "Morris",
  "Clint",
  "Randall",
  "Alicia",
  "Jean-Philippe",
  "Andree",
  "Francoise",
  "Hector",
  "Susie",
  "Mei",
  "Igor",
  "Adriana",
  "Chantale",
  "Tânia",
  "Carey",
  "Fatima",
  "Marnie",
  "Renald",
  "Nigel",
  "Trent",
  "Ivy",
  "Cara",
  "Janis",
  "Christa",
  "Thelma",
  "Giuseppe",
  "Or",
  "Roch",
  "Sonja",
  "Lin",
  "Gavin",
  "Dora",
  "Ella",
  "Carman",
  "Jacquie",
  "Hannah",
  "Becky",
  "Kenny",
  "Ricky",
  "Elisabeth",
  "Wally",
  "Kelvin",
  "Eddy",
  "Giovanni",
  "Lewis",
  "Lea",
  "Anton",
  "Yi",
  "Wilson",
  "Jana",
  "Kai",
  "Garnet",
  "Jo-Anne",
  "Myriam",
  "Floyd",
  "Angus",
  "Belinda",
  "Rolland",
  "Yolande",
  "Dolores",
  "Christy",
  "Charmaine",
  "Graeme",
  "Daphne",
  "Jodie",
  "Caitlin",
  "Margo",
  "Spencer",
  "Ricardo",
  "Gus",
  "Winnie",
  "Dee",
  "Regina",
  "Miguel",
  "Claudine",
  "Marie-Josee",
  "Juanita",
  "Elise",
  "Mathew",
  "Bertha",
  "Karim",
  "Brooke",
  "Jing",
  "Isaac",
  "Noreen",
  "Edmond",
  "Patsy",
  "Gertrude",
  "Sheena",
  "Min",
  "Marcus",
  "Domenic",
  "Fay",
  "Wallace",
  "Ada",
  "Carly",
  "Christie",
  "Pascale",
  "Alyssa",
  "Tania",
  "Olive",
  "Jeannie",
  "Annick",
  "Devon",
  "Austin",
  "Herb",
  "Minh",
  "Abe",
  "Chi",
  "Oscar",
  "Ghislaine",
  "Jp",
  "Dino",
  "Tatiana",
  "Ying",
  "Marta",
  "Lyn",
  "Archie",
  "Jayne",
  "Name",
  "Chas",
  "André",
  "Germaine",
  "Hui",
  "Devin",
]
