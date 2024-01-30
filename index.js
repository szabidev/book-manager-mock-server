const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// This will store our books in memory,
// "id" is the unique identifier,
// other fields are up to you
let books = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Classic",
    description:
      "Harper Lee's classic novel explores racial injustice and moral growth in the American South through the eyes of Scout Finch, a young girl witnessing her father's defense of a black man wrongly accused of rape.",
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    description:
      "George Orwell's dystopian masterpiece, 1984, paints a chilling picture of a totalitarian regime where the government controls every aspect of life, and the protagonist, Winston Smith, struggles against the omnipresent surveillance and thought control.",
  },
  {
    id: 3,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    description:
      "F. Scott Fitzgerald's classic novel, The Great Gatsby, delves into the excesses and disillusionment of the Jazz Age, narrated by Nick Carraway as he becomes entangled in the tragic love story of Jay Gatsby and Daisy Buchanan.",
  },
  {
    id: 4,
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    genre: "Science Fiction",
    description:
      "Douglas Adams' comedic science fiction masterpiece takes readers on a hilarious intergalactic journey with Arthur Dent, a bewildered Earthman, and Ford Prefect, his alien friend, as they navigate space, time, and improbable situations with the help of the titular guidebook.",
  },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Coming of Age",
    description:
      "J.D. Salinger's The Catcher in the Rye follows the angst-ridden journey of Holden Caulfield as he grapples with the challenges of adolescence, alienation, and the search for authenticity in a superficial world.",
  },
  {
    id: 6,
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    description:
      "J.R.R. Tolkien's epic fantasy trilogy, The Lord of the Rings, transports readers to the magical world of Middle-earth, where Frodo Baggins and a diverse fellowship embark on a perilous quest to destroy the One Ring and save their world from the dark lord Sauron.",
  },
  {
    id: 7,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    description:
      "Jane Austen's timeless romance novel, Pride and Prejudice, explores the complexities of love and societal expectations as Elizabeth Bennet and Mr. Darcy navigate misunderstandings, societal norms, and personal growth in 19th-century England.",
  },
  {
    id: 8,
    title: "The Girl with the Dragon Tattoo",
    author: "Stieg Larsson",
    genre: "Mystery",
    description:
      "Stieg Larsson's gripping mystery novel, The Girl with the Dragon Tattoo, follows investigative journalist Mikael Blomkvist and hacker Lisbeth Salander as they unravel a dark family history filled with secrets, corruption, and violence.",
  },
  {
    id: 9,
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Philosophical Fiction",
    description:
      "Paulo Coelho's philosophical novel, The Alchemist, tells the enchanting story of Santiago, a young shepherd on a quest for his personal legend, as he discovers the power of dreams, destiny, and the pursuit of one's true purpose in life.",
  },
  {
    id: 10,
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    genre: "Non-fiction",
    description:
      "Yuval Noah Harari's thought-provoking exploration, Sapiens, offers a captivating journey through the history of humanity, from ancient times to the present, examining the cultural, social, and cognitive revolutions that shaped the course of human evolution.",
  },

  {
    id: 11,
    title: "One Hundred Years of Solitude",
    author: "Gabriel Garcia Marquez",
    genre: "Magical Realism",
    description:
      "Gabriel Garcia Marquez's masterpiece, One Hundred Years of Solitude, weaves a multi-generational tale of the Buendía family in the fictional town of Macondo, blending magical realism with political and social commentary.",
  },
  {
    id: 12,
    title: "The Hunger Games",
    author: "Suzanne Collins",
    genre: "Young Adult",
    description:
      "Suzanne Collins' dystopian series begins with The Hunger Games, where Katniss Everdeen navigates a deadly televised competition in a future world divided by class and political manipulation.",
  },
  {
    id: 13,
    title: "The Color Purple",
    author: "Alice Walker",
    genre: "Historical Fiction",
    description:
      "Alice Walker's Pulitzer Prize-winning novel, The Color Purple, unfolds the life of Celie, an African American woman in the early 20th century, exploring themes of racism, sexism, and resilience.",
  },
  {
    id: 14,
    title: "The Martian",
    author: "Andy Weir",
    genre: "Science Fiction",
    description:
      "Andy Weir's thrilling science fiction novel, The Martian, follows astronaut Mark Watney's struggle for survival after being stranded on Mars, showcasing ingenuity, humor, and the human spirit.",
  },
  {
    id: 15,
    title: "Brave New World",
    author: "Aldous Huxley",
    genre: "Dystopian",
    description:
      "Aldous Huxley's classic dystopian novel, Brave New World, depicts a future society where advanced technology and conditioning control every aspect of human life, challenging the notions of individuality and freedom.",
  },
  {
    id: 16,
    title: "The Kite Runner",
    author: "Khaled Hosseini",
    genre: "Contemporary Fiction",
    description:
      "Khaled Hosseini's emotionally charged novel, The Kite Runner, explores the complex relationships between childhood friends Amir and Hassan against the backdrop of Afghanistan's tumultuous history.",
  },
  {
    id: 17,
    title: "The Road",
    author: "Cormac McCarthy",
    genre: "Post-Apocalyptic",
    description:
      "Cormac McCarthy's haunting post-apocalyptic novel, The Road, follows a father and son's journey through a desolate world, exploring themes of survival, hope, and the enduring bond between parent and child.",
  },
  {
    id: 18,
    title: "Murder on the Orient Express",
    author: "Agatha Christie",
    genre: "Mystery",
    description:
      "Agatha Christie's classic mystery novel, Murder on the Orient Express, follows detective Hercule Poirot as he solves a murder on a luxurious train journey, revealing a web of intricate motives and secrets.",
  },
  {
    id: 19,
    title: "The Shining",
    author: "Stephen King",
    genre: "Horror",
    description:
      "Stephen King's iconic horror novel, The Shining, tells the chilling story of the Torrance family's isolation in the haunted Overlook Hotel, where supernatural forces and the hotel's dark history drive the father to madness.",
  },
  {
    id: 20,
    title: "The Handmaid's Tale",
    author: "Margaret Atwood",
    genre: "Dystopian",
    description:
      "Margaret Atwood's dystopian novel, The Handmaid's Tale, paints a harrowing picture of a theocratic society where women are oppressed and one woman, Offred, struggles against the system to reclaim her identity and freedom.",
  },
];

// Get all books
app.get("/books", (req, res) => {
  res.json(books);
});

// Add a new book
app.post("/books", (req, res) => {
  const book = { id: Date.now(), ...req.body };
  books.push(book);
  res.status(201).json(book);
});

// Update a book
app.put("/books/:id", (req, res) => {
  const index = books.findIndex((book) => book.id === parseInt(req.params.id));
  if (index >= 0) {
    books[index] = { ...books[index], ...req.body };
    res.json(books[index]);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});

// Delete a book
app.delete("/books/:id", (req, res) => {
  books = books.filter((book) => book.id !== parseInt(req.params.id));
  res.status(204).send();
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
