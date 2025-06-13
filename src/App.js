import React, { useState, useEffect } from 'react';
import './App.css';

const wishesData = [
  {
    timestamp: "2025-06-10T00:07:01",
    email: "viky013@gmail.com",
    name: "Viky",
    relationship: "Her husband friend",
    wish: "Always keeping smile and enjoy the life, wishing a gr8 happy birthday..!!",
    memory: "Thanks for making to my marriage.",
    oneWord: "Sai's Queen",
    photo: "",
    firstMeet: "Meeting with Sai",
    futureWish: "Be happy and staying smiling.  3 boys under your control and make more memories with 3 boysss"
  },
  {
    timestamp: "2025-06-10T06:06:32",
    email: "drmsvelu159@gmail.com",
    name: "Singaravelu dr",
    relationship: "Chittappa",
    wish: "My heartiest wishes to my beloved Ais on her special day to achieve many more laurels in her career and more happiness in her family and good health and peace of mind to celebrate many more days in future with ALMIGHTY BLESSINGS",
    memory: "One of the wonderful lady who balances family and work respecting seniors and inclusiveness which I always cherish GOD GIVEN GIFT to our family",
    oneWord: "Greater all rounder in vadamttam family",
    photo: "",
    firstMeet: "Since her day of birth",
    futureWish: "Ever loving daughter of our family"
  },
  {
    timestamp: "2025-06-10T06:39:25",
    email: "radkantik@gmail.com",
    name: "Radha Kannan",
    relationship: "Neighbour",
    wish: "Wishing Dear Aishu lots of happiness and more memorable times and occasions with family",
    memory: "Even though our association was short every interaction with her was full of energy and fun. Keep up the spirits Aishu",
    oneWord: "Bundle of energy",
    photo: "",
    firstMeet: "When we moved in to Purva",
    futureWish: "Wishing her lots of prosperity and happiness"
  },
  {
    timestamp: "2025-06-10T07:32:18",
    email: "guru1pranam@yahoo.com",
    name: "Saigeetha",
    relationship: "Big sister",
    wish: "Happy birthday!!!! Vaazgha vallamudan",
    memory: "Beautiful smile, composed, cheerful, positive attitude....",
    oneWord: "Sweet person my",
    photo: "",
    firstMeet: "Happily married to my dear kutti bro",
    futureWish: "Infinite blessings"
  },
  {
    timestamp: "2025-06-10T09:28:18",
    email: "indu.photos.2023@gmail.com",
    name: "Indu",
    relationship: "Friend",
    wish: "Happiest 40 th birthday!!",
    memory: "She has been my friendsince school days. She is part of my childhood and that's a special part of everyone' s life. After my parents and brother she s the only person who has known me through thick and thin since school days. I still have her name saved as Araticket in my phone.",
    oneWord: "Energy!",
    photo: "",
    firstMeet: "School",
    futureWish: "To healthy aging! I hope we get to travel together every year till our feet let us!"
  },
  {
    timestamp: "2025-06-10T10:48:23",
    email: "asokan48@gmail.com",
    name: "Asokan R",
    relationship: "Uncle",
    wish: "Very very Happy Birthday",
    memory: "I wonder for her intelligence and performance",
    oneWord: "Most  intelligent girl in our family",
    photo: "",
    firstMeet: "Know her from birth",
    futureWish: "Wish her all the best"
  },
  {
    timestamp: "2025-06-10T18:27:54",
    email: "akila.mktg@gmail.com",
    name: "Akila Kumar",
    relationship: "Cousin",
    wish: "Hi! Aishu, I see that Sai has achieved a lot from a career and family perspective. I hear from him that you have influenced his journey positively every step of the way and made him the man he is.  Being a great mom, wife, daughter and employee is a huge challenge and you are executing it with aplomb and grace. My birthday wishes are for you to take time out for you, seize the day and enjoy life the way you want it to unfold.",
    memory: "My visit to your place. With everything going on in your busy life you were a graceful hostess. Thank you!",
    oneWord: "Capable",
    photo: "https://drive.google.com/open?id=1MiujCVDCH_rDqcFtssXnvI04MmMSCszO, https://drive.google.com/open?id=1zgTAbQPR7NlhZlqwS1ldjDaXKIHwptyG, https://drive.google.com/open?id=1cbqTBU1jXNOIeV-6o2E-Z9hwY37TqbMu, https://drive.google.com/open?id=1t7SNYCsSVroKLB27F2krHlJBiiPjglF7, https://drive.google.com/open?id=1RoecV7_-LRGlauMEOKQrpTUeLQu4jThE",
    firstMeet: "When Sai brought her to visit",
    futureWish: "Come to California!"
  },
  {
    timestamp: "2025-06-10T19:33:32",
    email: "ramya2004@gmail.com",
    name: "Ramya & Balu",
    relationship: "Cousin",
    wish: "Wish you a very very Happy Birthday and many more Happy moments in your life",
    memory: "Love your Smile, Positivity and admire your Creativity.",
    oneWord: "Energetic",
    photo: "",
    firstMeet: "Childhood",
    futureWish: "Keep up the smile"
  },
  {
    timestamp: "2025-06-10T22:44:57",
    email: "renuthomas2412@gmail.com",
    name: "Renu Ann Thomas",
    relationship: "Friend",
    wish: "Official notice: Age is just a number. In your case, it is completely unverified and irrelevant. Enjoy your youth-filled day and don't let anyone tell you otherwise! Calorie intake today is legally irrelevant. Go on, devour that cake, chase it with ice cream, and call it research— for science! Have a deliciously awesome birthday!",
    memory: "All the time spent was wonderful",
    oneWord: "Intelligent",
    photo: "",
    firstMeet: "on my wedding day",
    futureWish: "Solo bike ride from Kashmir to Kanyakumari ;)"
  },
  {
    timestamp: "2025-06-10T23:04:52",
    email: "arun4xp@gmail.com",
    name: "Arun Abraham",
    relationship: "Friend",
    wish: "Happy Birthday, Aishu !!",
    memory: "I'll never forget the moment you casually mentioned wanting to buy a Royal Enfield. I was genuinely surprised and super impressed !!",
    oneWord: "Adventurous",
    photo: "",
    firstMeet: "When she decided to marry my roomie",
    futureWish: "Cross country bike ride"
  },
  {
    timestamp: "2025-06-11T11:19:17",
    email: "sree.is.free@gmail.com",
    name: "Sree Shankar",
    relationship: "Colleague",
    wish: "Hey Aiswarya its been a wonderful journey till now working with you. You have shown how much a manager can get out of a team by just being a compassionate person who always stands by them when they need guidance or advice on the way forward. Please remain the lovely person you are :).",
    memory: "Our badminton experiences within Marvell and representing Marvell outside",
    oneWord: "Cheerful",
    photo: "",
    firstMeet: "Marvell Badminton League",
    futureWish: "Always being there for her team members"
  },
  {
    timestamp: "2025-06-11T12:42:23",
    email: "gurug.prasad@gmail.com",
    name: "Guruprasad",
    relationship: "Colleague",
    wish: "Happy Birthday Aishwarya. May God bless you with Happiness and good health",
    memory: "..",
    oneWord: "Amazing",
    photo: "",
    firstMeet: "In current team",
    futureWish: "Keep up the Energy and enthusiasm you bring to the entire team"
  },
  {
    timestamp: "2025-06-12T21:33:20",
    email: "nanthineesk@gmail.com",
    name: "Nanthinee",
    relationship: "Cousin",
    wish: "Wishing you many more happy returns of the day my dearest cousin. May all your wishes come true. Love you ❤️",
    memory: "I fondly remember the days I used to travel to her home in pondy during our summer holidays. Day trip to pondy beach, mother ashram, pillaiyar temple, and our hands full of kulfi sticks are my fav memories.",
    oneWord: "Perfectionist",
    photo: "",
    firstMeet: "From childhood.",
    futureWish: "Wishing you all happiness and joy❤️"
  },
  {
    timestamp: "2025-06-12T23:56:10",
    email: "shaan1955@gmail.com",
    name: "Shanmugam",
    relationship: "Chitthappa (but older than Her Appa)",
    wish: "A very happy birthday Aiswarya and many many returns of the day",
    memory: "It was 1985 when the summer heat was cooled down by the Kerela monsoon we travelled in the Tiruchi Thanjavur bus and then to R K Nursing home to meet the new arrival to this planet. Later that little one was named as Aiswarya which was more than justified, as we all could own cars and houses soon after her advent. We cherished and enjoyed her various stages of growth at Ranipet, Pondy and later at Chennai. Brilliant at her studies hence excelled in her academics. Unique character with calmness. Her marriage brought another man of exceptional personality with a combination of brilliancy and character into our circle and particularly a good company for me.  Now at Bangaluru Rishi and Yuvan over shadowed her which i am sure she herself wanted that way. We wish her all the best in the coming years.",
    oneWord: "Focused",
    photo: "",
    firstMeet: "18th June 1985",
    futureWish: "Should get into spirituality soon."
  },
  {
    timestamp: "2025-06-13T14:02:09",
    email: "kovai.vkc@gmail.com",
    name: "Kovaichelvan",
    relationship: "Uncle",
    wish: "Aishu, wish you a very happy birthday especially your 40th birthday which is an important milestone. best wishes in all your endeavours. \n\nஅருட்பேராற்றல் கருணையினால் உடல்நலம், நீள் ஆயுள், நிறை செல்வம், உயர் புகழ், மெய்ஞ்ஞானம் ஓங்கி வாழ்க. \n\nவாழ்க வளமுடன் \n",
    memory: "Our trip to Pondicherry during Deepavali and visit to Auroville with Aishu and Pradeep",
    oneWord: "Focussed",
    photo: "",
    firstMeet: "from her childhood",
    futureWish: "Stay focused both in the career and life"
  },
  {
    timestamp: "2025-06-13T14:12:37",
    email: "pradeepr2710@gmail.com",
    name: "Pradeep , Purva Windermere",
    relationship: "Same apartment",
    wish: "Happy Birthday Aiswarya 🎂🎂🎉🎉, May God bless you with many more happy returns 😊😊",
    memory: "Grateful to all the support you  gave during Jumpin January first edition !!!",
    oneWord: "Always helpful",
    photo: "",
    firstMeet: "Purva Windermere, Jumpin January",
    futureWish: "Best wishes to you and Sai , lovely couple  😊😊"
  },
  {
    timestamp: "2025-06-13T14:14:38",
    email: "vijaya.kovai@gmail.com",
    name: "Vijaya K",
    relationship: "Aunt",
    wish: "Many more happy returns of the day Aishwarya",
    memory: "Celebrated Diwali at Pondicherry",
    oneWord: "Such a lovely girl",
    photo: "",
    firstMeet: "35 years sgo",
    futureWish: "Best wishes for all your future dreams Aishwarya."
  },
  {
    timestamp: "2025-06-13T14:16:08",
    email: "dinuramalingam2807@gmail.com",
    name: "Dinesh Ramalingam",
    relationship: "Brother",
    wish: "Wishing you a very happy birthday! May the year be filled with wonderful surprises and bring you closer to achieving all your goals :):)",
    memory: "The first time she came to my wedding with her family, and the second time for the 'Marunthu pouring' :) both moments truly touched me. I honestly didn't expect her visit, and her presence brought so much happiness to me and my family. Her boldness, passion for her work, and the way she manages two kids is truly inspiring. You won't believe it, I often tell Kavya, 'Look at Aishwarya Akka, how beautifully she balances work and family. One day, you should be like her. So keep running towards your dreams just like she does'",
    oneWord: "",
    photo: "",
    firstMeet: "I don't exactly remember whether it was her wedding or Pradeep's that I attended with my dad, but I clearly remember what he said to me that day. 'You have to become like them one day.' Those words I still remember.",
    futureWish: "May you continue to inspire those around you and achieve all the dreams you hold close to your heart."
  },
  {
    timestamp: "2025-06-13T14:27:03",
    email: "hemavathyprashanth@gmail.com",
    name: "Hema",
    relationship: "Friend",
    wish: "We wish and hope this year brings you all the happiness. Happy Birthday Aishu akka.",
    memory: "I have known you for a long time but I had no chance to meet you. But this year like a sudden plan and it happened :)",
    oneWord: "Bold and lovable",
    photo: "https://drive.google.com/open?id=1UYoY4nBYzd2ZUUsn1NcMRQV2ct4ykpAT",
    firstMeet: "I don't know if you remember this. In 2015 my sister in law Sridevi approached you to inquire about Prashanth :)",
    futureWish: "I hope life brings you the kind of joy you've always given others — deep, lasting, and full of meaning. I wish for you a future filled with peace in your heart, strength in your path, and love in every chapter you write."   // Or more simply:  "I wish you a future where your dreams unfold with ease, your heart stays full, and you never forget how deeply loved you are."
  },
  {
    timestamp: "2025-06-13T15:31:38",
    email: "jln.apps@gmail.com",
    name: "Aravind",
    relationship: "Friend",
    wish: "Wishing many more  years of  health, happiness, success. Life begins at forty",
    memory: "Jumpin jan in 2018, Moments spent at C2 house.",
    oneWord: "Friendly",
    photo: "",
    firstMeet: "Knew her as Hema's colleague but bonded well after you guys moved in Purva",
    futureWish: "You are one humble, friendly and congenial.You are brave and continue like this"
  },
  {
    timestamp: "2025-06-13T16:05:54",
    email: "srimirfa@gmail.com",
    name: "R. Narayanan and family",
    relationship: "Family",
    wish: "Wishing AISH happiness always.",
    memory: "X",
    oneWord: "Kid respecting her parents",
    photo: "",
    firstMeet: "Her visit to Abu Dhabi",
    futureWish: "Always Happy and healthy"
  },
  {
    timestamp: "2025-06-13T16:56:34",
    email: "deabi23@gmail.com",
    name: "Baradan Dharumaiyan",
    relationship: "Friend",
    wish: "Happy birthday, Aishu! I wish you many more adventure-filled years ahead, filled with good health and peace.",
    memory: "Viky's wedding trip",
    oneWord: "Exuberant",
    photo: "https://drive.google.com/open?id=1WqHtayVtXjCs9hGcqZrhs3CsjW4gUcmr",
    firstMeet: "Around 2017 I believe",
    futureWish: "The privilege of a lifetime is to become who you truly are - Carl Jung"
  },
  {
    timestamp: "2025-06-13T17:30:09",
    email: "sundaramanicks@gmail.com",
    name: "Subash & Meena",
    relationship: "Appa & Amma",
    wish: "God bless you Ais. Always be simple, humble, be a bonding agent of your family, care for all and be a visionary to your kids.",
    memory: "Her birth, schooling, college days, employment, wedding with Sai, gifted us two grand children, still childish, etc etc. Can not isolate anything.",
    oneWord: "She challenge herself",
    photo: "",
    firstMeet: "We always run in parallel.",
    futureWish: "Wish to see her get settled in Sai's dream house"
  }
];

