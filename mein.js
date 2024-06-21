function generateRandomQuote() {
    // Array of quotes
    const quotes = [
        'Never give up.',
        'Believe in yourself.',
        'Stay positive and happy.',
        'Work hard and don’t give up hope.',
        'Be open to criticism and keep learning.',
        'Surround yourself with happy, warm, and genuine people.',
        'Two things are infinite: the universe and human stupidity; and I  m not sure about the universe',
        'if you give up , you are gay',
        ' "The only way to do great work is to love what you do." – Steve Jobs',
        ' "The future belongs to those who believe in the beauty of their dreams." – Eleanor Roosevelt',
        ' "You miss 100% of the shots you don’t take." – Wayne Gretzky',
        ' "It does not matter how slowly you go as long as you do not stop." – Confucius',
        ' "The greatest glory in living lies not in never falling, but in rising every time we fall." – Nelson Mandela',
        ' "Success is not final, failure is not fatal: It is the courage to continue that counts." – Winston Churchill',
        ' "Happiness is not something ready made. It comes from your own actions." – Dalai Lama',
        ' "The purpose of our lives is to be happy." – Dalai Lama',
        ' "Happiness is when what you think, what you say, and what you do are in harmony." – Mahatma Gandhi',
        ' "The only true wisdom is in knowing you know nothing." – Socrates',
        ' "In the end, it’s not the years in your life that count. It’s the life in your years." – Abraham Lincoln',
        ' "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment." – Buddha',
        ' "The best way to predict the future is to create it." – Peter Drucker',
        ' "Leadership is not about being in charge. It is about taking care of those in your charge." – Simon Sinek',
        ' "A leader is one who knows the way, goes the way, and shows the way." – John C. Maxwell',
        ' "Love is composed of a single soul inhabiting two bodies." – Aristotle',
        ' "To love and be loved is to feel the sun from both sides." – David Viscott',
        ' "The best thing to hold onto in life is each other." – Audrey Hepburn',
        ' "Courage is not the absence of fear, but the triumph over it." – Nelson Mandela',
        ' "It takes courage to grow up and become who you really are." – E.E. Cummings',
        ' "You cannot swim for new horizons until you have courage to lose sight of the shore." – William Faulkner',

        ];

    const randomIndex = Math.floor(Math.random() * quotes.length);

    const randomQuoteElement = document.getElementById('random-quote');

    randomQuoteElement.textContent = quotes[randomIndex];
}