const placeholderImages = [
  "https://images.unsplash.com/photo-1530103862676-de8c9debad1d", // Colorful balloons
  "https://images.unsplash.com/photo-1729870526122-0de9a7113dc6", // Birthday cake
  "https://images.unsplash.com/photo-1583875762487-5f8f7c718d14", // Happy Birthday balloon
  "https://images.unsplash.com/photo-1558636508-e0db3814bd1d", // Elegant chocolate decoration
  "https://images.unsplash.com/photo-1576481564650-61d2ed81f6d5"  // Gold glitter party
];

// Family photo - you can replace this with your actual image base64 data
const familyPhotoBase64 = "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"; // Family photo placeholder

function App() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [filteredWishes, setFilteredWishes] = useState(wishesData);

  // Get unique relationships for filter
  const relationships = [...new Set(wishesData.map(wish => wish.relationship))];

  useEffect(() => {
    if (selectedFilter === 'all') {
      setFilteredWishes(wishesData);
    } else {
      setFilteredWishes(wishesData.filter(wish => wish.relationship === selectedFilter));
    }
  }, [selectedFilter]);

  const getImageForWish = (wish) => {
    // Use family photo for Arun Abraham and Renu Ann Thomas
    if (wish.email === "arun4xp@gmail.com" || wish.email === "renuthomas2412@gmail.com") {
      return familyPhotoBase64;
    }
    // Use random placeholder for others
    return placeholderImages[Math.floor(Math.random() * placeholderImages.length)];
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      {/* Header */}
      <header className="relative overflow-hidden bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-4 py-20 text-center">
          <div className="mb-8">
            <img 
              src={placeholderImages[0]} 
              alt="Birthday Celebration" 
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white shadow-lg object-cover"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Happy Birthday
          </h1>
          <h2 className="text-3xl md:text-4xl font-light mb-4 opacity-90">
            Aiswarya! 🎉
          </h2>
          <p className="text-xl md:text-2xl opacity-80 max-w-3xl mx-auto leading-relaxed">
            A collection of beautiful wishes from all the wonderful people who love you
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <div className="text-6xl animate-bounce">🎂</div>
            <div className="text-6xl animate-bounce" style={{animationDelay: '0.1s'}}>🎈</div>
            <div className="text-6xl animate-bounce" style={{animationDelay: '0.2s'}}>🎁</div>
            <div className="text-6xl animate-bounce" style={{animationDelay: '0.3s'}}>✨</div>
          </div>
        </div>
      </header>

      {/* Filter Section */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedFilter === 'all' 
                  ? 'bg-purple-600 text-white shadow-lg' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Wishes ({wishesData.length})
            </button>
            {relationships.map(relationship => (
              <button
                key={relationship}
                onClick={() => setSelectedFilter(relationship)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedFilter === relationship
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {relationship}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Wishes Grid */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWishes.map((wish, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1">
              {/* Image */}
              <div className="h-48 bg-gradient-to-br from-pink-200 to-purple-200 relative overflow-hidden">
                <img 
                  src={getImageForWish(wish)} 
                  alt="Celebration"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white bg-opacity-90 rounded-full px-3 py-1">
                  <span className="text-sm font-medium text-purple-600">{wish.relationship}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-800">{wish.name}</h3>
                  <span className="text-xs text-gray-500">{formatDate(wish.timestamp)}</span>
                </div>

                {/* One Word Description */}
                {wish.oneWord && (
                  <div className="mb-4">
                    <span className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      "{wish.oneWord}"
                    </span>
                  </div>
                )}

                {/* Wish */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-purple-600 mb-2">💝 Birthday Wish</h4>
                  <p className="text-gray-700 leading-relaxed">{wish.wish}</p>
                </div>

                {/* Memory */}
                {wish.memory && wish.memory !== '..' && wish.memory !== 'X' && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-pink-600 mb-2">💭 Beautiful Memory</h4>
                    <p className="text-gray-600 text-sm leading-relaxed italic">{wish.memory}</p>
                  </div>
                )}

                {/* First Meet */}
                {wish.firstMeet && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-indigo-600 mb-2">🤝 When We First Met</h4>
                    <p className="text-gray-600 text-sm">{wish.firstMeet}</p>
                  </div>
                )}

                {/* Future Wish */}
                {wish.futureWish && (
                  <div className="border-t pt-4">
                    <h4 className="text-sm font-semibold text-emerald-600 mb-2">🌟 For Your Future</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{wish.futureWish}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Your Birthday in Numbers 📊
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <div className="text-3xl font-bold text-purple-600">{wishesData.length}</div>
              <div className="text-sm text-gray-600">Total Wishes</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-pink-600">{relationships.length}</div>
              <div className="text-sm text-gray-600">Types of Relationships</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-indigo-600">
                {wishesData.filter(wish => wish.photo === "has_photos").length}
              </div>
              <div className="text-sm text-gray-600">Wishes with Photos</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-emerald-600">40</div>
              <div className="text-sm text-gray-600">Years of Awesomeness</div>
            </div>
          </div>
        </div>

        {/* Footer Message */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">With Love & Best Wishes 💕</h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto leading-relaxed">
              May this new year of your life be filled with joy, laughter, adventure, and all the 
              beautiful moments that make life special. You are loved by so many people! 🎉✨
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;